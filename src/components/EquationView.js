import React from 'react'
import Tex2SVG from 'react-hook-mathjax';

function EquationView({matrix}) {
    return (
        <Tex2SVG latex={String.raw`
            \Huge

            \begin{cases}
            ${matrix[0][0]}x_1 + ${matrix[0][1]}x_2 + ${matrix[0][2]}x_3 = ${matrix[0][3]} \\
            ${matrix[1][0]}x_1 + ${matrix[1][1]}x_2 + ${matrix[1][2]}x_3 = ${matrix[1][3]} \\
            ${matrix[2][0]}x_1 + ${matrix[2][1]}x_2 + ${matrix[2][2]}x_3 = ${matrix[2][3]} 
            \end{cases}

        `}/>
    )
}

export default EquationView