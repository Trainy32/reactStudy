import React from 'react'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber'

const SphereMesh = ( props ) => {
  const meshRef = React.useRef(null);
  const scale = props.scale
  const emissive = props.emissive
  const color = props.color
  
  useFrame(() => (meshRef.current.rotation.z += 0.01))
  
  return (
    <mesh ref={meshRef} scale={[scale,scale,scale]} >
      <primitive object={new THREE.AxesHelper(5)} />
      <primitive object={new THREE.GridHelper(20)} />
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhongMaterial attach="material" emissive={emissive} color={color} /> 
    </mesh>
  )
}

export default SphereMesh