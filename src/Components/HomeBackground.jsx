import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function RebarGrid({ visible }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={ref} visible={visible}>
      {[...Array(20)].map((_, i) => (
        <mesh key={i} position={[i - 10, 0, 0]}>
          <boxGeometry args={[0.05, 10, 0.05]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}
      {[...Array(20)].map((_, i) => (
        <mesh key={i} position={[0, i - 5, 0]}>
          <boxGeometry args={[10, 0.05, 0.05]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}
    </group>
  );
}

function Building({ visible }) {
  return (
    <mesh visible={visible} position={[0, 0, 0]}>
      <boxGeometry args={[3, 5, 3]} />
      <meshStandardMaterial color="#cbd5f5" />
    </mesh>
  );
}

function Scene() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      {/* Stage 1: Blueprint grid */}
      {stage === 0 && (
        <gridHelper args={[20, 20, "#94a3b8", "#cbd5f5"]} />
      )}

      {/* Stage 2: Rebar */}
      {/* <RebarGrid visible={stage === 1} /> */}

      {/* Stage 3: Building */}
      <Building visible={stage === 2} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
}

export default function HomeBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}