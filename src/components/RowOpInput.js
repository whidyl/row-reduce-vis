import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Alert from '@material-ui/lab/Alert'
import validate, {apply} from './utils/RowOps'


const RowOpInput = ({matrix, setMatrix}) => {
    const [error, setError] = useState({valid: true, message: ""})
    const [rowOp, setRowOp] = useState("")
    const [history, setHistory] = useState([])

    const undo = () => {
        if (history.length > 0) {
            var histCopy = [...history];
            setMatrix(histCopy.pop());
            setHistory(histCopy);
        }
    }

    const procRowOp = () => {
        setError(validate(rowOp));
        setHistory([...history, matrix])
        setMatrix(apply(rowOp, matrix).matrix)
    }

    return (
        <>
            <div style={{backgroundColor: "", marginLeft: "100px", marginTop: "80px" }}>
                <InputLabel style={{float: "left", marginTop: "20px", marginRight: "20px"}}>Row Operation: </InputLabel>
                <form>
                <TextField
                    id="standard-name"
                    variant="outlined"
                    value={rowOp}
                    onChange={(e) => {setRowOp(e.target.value)}}
                    InputProps={{endAdornment: [
                        <Button onClick={procRowOp}> Apply </Button>, 
                        <Button onClick={undo}> Undo </Button>]}}
                />
                </form>
            </div>
            <Alert severity="warning" style={{margin: "30px", visibility: error.valid ? "hidden" : "visible"}} >
                {error.message}
            </Alert>
        </>
    )
}

export default RowOpInput
