import React from 'react';
//import TextField from '@material-ui/core/TextField';
//import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ResultButton = props => {
    return (
        <Grid item xs={10}>
             <Button 
                variant="contained" 
                size="large" 
                style={{maxWidth: '350px', maxHeight: '200px',minWidth: '350px', minHeight: '200px'}} 
                color="primary" 
                aria-label="add" >
                 <h2 style={{fontSize:50}}>{props.mpg === 0 ? 'Result' : props.mpg}</h2>
             </Button>
        </Grid>
    )
}

export default ResultButton;
