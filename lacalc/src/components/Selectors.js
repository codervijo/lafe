import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Selector extends Component {
    render() {
        return (
            <Grid item xs={this.props.data.size} align="left" justify="left">
                <FormControl variant='outlined' style={{width: '35%'}}>
                    <InputLabel>{this.props.data.label}</InputLabel>
                    <Select
                        name={this.props.data.name}
                        value={this.props.data.selectedValue}
                        onChange={this.props.handleSelector}
                    >
                        <MenuItem selected value=''>
                            <em>None</em>
                        </MenuItem>
                        {
                            this.props.data.menuOptions.map((ele, index) => <MenuItem value={this.props.data.measurements[index]} key={index}>{ele}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
        )
    }
}

export default Selector;