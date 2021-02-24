import React, { useRef, useState, useEffect } from 'react';
import { useFrame, extend, useThree } from 'react-three-fiber';
import { Html } from "@react-three/drei"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three'
import vecMag from './utils/MatrixMath'

extend( {OrbitControls} )
function VectorGraphView(props) {
  const xAxisMesh = useRef();
  const zAxisMesh = useRef();
  const vec1Group = useRef();
  const vec1Mesh = useRef();
  const vec2Group = useRef();
  const vec2Mesh = useRef();
  const vec3Group = useRef();
  const vec3Mesh = useRef();
  const vec4Group = useRef();
  const vec4Mesh = useRef();

  const radiansX = (-0.5 * Math.PI);
  const radiansY = (0 * Math.PI);
  const radiansZ = (0 * Math.PI);

  useEffect(() => {
    xAxisMesh.current.rotation.x = 1.57;
    zAxisMesh.current.rotation.z = 1.57;

    vec1Mesh.current.rotation.x = Math.PI/2
    vec1Mesh.current.scale.set(1, vecMag(props.matrix[0][0], props.matrix[1][0], props.matrix[2][0]), 1);
    vec1Mesh.current.position.z = vecMag(props.matrix[0][0], props.matrix[2][0], props.matrix[1][0])/2;

    vec2Mesh.current.rotation.x = Math.PI/2
    vec2Mesh.current.scale.set(1, vecMag(props.matrix[0][1], props.matrix[1][1], props.matrix[2][1]), 1);
    vec2Mesh.current.position.z = vecMag(props.matrix[0][1], props.matrix[2][1], props.matrix[1][1])/2;

    vec3Mesh.current.rotation.x = Math.PI/2
    vec3Mesh.current.scale.set(1, vecMag(props.matrix[0][2], props.matrix[1][2], props.matrix[2][2]), 1);
    vec3Mesh.current.position.z = vecMag(props.matrix[0][2], props.matrix[2][2], props.matrix[1][2])/2;

    vec4Mesh.current.rotation.x = Math.PI/2
    vec4Mesh.current.scale.set(1, vecMag(props.matrix[0][3], props.matrix[1][3], props.matrix[2][3]), 1);
    vec4Mesh.current.position.z = vecMag(props.matrix[0][3], props.matrix[2][3], props.matrix[1][3])/2;
  }, [])

  useEffect(() => {
    vec1Mesh.current.scale.set(1, vecMag(props.matrix[0][0], props.matrix[1][0], props.matrix[2][0]), 1);
    vec1Mesh.current.position.z = vecMag(props.matrix[0][0], props.matrix[2][0], props.matrix[1][0])/2;
    vec1Group.current.lookAt(new THREE.Vector3(props.matrix[0][0], props.matrix[2][0], props.matrix[1][0]));

    vec2Mesh.current.scale.set(1, vecMag(props.matrix[0][1], props.matrix[1][1], props.matrix[2][1]), 1);
    vec2Mesh.current.position.z = vecMag(props.matrix[0][1], props.matrix[2][1], props.matrix[1][1])/2;
    vec2Group.current.lookAt(new THREE.Vector3(props.matrix[0][1], props.matrix[2][1], props.matrix[1][1]));

    vec3Mesh.current.scale.set(1, vecMag(props.matrix[0][2], props.matrix[1][2], props.matrix[2][2]), 1);
    vec3Mesh.current.position.z = vecMag(props.matrix[0][2], props.matrix[2][2], props.matrix[1][2])/2;
    vec3Group.current.lookAt(new THREE.Vector3(props.matrix[0][2], props.matrix[2][2], props.matrix[1][2]));

    vec4Mesh.current.scale.set(1, vecMag(props.matrix[0][3], props.matrix[1][3], props.matrix[2][3]), 1);
    vec4Mesh.current.position.z = vecMag(props.matrix[0][3], props.matrix[2][3], props.matrix[1][3])/2;
    vec4Group.current.lookAt(new THREE.Vector3(props.matrix[0][3], props.matrix[2][3], props.matrix[1][3]));
    
    //vec1Mesh.current.position.y = vecMag(props.matrix[0][0], props.matrix[1][0], props.matrix[2][0])/2;
  }, [props.matrix])

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

        
        <group ref={vec1Group}>
          <group ref={vec1Mesh}>
            <mesh>
              <cylinderBufferGeometry args={[0.015, 0.015, 1, 14]}/>
              <meshStandardMaterial color={'red'} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderBufferGeometry args={[0.003, 0.045, 0.02, 14]}/>
              <meshStandardMaterial color={'red'} />
            </mesh>
          </group>
        </group>

        <group ref={vec2Group}>
          <group ref={vec2Mesh}>
            <mesh>
              <cylinderBufferGeometry args={[0.015, 0.015, 1, 14]}/>
              <meshStandardMaterial color={'green'} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderBufferGeometry args={[0.003, 0.045, 0.02, 14]}/>
              <meshStandardMaterial color={'green'} />
            </mesh>
          </group>
        </group>

        <group ref={vec3Group}>
          <group ref={vec3Mesh}>
            <mesh>
              <cylinderBufferGeometry args={[0.015, 0.015, 1, 14]}/>
              <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderBufferGeometry args={[0.003, 0.045, 0.02, 14]}/>
              <meshStandardMaterial color={'blue'} />
            </mesh>
          </group>
        </group>

        <group ref={vec4Group}>
          <group ref={vec4Mesh}>
            <mesh>
              <cylinderBufferGeometry args={[0.015, 0.015, 1, 14]}/>
              <meshStandardMaterial color={'yellow'} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderBufferGeometry args={[0.003, 0.045, 0.02, 14]}/>
              <meshStandardMaterial color={'yellow'} />
            </mesh>
          </group>
        </group>
      </group>
    )
}

export default VectorGraphView
