import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { useRef } from "react";

function RebarBend({ progress }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = progress * Math.PI;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[i - 5, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 8, 16]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}
    </group>
  );
}

function BendingBars({ progress }) {
  return (
    <group>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[i - 3, 0, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100, progress * Math.PI]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
      ))}
    </group>
  );
}

function Building({ progress }) {
  return (
    <mesh scale={[1, progress * 5, 1]}>
      <boxGeometry args={[3, 1, 3]} />
      <meshStandardMaterial color="#cbd5f5" />
    </mesh>
  );
}

function Scene() {
  const scroll = useScroll();

  // ✅ Safe fallback
  const progress = scroll?.offset || 0;

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      <RebarBend progress={progress} />

      {progress > 0.3 && <BendingBars progress={progress} />}
      {progress > 0.6 && <Building progress={progress} />}
    </>
  );
}

export default function HomeScroll3D() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>

        {/* ✅ REQUIRED */}
        <ScrollControls pages={2} damping={0.2}>
          <Scene />
        </ScrollControls>

      </Canvas>
    </div>
  );
}