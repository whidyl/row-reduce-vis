import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { InputLabel } from '@material-ui/core'

const GraphToggleBar = ({graphMode, setGraphMode}) => {
    const handleViewChange = (e, newView) => {
        if (newView !== null) {
            setGraphMode(newView)
        }
    }


    return (
        <div style={{width: "200px", margin: "0 auto", marginTop:"40px"}}>
            <InputLabel style={{float: "left", marginRight: "20px", marginTop:"15px"}}> Graph: </InputLabel> 
            <ToggleButtonGroup exclusive value={graphMode} onChange={handleViewChange} size="small">
                <ToggleButton disableRipple value="plane"> Plane </ToggleButton>
                <ToggleButton disableRipple value="vector"> Vector </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default GraphToggleBar
