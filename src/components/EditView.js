import React, {useState} from 'react'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

const EditView = ({matrix, setMatrix, isVecGraph}) => {

    const changeMatrix = (val, r, c) => {
        if (val.length > 1) {
            val = val.replace(/^0+/, '')
        } if (val.length === 0) {
            val = '0';
        } 
        let copy = [...matrix];
        copy[r][c] = parseFloat(val) || 0;
        setMatrix(copy);
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "23% 23% 23% 8% 23%",
            gridTemplateRows: "33.3% 33.3% 33.3%",
            width: "300px",
            height: "250px",
            margin: "auto"}}>
            <div style={{
                gridColumnStart: 1,
                gridColumnEnd: 2,
                gridRowStart: 1,
                gridRowEnd: 2,
            }}> 
                <TextField type="number" variant="outlined" value={matrix[0][0].toString()} onChange={(e) => {changeMatrix(e.target.value, 0, 0)}}
                style={{ margin: "10px",}} 
                inputProps = {{ style: { color: isVecGraph ? "red" : "red"}}}/>
            </div>
            <div style={{
                gridColumnStart: 2,
                gridColumnEnd: 3,
                gridRowStart: 1,
                gridRowEnd: 2,
            }}> 
                <TextField type="number" variant="outlined" value={matrix[0][1].toString()} onChange={(e) => {changeMatrix(e.target.value, 0, 1)}} style={{
                    margin: "10px"
                }}
                inputProps = {{ style: { color: isVecGraph ? "green" : "red"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 3,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 2,
            }}>
                <TextField type="number" variant="outlined" value={matrix[0][2].toString()} onChange={(e) => {changeMatrix(e.target.value, 0, 2)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "blue" : "red"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 5,
                gridColumnEnd: 6,
                gridRowStart: 1,
                gridRowEnd: 2,
            }}>
                    <TextField type="number" variant="outlined" value={matrix[0][3].toString()} onChange={(e) => {changeMatrix(e.target.value, 0, 3)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "goldenrod" : "red"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 1,
                gridColumnEnd: 2,
                gridRowStart: 2,
                gridRowEnd: 3,
            }}>
                <TextField type="number" variant="outlined" value={matrix[1][0].toString()} onChange={(e) => {changeMatrix(e.target.value, 1, 0)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "red" : "green"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 2,
                gridColumnEnd: 3,
                gridRowStart: 2,
                gridRowEnd: 3,
            }}>
                <TextField type="number" variant="outlined" value={matrix[1][1].toString()} onChange={(e) => {changeMatrix(e.target.value, 1, 1)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "green" : "green"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 3,
                gridColumnEnd: 4,
                gridRowStart: 2,
                gridRowEnd: 3,
            }}>
                <TextField type="number" variant="outlined" value={matrix[1][2].toString()} onChange={(e) => {changeMatrix(e.target.value, 1, 2)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "blue" : "green"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 5,
                gridColumnEnd: 6,
                gridRowStart: 2,
                gridRowEnd: 3,
            }}>
                <TextField type="number" variant="outlined" value={matrix[1][3].toString()} onChange={(e) => {changeMatrix(e.target.value, 1, 3)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "goldenrod" : "green"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 1,
                gridColumnEnd: 2,
                gridRowStart: 3,
                gridRowEnd: 4,
            }}>
                <TextField type="number" variant="outlined" value={matrix[2][0].toString()} onChange={(e) => {changeMatrix(e.target.value, 2, 0)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "red" : "blue"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 2,
                gridColumnEnd: 3,
                gridRowStart: 3,
                gridRowEnd: 4,
            }}>
                <TextField type="number" variant="outlined" value={matrix[2][1].toString()} onChange={(e) => {changeMatrix(e.target.value, 2, 1)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "green" : "blue"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 3,
                gridColumnEnd: 4,
                gridRowStart: 3,
                gridRowEnd: 4,
            }}>
                <TextField type="number" variant="outlined" value={matrix[2][2].toString()} onChange={(e) => {changeMatrix(e.target.value, 2, 2)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "blue" : "blue"}}}
                />
            </div>
            <div style={{
                gridColumnStart: 5,
                gridColumnEnd: 6,
                gridRowStart: 3,
                gridRowEnd: 4,
            }}>
                <TextField type="number" variant="outlined" value={matrix[2][3].toString()} onChange={(e) => {changeMatrix(e.target.value, 2, 3)}} style={{
                    margin: "10px",
                }}
                inputProps = {{ style: { color: isVecGraph ? "goldenrod" : "blue"}}}
                />
            </div>

            <div style={{
                gridColumnStart: 4,
                gridColumnEnd: 5,
                gridRowStart: 1,
                gridRowEnd: 4,
                backgroundColor: "lightgray",
                width: "3px",
                height: "90%",
                transform: "translate(11px, 11px)",

            }}/>
            
        </div>
    )
}

export default EditView
