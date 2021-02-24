import React, { useRef, useState, useEffect, useUpdate } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { Html } from "@react-three/drei"
import * as THREE from 'three'
import { getPlanePointsForRow } from './utils/MatrixMath'

const PlaneGraphView = ({ matrix }) => {
    const xAxisMesh = useRef();
    const zAxisMesh = useRef();

    const radiansX = (-0.5 * Math.PI);
    const radiansY = (0 * Math.PI);
    const radiansZ = (0 * Math.PI);

    const plane1 = useRef();
    let plane1geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1, -1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0), 
                                                                     new THREE.Vector3(1, 1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0)]);
    plane1geometry.computeVertexNormals();
    plane1geometry.setDrawRange(10, 10)

    const plane2 = useRef();
    let plane2geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1, -1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0), 
                                                                     new THREE.Vector3(1, 1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0)]);
    plane2geometry.computeVertexNormals();
    plane2geometry.setDrawRange(10, 10)

    const plane3 = useRef();
    let plane3geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1, -1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0), 
                                                                     new THREE.Vector3(1, 1, 0), new THREE.Vector3(1, -1, 0), new THREE.Vector3(-1, 1, 0)]);
    plane3geometry.computeVertexNormals();
    plane3geometry.setDrawRange(10, 10)

    useEffect(() => {
        xAxisMesh.current.rotation.x = 1.57;
        zAxisMesh.current.rotation.z = 1.57;
        
        plane1.current.rotation.x = 1.57;
        plane2.current.rotation.x = 1.57;
        plane3.current.rotation.x = 1.57;
    }, [])


    useEffect(() => {
        let updateGeometry = new THREE.BufferGeometry().setFromPoints(getPlanePointsForRow(matrix, 0));
        updateGeometry.computeVertexNormals();
        plane1.current.geometry = updateGeometry

        updateGeometry = new THREE.BufferGeometry().setFromPoints(getPlanePointsForRow(matrix, 1));
        updateGeometry.computeVertexNormals();
        plane2.current.geometry = updateGeometry

        updateGeometry = new THREE.BufferGeometry().setFromPoints(getPlanePointsForRow(matrix, 2));
        updateGeometry.computeVertexNormals();
        plane3.current.geometry = updateGeometry
        

    }, [matrix])

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
        <group
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
                <Html position={[0, 0, 3]}>
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

            <mesh geometry={plane1geometry} ref={plane1}>
                <meshPhongMaterial color={'red'} side={THREE.DoubleSide} opacity={0.5} transparent={true} />
            </mesh>

            <mesh geometry={plane2geometry} ref={plane2}>
                <meshPhongMaterial color={'green'} side={THREE.DoubleSide} opacity={0.5} transparent={true} />
            </mesh>

            <mesh geometry={plane3geometry} ref={plane3}>
                <meshPhongMaterial color={'blue'} side={THREE.DoubleSide} opacity={0.5} transparent={true} />
            </mesh>

        </group>
    )
}

export default PlaneGraphView
