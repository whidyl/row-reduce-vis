import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { InputLabel } from '@material-ui/core'

const GraphToggleBar = ({graph, setSelected}) => {
    const handleViewChange = (e, newView) => {
        if (newView !== null) {
            setSelected(newView)
        }
    }


    return (
        <div style={{width: "370px", margin: "0 auto", marginTop:"40px"}}>
            <InputLabel style={{float: "left", marginRight: "20px", marginTop:"15px"}}> Form: </InputLabel> 
            <ToggleButtonGroup exclusive value={selected} onChange={handleViewChange}>
                <ToggleButton disableRipple value="matrix"> Matrix </ToggleButton>
                <ToggleButton disableRipple value="vector"> Vector </ToggleButton>
                <ToggleButton disableRipple value="equation"> Equation </ToggleButton>
                <ToggleButton disableRipple value="edit"> Edit </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default GraphToggleBar
