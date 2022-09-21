import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SphereMesh from "./SphereMesh";


const Scenegraph = () => {
  const cameraRef = React.useRef(null)
  const solarSystemRef = React.useRef(null);
  const earthOrbitRef = React.useRef(null);
  const moonOrbitRef = React.useRef(null);

  useFrame(() => (solarSystemRef.current.rotation.z += 0.01));
  useFrame(() => (earthOrbitRef.current.rotation.z += 0.01));
  useFrame(() => (moonOrbitRef.current.rotation.z += 0.01));

  return (
    <>
      <perspectiveCamera
      ref={cameraRef}
        makeDefault
        manual
        fov={40}
        aspect={2}
        near={0.1}
        far={1000}
        position={[0, 0, -10]}
        onUpdate={(self) => self.updateProjectionMatrix()}
      >
        <pointLight color="#FFFFFF" intensity={1} position={[0, 0, 8]} />
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}
        <object3D ref={solarSystemRef}>
          <SphereMesh id={"sun"} scale={5} emissive="#FFFF00" color="#FFFF00"/>

          <object3D ref={earthOrbitRef} position={[10, 0, 0]}>
            <SphereMesh id={"earth"} scale={1} emissive="#124" color="#23F" />

            <object3D ref={moonOrbitRef} position={[2, 0, 0]}>
              <SphereMesh id={"moon"} scale={0.5} emissive="#888" color="#222" />
            </object3D>
          </object3D>
        </object3D>
        
      </perspectiveCamera>
    </>
  );
};

export default Scenegraph;
