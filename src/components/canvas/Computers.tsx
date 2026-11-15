import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Group, MathUtils } from 'three';

import CanvasLoader from '../layout/Loader';
import { isWebGLAvailable } from '../../utils/webgl';

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const modelRef = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!modelRef.current) return;

    modelRef.current.rotation.x = MathUtils.damp(
      modelRef.current.rotation.x,
      pointer.y * 0.08,
      4,
      delta
    );
    modelRef.current.rotation.y = MathUtils.damp(
      modelRef.current.rotation.y,
      pointer.x * 0.12,
      4,
      delta
    );
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.45} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.2} />
      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.16}>
        <group ref={modelRef}>
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.68}
            position={isMobile ? [0, -3, -2.2] : [0, -4.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </group>
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  if (!isWebGLAvailable()) return null;

  return (
    <div ref={containerRef} className="h-full w-full">
      {isMobile ? null : (
        <Canvas
          frameloop={isVisible ? 'always' : 'demand'}
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={isVisible}
              autoRotateSpeed={0.35}
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
