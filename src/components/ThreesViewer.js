import React from 'react';
import { Canvas } from 'react-three-fiber';
import VectorGraphView from './VectorGraphView';
import PlaneGraphView from './PlaneGraphView';

const ThreesViewer = ({ matrix, graphMode, setGraphMode }) => {
    return (
        <div style={{backgroundColor: "", float:"right", minWidth:"800px"}}>
            <Canvas>
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, 10, 10]} />
              {
                {
                  "vector": <VectorGraphView position={[0, 0, 0]} matrix={matrix} />,
                  "plane": <PlaneGraphView position={[0, 0, 0]} matrix={matrix} />
                }[graphMode]
              }
            </Canvas>
        </div>
    )
}

export default ThreesViewer
