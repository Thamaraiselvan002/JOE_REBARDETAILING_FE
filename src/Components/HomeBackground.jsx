import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Line, Sphere, Cylinder } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

// ─── CURVED REBAR ─────────────────────────────────────────────────────────────
function CurvedRebar({ start, end, sag = 0.15, color = "#b6cad3ff", radius = 0.018 }) {
  const points = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = s.clone().lerp(e, 0.5);
    mid.y += sag;
    const curve = new THREE.QuadraticBezierCurve3(s, mid, e);
    return curve.getPoints(24);
  }, [start, end, sag]);

  const tubeRef = useRef();
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 24, radius, 6, false);
  }, [points, radius]);

  return (
    <mesh ref={tubeRef} geometry={geometry}>
      <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} />
    </mesh>
  );
}

// ─── REBAR CAGE GRID ──────────────────────────────────────────────────────────
function RebarCage({ visible }) {
  const group = useRef();
  const spacing = 0.45;
  const count = 9;
  const height = 3.5;

  // Horizontal rebars with slight sag
  const horizontalBars = useMemo(() => {
    const bars = [];
    for (let y = 0; y <= height; y += spacing) {
      for (let i = 0; i < count; i++) {
        const x = (i - count / 2) * spacing;
        bars.push({ start: [x, y, -(count / 2) * spacing], end: [x, y, (count / 2) * spacing], key: `h1-${y}-${i}` });
        bars.push({ start: [-(count / 2) * spacing, y, x], end: [(count / 2) * spacing, y, x], key: `h2-${y}-${i}` });
      }
    }
    return bars;
  }, []);

  // Vertical rebars (straight, no sag)
  const verticalBars = useMemo(() => {
    const bars = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = (i - count / 2) * spacing;
        const z = (j - count / 2) * spacing;
        bars.push({ start: [x, 0, z], end: [x, height, z], key: `v-${i}-${j}`, sag: 0 });
      }
    }
    return bars;
  }, []);

  useFrame((_, delta) => {
    if (!visible || !group.current) return;
    group.current.rotation.y += delta * 0.08;
  });

  if (!visible) return null;

  return (
    <group ref={group}>
      {verticalBars.map((b) => (
        <CurvedRebar key={b.key} start={b.start} end={b.end} sag={0} color="#95a4abff" />
      ))}
      {horizontalBars.map((b) => (
        <CurvedRebar key={b.key} start={b.start} end={b.end} sag={0.1} color="#b8d2deff" />
      ))}
    </group>
  );
}

// ─── WORKER FIGURE ────────────────────────────────────────────────────────────
function Worker({ position, rotation = [0, 0, 0], color = "#ff8f00" }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.09, 0.11, 0.5, 8]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.82, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffcc80" roughness={0.9} />
      </mesh>
      {/* Hard hat */}
      <mesh position={[0, 0.93, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.06, 8]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.06, 0.12, 0]}>
        <cylinderGeometry args={[0.045, 0.04, 0.38, 6]} />
        <meshStandardMaterial color="#37474f" roughness={0.9} />
      </mesh>
      <mesh position={[0.06, 0.12, 0]}>
        <cylinderGeometry args={[0.045, 0.04, 0.38, 6]} />
        <meshStandardMaterial color="#37474f" roughness={0.9} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.17, 0.55, 0]} rotation={[0, 0, 0.6]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 6]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0.17, 0.55, 0]} rotation={[0, 0, -0.6]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 6]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
    </group>
  );
}

// ─── TOWER CRANE ──────────────────────────────────────────────────────────────
function TowerCrane({ visible }) {
  const craneRef = useRef();
  useFrame((_, delta) => {
    if (craneRef.current && visible) {
      craneRef.current.rotation.y += delta * 0.12;
    }
  });

  if (!visible) return null;

  return (
    <group position={[5.5, 0, -1]}>
      {/* Mast */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[0.18, 8, 0.18]} />
        <meshStandardMaterial color="#ffd54f" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Rotating jib group */}
      <group ref={craneRef} position={[0, 8.1, 0]}>
        {/* Main jib */}
        <mesh position={[2.2, 0, 0]}>
          <boxGeometry args={[4.4, 0.13, 0.13]} />
          <meshStandardMaterial color="#ffd54f" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Counter jib */}
        <mesh position={[-1.2, 0, 0]}>
          <boxGeometry args={[2.4, 0.13, 0.13]} />
          <meshStandardMaterial color="#ffd54f" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Counterweight */}
        <mesh position={[-2.1, -0.2, 0]}>
          <boxGeometry args={[0.5, 0.4, 0.4]} />
          <meshStandardMaterial color="#607d8b" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Cable */}
        <mesh position={[3.5, -1.0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 2.0, 4]} />
          <meshStandardMaterial color="#bdbdbd" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Hook block */}
        <mesh position={[3.5, -2.1, 0]}>
          <boxGeometry args={[0.15, 0.12, 0.12]} />
          <meshStandardMaterial color="#424242" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Cabin */}
      <mesh position={[0, 7.6, 0.2]}>
        <boxGeometry args={[0.35, 0.35, 0.35]} />
        <meshStandardMaterial color="#80cbc4" metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

// ─── BUILDING SHELL ───────────────────────────────────────────────────────────
function BuildingShell({ visible, stage }) {
  if (!visible) return null;

  return (
    <group>
      {/* Concrete slabs */}
      {[0, 1.6, 3.2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[4.2, 0.18, 4.2]} />
          <meshStandardMaterial color="#cfd8dc" roughness={0.95} metalness={0.05} />
        </mesh>
      ))}
      {/* Columns */}
      {[[-1.8, -1.8], [-1.8, 1.8], [1.8, -1.8], [1.8, 1.8]].map(([x, z], i) => (
        <mesh key={i} position={[x, 1.7, z]}>
          <boxGeometry args={[0.28, 3.6, 0.28]} />
          <meshStandardMaterial color="#b0bec5" roughness={0.9} metalness={0.1} />
        </mesh>
      ))}
      {/* Walls (partial, BIM-like) */}
      {stage >= 2 && (
        <>
          <mesh position={[0, 1.7, -2.1]}>
            <boxGeometry args={[4.2, 3.2, 0.14]} />
            <meshStandardMaterial color="#eceff1" roughness={0.95} transparent opacity={0.85} />
          </mesh>
          <mesh position={[0, 1.7, 2.1]}>
            <boxGeometry args={[4.2, 3.2, 0.14]} />
            <meshStandardMaterial color="#eceff1" roughness={0.95} transparent opacity={0.85} />
          </mesh>
        </>
      )}
      {/* Ground pad */}
      <mesh position={[0, -0.07, 0]} receiveShadow>
        <boxGeometry args={[8, 0.1, 8]} />
        <meshStandardMaterial color="#78909c" roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

// ─── BLUEPRINT GRID ───────────────────────────────────────────────────────────
function BlueprintGrid({ visible }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.z += delta * 0.1; // 🔥 slow rotation
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
      {[...Array(21)].map((_, i) => (
        <line key={`h${i}`}>
          <bufferGeometry
            attach="geometry"
            {...(() => {
              const pts = new Float32Array([-5, -5 + i * 0.5, 0, 5, -5 + i * 0.5, 0]);
              const geo = new THREE.BufferGeometry();
              geo.setAttribute("position", new THREE.BufferAttribute(pts, 3));
              return geo;
            })()}
          />
          <lineBasicMaterial color={i % 4 === 0 ? "#1565c0" : "#1976d2"} opacity={0.6} transparent />
        </line>
      ))}

      {[...Array(21)].map((_, i) => (
        <line key={`v${i}`}>
          <bufferGeometry
            attach="geometry"
            {...(() => {
              const pts = new Float32Array([-5 + i * 0.5, -5, 0, -5 + i * 0.5, 5, 0]);
              const geo = new THREE.BufferGeometry();
              geo.setAttribute("position", new THREE.BufferAttribute(pts, 3));
              return geo;
            })()}
          />
          <lineBasicMaterial color={i % 4 === 0 ? "#1565c0" : "#1976d2"} opacity={0.6} transparent />
        </line>
      ))}
    </group>
  );
}
// ─── CINEMATIC CAMERA ─────────────────────────────────────────────────────────
const CAMERA_PATHS = [
  // Stage 0 – Planning: orbit high, top-down BIM view
  { pos: [0, 11, 5], target: [0, 0, 0], fov: 42 },
  // Stage 1 – Reinforcement: close side view of cage
  { pos: [6, 3, 6], target: [0, 1.5, 0], fov: 38 },
  // Stage 2 – Execution: dramatic low-angle construction view
  { pos: [-5, 2, 7], target: [0, 2, 0], fov: 55 },
];

function CinematicCamera({ stage }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const lerpSpeed = 0.018;

  useFrame(() => {
    const { pos, target: tgt, fov } = CAMERA_PATHS[stage];
    camera.position.lerp(new THREE.Vector3(...pos), lerpSpeed);
    target.lerp(new THREE.Vector3(...tgt), lerpSpeed);
    camera.lookAt(target);
    camera.fov = THREE.MathUtils.lerp(camera.fov, fov, lerpSpeed);
    camera.updateProjectionMatrix();
  });

  return null;
}

// ─── SCENE ────────────────────────────────────────────────────────────────────
const STAGE_LABELS = ["Planning", "Reinforcement", "Execution"];
const STAGE_COLORS = ["#64b5f6", "#ffb74d", "#81c784"];
const STAGE_DURATIONS = [5000, 6000, 6000];

function Scene({ onStageChange }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    onStageChange?.(stage);
    const timer = setTimeout(() => {
      setStage((p) => (p + 1) % 3);
    }, STAGE_DURATIONS[stage]);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <>
      {/* Lighting – BIM-quality */}
      <ambientLight intensity={0.45} color="#e3f2fd" />
      <directionalLight position={[8, 12, 6]} intensity={1.1} castShadow color="#fff8e1" />
      <directionalLight position={[-6, 4, -4]} intensity={0.35} color="#b3e5fc" />
      <pointLight position={[0, 6, 0]} intensity={0.4} color="#ffffff" />
      <hemisphereLight skyColor="#90caf9" groundColor="#37474f" intensity={0.5} />

      {/* Ground */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#546e7a" roughness={1} />
      </mesh> */}

      {stage !== 0 && (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow>
    <planeGeometry args={[30, 30]} />
    <meshStandardMaterial color="#546e7a" roughness={1} />
  </mesh>
)}
<lineBasicMaterial color="#42a5f5" opacity={0.7} transparent />

      {/* Stage content */}
      <BlueprintGrid visible={stage === 0} />
      <RebarCage visible={stage === 1} />
      <BuildingShell visible={stage === 2} stage={stage} />

      {/* Workers always on stage 1 & 2 */}
      {stage >= 1 && (
        <>
          <Worker position={[-2.2, 0, 1.5]} rotation={[0, 0.8, 0]} color="#ff8f00" />
          <Worker position={[2.0, 0, -1.8]} rotation={[0, -1.2, 0]} color="#ef5350" />
          <Worker position={[0.5, 0, 2.8]} rotation={[0, Math.PI, 0]} color="#ff8f00" />
          <Worker position={[-1.0, 3.3, 0]} rotation={[0, 0.3, 0]} color="#ffa726" />
        </>
      )}

      {/* Crane on stage 1 & 2 */}
      <TowerCrane visible={stage >= 1} />

      {/* Cinematic camera (disable orbit during cinematic) */}
      <CinematicCamera stage={stage} />
    </>
  );
}

// ─── HUD OVERLAY ──────────────────────────────────────────────────────────────
function StageHUD({ stage }) {
  const label = STAGE_LABELS[stage];
  const color = STAGE_COLORS[stage];
  const [display, setDisplay] = useState(label);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => {
      setDisplay(STAGE_LABELS[stage]);
      setFade(true);
    }, 180);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "2.5rem",
        fontFamily: "'Courier New', 'Courier', monospace",
      }}
    >
      {/* Top-left BIM tag */}
      {/* <div
        style={{
          position: "absolute",
          top: "1.6rem",
          left: "2rem",
          display: "flex",
          gap: "0.6rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid #546e7a",
            borderRadius: 3,
            padding: "2px 10px",
            color: "#90caf9",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          BIM Model
        </span>
        <span
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid #546e7a",
            borderRadius: 3,
            padding: "2px 10px",
            color: "#78909c",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
          }}
        >
          Rev 2.4.1
        </span>
      </div> */}

      {/* Phase indicator dots */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "2rem",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        {STAGE_LABELS.map((l, i) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                fontSize: "0.55rem",
                color: i === stage ? STAGE_COLORS[i] : "#546e7a",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.4s",
                fontFamily: "'Courier New', monospace",
              }}
            >
              {l}
            </span>
            <div
              style={{
                width: i === stage ? 10 : 6,
                height: i === stage ? 10 : 6,
                borderRadius: "50%",
                background: i === stage ? STAGE_COLORS[i] : "#37474f",
                border: `1.5px solid ${i === stage ? STAGE_COLORS[i] : "#546e7a"}`,
                transition: "all 0.4s",
                boxShadow: i === stage ? `0 0 8px ${STAGE_COLORS[i]}` : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Main phase label */}
      <div>
        <div
          style={{
            color: "#546e7a",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "0.35rem",
          }}
        >
          Phase {stage + 1} / 3
        </div>
        <div
          style={{
            color,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            lineHeight: 1,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            textShadow: `0 0 32px ${color}55`,
          }}
        >
          {display}
        </div>
        {/* Progress bar */}
        <div
          style={{
            marginTop: "0.9rem",
            width: 160,
            height: 2,
            background: "#1c313a",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            key={stage}
            style={{
              height: "100%",
              background: color,
              width: "100%",
              transformOrigin: "left",
              animation: `grow ${STAGE_DURATIONS[stage]}ms linear forwards`,
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Bottom right coordinate readout (BIM-style) */}
      <div
        style={{
          position: "absolute",
          bottom: "1.6rem",
          right: "2rem",
          color: "#455a64",
          fontSize: "0.6rem",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.08em",
          textAlign: "right",
          lineHeight: 1.7,
        }}
      >
        <div>X: 0.000 Y: 0.000 Z: 0.000</div>
        <div>PROJ NORTH ↑ 1:100</div>
      </div>

      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function HomeBackground() {
  const [stage, setStage] = useState(0);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        background: "#c9d5daff",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 11, 5], fov: 42 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      >
        <Scene onStageChange={setStage} />
      </Canvas>
      <StageHUD stage={stage} />
    </div>
  );
}