import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

interface SolarHouseSceneProps {
  scrollProgress?: number;
  mouseDataRef?: React.MutableRefObject<{
    smoothX: number;
    smoothY: number;
    velocity: number;
  }>;
}

// Camera que segue o mouse suavemente (estilo wamosair)
function CameraRig({ mouseDataRef }: { mouseDataRef?: SolarHouseSceneProps["mouseDataRef"] }) {
  const { camera } = useThree();
  const smoothX = useRef(0);
  const smoothY = useRef(0);

  useFrame(() => {
    let targetX = 0, targetY = 0;
    if (mouseDataRef?.current) {
      targetX = mouseDataRef.current.smoothX;
      targetY = mouseDataRef.current.smoothY;
    }
    smoothX.current += (targetX - smoothX.current) * 0.05;
    smoothY.current += (targetY - smoothY.current) * 0.05;
    camera.position.x = smoothX.current * 1.2;
    camera.position.y = -smoothY.current * 0.8 + 0.5;
    camera.position.z = 6;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Partícula de energia solar flutuante
function SolarParticle({ position, scale, speed, offset }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const basePos = useRef(new THREE.Vector3(...position));
  const currX = useRef(position[0]);
  const currY = useRef(position[1]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const targetX = basePos.current.x + Math.cos(t * speed * 0.7 + offset) * 0.2;
    const targetY = basePos.current.y + Math.sin(t * speed + offset) * 0.15;
    currX.current += (targetX - currX.current) * 0.04;
    currY.current += (targetY - currY.current) * 0.04;
    ref.current.position.x = currX.current;
    ref.current.position.y = currY.current;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.005;
    // Pulsação de brilho
    const pulse = 0.8 + Math.sin(t * 2 + offset) * 0.2;
    ref.current.scale.setScalar(scale * pulse);
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[scale, 0]} />
      <meshPhysicalMaterial
        color="#FFD700"
        emissive="#FFA500"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

// Panel solar (retângulo azul brilhante)
function SolarPanel({ position, rotation, scale = 1 }: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    // Brilho pulsante simulando geração de energia
    (ref.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity =
      0.3 + Math.sin(t * 1.5) * 0.2;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation || [0, 0, 0]}>
      <boxGeometry args={[0.8 * scale, 0.5 * scale, 0.03]} />
      <meshPhysicalMaterial
        color="#1a3a5c"
        emissive="#0066cc"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.6}
        clearcoat={1}
      />
    </mesh>
  );
}

// Casa simplificada (paredes + telhado)
function House() {
  return (
    <group position={[0, -1.2, 0]}>
      {/* Paredes */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[2.4, 1.2, 1.6]} />
        <meshPhysicalMaterial color="#f5f0e8" roughness={0.8} metalness={0} />
      </mesh>

      {/* Telhado (prisma triangular) */}
      <mesh position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1.8, 0.8, 4]} />
        <meshPhysicalMaterial color="#8B4513" roughness={0.9} metalness={0} />
      </mesh>

      {/* Porta */}
      <mesh position={[0, 0.2, 0.81]}>
        <boxGeometry args={[0.35, 0.7, 0.02]} />
        <meshPhysicalMaterial color="#5c3d1a" roughness={0.7} />
      </mesh>

      {/* Janelas */}
      {[[-0.7, 0.7, 0.81], [0.7, 0.7, 0.81]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.35, 0.3, 0.02]} />
          <meshPhysicalMaterial
            color="#87CEEB"
            emissive="#FFF8DC"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Painéis solares no telhado */}
      {[
        { pos: [-0.55, 1.35, 0.55] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
        { pos: [0, 1.35, 0.55] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
        { pos: [0.55, 1.35, 0.55] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
        { pos: [-0.55, 1.45, 0.1] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
        { pos: [0, 1.45, 0.1] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
        { pos: [0.55, 1.45, 0.1] as [number, number, number], rot: [-0.5, 0, 0] as [number, number, number] },
      ].map((panel, i) => (
        <SolarPanel key={i} position={panel.pos} rotation={panel.rot} />
      ))}
    </group>
  );
}

// Cena principal
function Scene({ mouseDataRef }: { mouseDataRef?: SolarHouseSceneProps["mouseDataRef"] }) {
  const particles = useMemo(() => (
    Array.from({ length: 20 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      scale: 0.04 + Math.random() * 0.08,
      speed: 0.15 + Math.random() * 0.2,
      offset: Math.random() * Math.PI * 2,
    }))
  ), []);

  return (
    <>
      <CameraRig mouseDataRef={mouseDataRef} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF8DC" castShadow />
      <pointLight position={[0, 3, 3]} intensity={0.8} color="#FFD700" />
      <pointLight position={[-3, 0, 2]} intensity={0.4} color="#7CFC00" />
      <Environment preset="sunset" />

      <House />

      {particles.map((p, i) => (
        <SolarParticle key={i} {...p} />
      ))}
    </>
  );
}

const SolarHouseScene = ({ scrollProgress = 0, mouseDataRef }: SolarHouseSceneProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene mouseDataRef={mouseDataRef} />
      </Canvas>
    </div>
  );
};

export default SolarHouseScene;
