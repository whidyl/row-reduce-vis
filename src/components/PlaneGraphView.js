import React, { useRef, useState, useEffect } from 'react';
import { useFrame, extend, useThree } from 'react-three-fiber';
import { Html } from "@react-three/drei"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three'
import vecMag from './utils/MatrixMath'
const PlaneGraphView = (props) => {
    const xAxisMesh = useRef();
    const zAxisMesh = useRef();

    useEffect(() => {
        xAxisMesh.current.rotation.x = 1.57;
        zAxisMesh.current.rotation.z = 1.57;
    }, [])

    const radiansX = (0 * Math.PI) / 180;
    const radiansY = (0 * Math.PI) / 180;
    const radiansZ = (0 * Math.PI) / 180;

    const Controls = () => {
        const controls = useRef();
    
        const { camera, gl } = useThree();
    
        useFrame(() => {
          if (controls.current !== null){
            controls.current.update();
          }
        });
        return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
      }

    return (
        <group {...props}
      rotation={[radiansX, radiansY, radiansZ]}>
        <Controls />
        <mesh ref={xAxisMesh}>
            <Html position={[3, 0.2, 0]}>
              x
            </Html>
            <cylinderBufferGeometry args={[0.015, 0.015, 100, 14]} />
            <meshStandardMaterial color={'gray'} />
        </mesh>
        <mesh ref={xAxisMesh}>
            <cylinderBufferGeometry args={[0.015, 0.015, 100, 14]} />
            <meshStandardMaterial color={'gray'} />
            <Html position={[0, 0, -3]}>
              y
            </Html>
        </mesh>
        <mesh ref={zAxisMesh}>
            <cylinderBufferGeometry args={[0.015, 0.015, 100, 14]}/>
            <meshStandardMaterial color={'gray'} />
            <Html position={[0, 0, 3]}>
              z
            </Html>
        </mesh>
        </group>
    )
}

export default PlaneGraphView
