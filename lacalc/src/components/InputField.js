import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
//import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

class InputField extends Component {
    render() {
        return (
            <Grid item
                xs={7}
                justify="right"
                align="right">

                <TextField
                    variant='outlined'
                    label={this.props.data.label}
                    value={this.props.data.currentValue}
                    name={this.props.data.name}
                    type={this.props.data.type}
                    onChange={this.props.handleInput}
                    style={{width: '50%'}}
                />

            </Grid>
        )
    }
}

export default InputField;