import React from 'react'
import Tex2SVG from 'react-hook-mathjax';

function EquationView({matrix, isVecGraph}) {
    return (
        <Tex2SVG latex={String.raw`
            \Huge

            \begin{cases}
            \color{${isVecGraph ? "red" : "red"}}${Math.round(matrix[0][0] * 100) / 100}\color{black}x_1
            \color{${isVecGraph ? "green" : "red"}} ${matrix[0][1] >= 0 ? "+" : ""} ${Math.round(matrix[0][1] * 100) / 100}\color{black}x_2 
            \color{${isVecGraph ? "blue" : "red"}} ${matrix[0][2] >= 0 ? "+" : ""} ${Math.round(matrix[0][2] * 100) / 100}\color{black}x_3 = 
            \color{${isVecGraph ? "goldenrod" : "red"}}${Math.round(matrix[0][3] * 100) / 100} \\

            \color{${isVecGraph ? "red" : "green"}}${Math.round(matrix[1][0] * 100) / 100}\color{black}x_1
            \color{${isVecGraph ? "green" : "green"}} ${matrix[1][1] >= 0 ? "+" : ""} ${Math.round(matrix[1][1] * 100) / 100}\color{black}x_2 
            \color{${isVecGraph ? "blue" : "green"}} ${matrix[1][2] >= 0 ? "+" : ""} ${Math.round(matrix[1][2] * 100) / 100}\color{black}x_3 = 
            \color{${isVecGraph ? "goldenrod" : "green"}}${Math.round(matrix[1][3] * 100) / 100} \\

            \color{${isVecGraph ? "red" : "blue"}}${Math.round(matrix[2][0] * 100) / 100}\color{black}x_1
            \color{${isVecGraph ? "green" : "blue"}} ${matrix[2][1] >= 0 ? "+" : ""} ${Math.round(matrix[2][1] * 100) / 100}\color{black}x_2 
            \color{${isVecGraph ? "blue" : "blue"}} ${matrix[2][2] >= 0 ? "+" : ""} ${Math.round(matrix[2][2] * 100) / 100}\color{black}x_3 = 
            \color{${isVecGraph ? "goldenrod" : "blue"}}${Math.round(matrix[2][3] * 100) / 100} 
            \end{cases}

        `}/>
    )
}

export default EquationView