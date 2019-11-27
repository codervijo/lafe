import React, {Component} from 'react';
//import TextField from '@material-ui/core/TextField';
//import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ResultButton extends Component {
    render() {
        return (
            <Grid item xs={10} style={{marginTop: '20px'}}>
                 <Button 
                    variant="contained" 
                    size="large" 
                    style={{maxWidth: '250px', maxHeight: '100px',minWidth: '250px', minHeight: '100px'}} 
                    color="primary" 
                    aria-label="add" >
                     <h2 style={{fontSize:25}}>{this.props.mpg === 0 ? 'Result' : this.props.mpg}</h2>
                 </Button>
            </Grid>
        )
    }
}

export default ResultButton;
