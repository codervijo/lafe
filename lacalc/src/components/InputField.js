import React from 'react';
import TextField from '@material-ui/core/TextField';
//import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

const InputField = props => {
    return (
        <Grid item xs={10}>
            <TextField
                variant='outlined'
                label={props.data.label}
                value={props.data.currentValue}
                name={props.data.name}
                type={props.data.type}
                onChange={props.handleInput}
                style={{width: '50%'}}
            />
        </Grid>
    )
}

export default InputField;