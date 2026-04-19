import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "images/react2.webp",
  "images/next2.webp",
  "images/node2.webp",
  "images/express.webp",
  "images/mongo.webp",
  "images/mysql.webp",
  "images/typescript.webp",
  "images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  materialIndex: Math.floor(Math.random() * 8),
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshStandardMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state: any, delta: number) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }: { vec?: THREE.Vector3; isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }: any) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshStandardMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.2,
          metalness: 0.4,
          roughness: 0.7,
        })
    );
  }, []);

  return (
    <div className="techstack" ref={containerRef}>
      <h2> My Techstack</h2>
      <div className="tech-canvas-wrapper" style={{ 
        width: '100%', height: '500px', 
        opacity: isActive ? 1 : 0, transition: 'opacity 0.5s ease',
        pointerEvents: isActive ? 'auto' : 'none'
      }}>
        <Canvas
          shadows
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state: any) => { state.gl.toneMappingExposure = 1.2; }}
          frameloop={isActive ? "always" : "never"}
        >
          <ambientLight intensity={1.5} />
          <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow />
          <spotLight position={[-20, -20, -25]} intensity={0.1} />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {isActive && spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[props.materialIndex % materials.length] as any}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment files="models/char_enviorment.hdr" environmentIntensity={0.8} />
        </Canvas>
      </div>
    </div>
  );
};

export default TechStack;
