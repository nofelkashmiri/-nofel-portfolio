import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { random } from 'maath';
import { useReducedMotion } from 'framer-motion';
import { isWebGLAvailable } from '../../utils/webgl';

const Stars = ({ animate }: { animate: boolean }) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState<Float32Array>(
    () => random.inSphere(new Float32Array(3000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (animate && ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
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

  if (!isWebGLAvailable()) return null;

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1}
        frameloop={reduceMotion || !isVisible ? 'demand' : 'always'}
      >
        <Suspense fallback={null}>
          <Stars animate={!reduceMotion && isVisible} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
