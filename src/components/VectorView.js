import React from 'react'
import Tex2SVG from 'react-hook-mathjax';

function VectorView({matrix}) {
    return (
        <Tex2SVG latex={String.raw`
            \huge

            x_1
            \begin{bmatrix}
            ${matrix[0][0]} \\ 
            ${matrix[1][0]} \\ 
            ${matrix[2][0]}
            \end{bmatrix}
            +
            x_2
            \begin{bmatrix}
            ${matrix[0][1]} \\ 
            ${matrix[1][1]} \\ 
            ${matrix[2][1]}
            \end{bmatrix}
            +
            x_3
            \begin{bmatrix}
            ${matrix[0][2]} \\ 
            ${matrix[1][2]} \\ 
            ${matrix[2][2]}
            \end{bmatrix}
            =
            \begin{bmatrix}
            ${matrix[0][3]} \\ 
            ${matrix[1][3]} \\ 
            ${matrix[2][3]}
            \end{bmatrix}

        `}/>
    )
}

export default VectorView