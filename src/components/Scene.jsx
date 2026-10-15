import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sparkles } from "@react-three/drei";

// The glowing distorted orb in the centre
function Orb() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.5}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#5b7cfa"
          emissive="#2a1d6e"
          roughness={0.15}
          metalness={0.6}
          distort={0.38}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

// Rings orbiting the orb
function Ring({ radius, tilt, speed, color }) {
  const ref = useRef();
  useFrame((_, delta) => (ref.current.rotation.z += delta * speed));
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.012, 16, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

// Small floating cubes — "blocks of code"
function Blocks() {
  const blocks = [
    [-3.4, 1.4, -1, "#7cf5c4"],
    [3.2, -1.2, -0.5, "#ffb38a"],
    [2.7, 1.9, -2, "#8ab4ff"],
    [-2.6, -1.8, -1.5, "#c49bff"],
  ];
  return blocks.map(([x, y, z, c], i) => (
    <Float key={i} speed={2 + i * 0.3} rotationIntensity={2} floatIntensity={2}>
      <mesh position={[x, y, z]} scale={0.28}>
        <boxGeometry />
        <meshStandardMaterial color={c} roughness={0.3} metalness={0.4} />
      </mesh>
    </Float>
  ));
}

// Tilts the whole scene gently towards the mouse, and places it
// on the right on wide screens / up and smaller on phones
function Rig({ children }) {
  const ref = useRef();
  const { viewport, size } = useThree();
  const wide = size.width > 760;
  const position = wide ? [viewport.width * 0.22, 0, 0] : [0, 0, -2];
  const scale = wide ? 1 : 0.75;
  useFrame((state) => {
    const { x, y } = state.pointer;
    ref.current.rotation.y += (x * 0.35 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-y * 0.2 - ref.current.rotation.x) * 0.05;
  });
  return (
    <group position={position} scale={scale}>
      <group ref={ref}>{children}</group>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={["#07070d"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 3]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#7cf5c4" />
      <pointLight position={[4, -3, -2]} intensity={25} color="#c49bff" />
      <Stars radius={60} depth={40} count={2500} factor={3} fade speed={0.6} />
      <Sparkles count={60} scale={8} size={2} speed={0.4} color="#a9b8ff" />
      <Rig>
        <Orb />
        <Ring radius={2.4} tilt={[1.2, 0.2, 0]} speed={0.3} color="#7cf5c4" />
        <Ring radius={2.9} tilt={[1.4, -0.5, 0.3]} speed={-0.2} color="#c49bff" />
        <Blocks />
      </Rig>
    </Canvas>
  );
}
