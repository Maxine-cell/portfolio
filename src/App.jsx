import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="red" emissive="#468585"/>
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />
    </mesh>
  );
};

const ThreeJS = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <OrbitControls />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <RotatingCube />
    </Canvas>
  );
};

export default ThreeJS;
