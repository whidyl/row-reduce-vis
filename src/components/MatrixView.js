import React from 'react'
import Tex2SVG from 'react-hook-mathjax';

function MatrixView({matrix, isVecGraph}) {
    return (
        <Tex2SVG latex={String.raw`
            \Huge

            \left[\begin{array}{c c c|c} 
            \color{${isVecGraph ? "red" : "red"}}${matrix[0][0]}&
            \color{${isVecGraph ? "green" : "red"}}${matrix[0][1]}&
            \color{${isVecGraph ? "blue" : "red"}}${matrix[0][2]}&
            \color{${isVecGraph ? "goldenrod" : "red"}}${matrix[0][3]} \\ 

            \color{${isVecGraph ? "red" : "green"}}${matrix[1][0]}&
            \color{${isVecGraph ? "green" : "green"}}${matrix[1][1]}&
            \color{${isVecGraph ? "blue" : "green"}}${matrix[1][2]}&
            \color{${isVecGraph ? "goldenrod" : "green"}}${matrix[1][3]} \\ 

            \color{${isVecGraph ? "red" : "blue"}}${matrix[2][0]}&
            \color{${isVecGraph ? "green" : "blue"}}${matrix[2][1]}&
            \color{${isVecGraph ? "blue" : "blue"}}${matrix[2][2]}&
            \color{${isVecGraph ? "goldenrod" : "blue"}}${matrix[2][3]}
            \end{array}\right]

        `}/>
    )
}

export default MatrixView