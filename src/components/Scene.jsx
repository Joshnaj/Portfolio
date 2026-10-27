import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

// A soft, pearly moon that slowly breathes
function Moon() {
  const ref = useRef();
  useFrame((_, delta) => (ref.current.rotation.y += delta * 0.12));
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.45}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#eef4fb"
          emissive="#cfe0f3"
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.05}
          distort={0.18}
          speed={1.1}
        />
      </mesh>
    </Float>
  );
}

// Thin orbit rings
function Ring({ radius, tilt, speed, color, opacity }) {
  const ref = useRef();
  useFrame((_, delta) => (ref.current.rotation.z += delta * speed));
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.008, 16, 200]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

// Small frosted cubes drifting around — "blocks of code"
function Blocks() {
  const blocks = [
    [-2.9, 1.6, -1],
    [2.8, -1.5, -0.5],
    [2.4, 1.9, -2],
    [-2.3, -1.9, -1.5],
  ];
  return blocks.map(([x, y, z], i) => (
    <Float key={i} speed={1.6 + i * 0.3} rotationIntensity={1.6} floatIntensity={1.6}>
      <mesh position={[x, y, z]} scale={0.26}>
        <boxGeometry />
        <meshPhysicalMaterial color="#ffffff" roughness={0.15} transmission={0.6} thickness={0.6} clearcoat={1} />
      </mesh>
    </Float>
  ));
}

function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    const { x, y } = state.pointer;
    ref.current.rotation.y += (x * 0.3 - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x += (-y * 0.18 - ref.current.rotation.x) * 0.04;
  });
  return <group ref={ref}>{children}</group>;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[-3, 4, 5]} intensity={1.6} color="#ffffff" />
      <pointLight position={[3, -2, 3]} intensity={12} color="#9fc2e8" />
      <Sparkles count={40} scale={7} size={2.2} speed={0.3} color="#8fb4dd" opacity={0.7} />
      <Rig>
        <Moon />
        <Ring radius={2.3} tilt={[1.25, 0.2, 0]} speed={0.25} color="#2f6fb0" opacity={0.35} />
        <Ring radius={2.85} tilt={[1.4, -0.5, 0.3]} speed={-0.18} color="#7fa8d6" opacity={0.3} />
        <Blocks />
      </Rig>
    </Canvas>
  );
}
