import React from 'react'
import Tex2SVG from 'react-hook-mathjax';

function VectorView({matrix, isVecGraph}) {
    return (
        <Tex2SVG latex={String.raw`
            \huge

            x_1
            \begin{bmatrix}
            \color{${isVecGraph ? "red" : "red"}}${Math.round(matrix[0][0] * 100) / 100} \\ 
            \color{${isVecGraph ? "red" : "green"}}${Math.round(matrix[1][0] * 100) / 100} \\ 
            \color{${isVecGraph ? "red" : "blue"}}${Math.round(matrix[2][0] * 100) / 100}
            \end{bmatrix}
            +
            x_2
            \begin{bmatrix}
            \color{${isVecGraph ? "green" : "red"}}${Math.round(matrix[0][1] * 100) / 100} \\ 
            \color{${isVecGraph ? "green" : "green"}}${Math.round(matrix[1][1] * 100) / 100} \\ 
            \color{${isVecGraph ? "green" : "blue"}}${Math.round(matrix[2][1] * 100) / 100}
            \end{bmatrix}
            +
            x_3
            \begin{bmatrix}
            \color{${isVecGraph ? "blue" : "red"}}${Math.round(matrix[0][2] * 100) / 100} \\ 
            \color{${isVecGraph ? "blue" : "green"}}${Math.round(matrix[1][2] * 100) / 100} \\ 
            \color{${isVecGraph ? "blue" : "blue"}}${Math.round(matrix[2][2] * 100) / 100}
            \end{bmatrix}
            =
            \begin{bmatrix}
            \color{${isVecGraph ? "goldenrod" : "red"}}${Math.round(matrix[0][3] * 100) / 100} \\ 
            \color{${isVecGraph ? "goldenrod" : "green"}}${Math.round(matrix[1][3] * 100) / 100} \\ 
            \color{${isVecGraph ? "goldenrod" : "blue"}}${Math.round(matrix[2][3] * 100) / 100}
            \end{bmatrix}

        `}/>
    )
}

export default VectorView