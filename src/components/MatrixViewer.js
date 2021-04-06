import React, { useState } from 'react'
import MatrixView from './MatrixView'
import VectorView from './VectorView'
import EquationView from './EquationView'
import FormToggleBar from './FormToggleBar'
import EditView from './EditView'
import RowOpInput from './RowOpInput'

function MatrixViewer({matrix, setMatrix, isVecGraph}) {
    const [selected, setSelected] = useState("vector")

    return (
        <div style={{textAlign: "left", marginLeft: "auto", marginTop: "0px", maxWidth: "800px", display:"table-cell"}}>
            <FormToggleBar selected={selected} setSelected={setSelected}/>
            <div style={{minWidth:"700px", minHeight:"210px", margin:"auto", marginTop: (selected === "edit" ? "50px" : "90px")}}>
            {
                {
                    'matrix':<MatrixView matrix={matrix} isVecGraph={isVecGraph}/>,
                    'vector':<VectorView matrix={matrix} isVecGraph={isVecGraph}/>,
                    'equation':<EquationView matrix={matrix} isVecGraph={isVecGraph}/>,
                    'edit':<EditView matrix={matrix} setMatrix={setMatrix} isVecGraph={isVecGraph}/>

                }[selected]
            }
            </div>
            <RowOpInput matrix={matrix} setMatrix={setMatrix}/>
        </div>
    )
}

export default MatrixViewer
