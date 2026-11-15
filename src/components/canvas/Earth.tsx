import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

import CanvasLoader from '../layout/Loader';
import { isWebGLAvailable } from '../../utils/webgl';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  if (!isWebGLAvailable()) {
    return (
      <div
        className="earth-fallback flex h-full min-h-[360px] items-center justify-center"
        role="img"
        aria-label="Decorative globe illustration"
      >
        <span className="earth-fallback-globe" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        shadows
        frameloop={reduceMotion || !isVisible ? 'demand' : 'always'}
        dpr={[1, 1.5]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={!reduceMotion && isVisible}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
