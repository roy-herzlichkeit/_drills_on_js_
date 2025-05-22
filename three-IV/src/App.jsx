import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })
  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[2, 1]} />
      <meshToonMaterial color="#468585" emissive="#468585" />
      <Sparkles count={128} scale={6} size={1} speed={0.01} noise={0.2} color={'red'} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <OrbitControls enablePan enableRotate enableZoom />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color attach={'background'} args={['#F0F0F0']} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;