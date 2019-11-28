import React from 'react';

import convert from 'convert-units';

//import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
//import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Selector from './components/Selectors';
import InputField from './components/InputField';
import ResultButton from './components/ResultButton';

function distance_options() {
    return convert().possibilities('length');
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            distance: 0,
            gas: 0,
            mpg: 0
        }
    }

    calc_mpg = (g) => {
        let tmp = this.state.distance/g;
        this.setState({mpg: tmp})  
    }

    handleInputFields = (event) => {
        event.preventDefault();
        //console.log(event.target.name);
        //console.log(event.target.value);
        if(event.target.name === 'dist') {
            this.setState({distance: event.target.value});
        } else if (event.target.name === 'gallons') {
            this.setState({gas: event.target.value});
        }
        if (this.state.gas > 0) {
            this.calc_mpg(event.target.value);
        }
    }

    handleUnitSelector = (event) => {
        event.preventDefault()
        //console.log("Unit selection changed")
        //console.log(event.target)
        //console.log(event.target.value)
        if(event.target.name === 'dist') {
            //console.log("Changing to miles from " + event.target.value)
            let miles = convert(this.state.distance).from(event.target.value).to("mi");
            //console.log("Miles is " + miles)
            this.setState({distance:miles})
        } else if (event.target.name === 'gas') {
            let gs = convert(this.state.gas).from(event.target.value).to("gal");
            //console.log("Miles is " + miles)
            this.setState({gas:gs})
        }
        this.calc_mpg(this.state.gas)
    }

    render() {
        //console.log(convert().possibilities())
        return (
                <Grid container justify='center' align='center' direction={'row'} spacing={300}>
                    <Grid id="top-row" container style={{marginTop: '20px'}}>
                        <InputField data={{
                                            currentValue: this.state.distance,
                                            input: this.state.distance, 
                                            label: "Distance",
                                            type: "number",
                                            name: 'dist' }} 
                                    handleInput={this.handleInputFields} />
                        <Selector   data={{ size: 4,
                                          name: 'dist',
                                          measurements: convert().possibilities('length'),
                                          menuOptions: convert().possibilities('length'),
                                          selectedValue: 'mi' }}
                                    handleSelector={this.handleUnitSelector} />
                    </Grid>
                    <Grid id="next-row" container style={{marginTop: '20px'}}>
                        <InputField data={{
                                            currentValue: this.state.gas,
                                            input: this.state.gas,
                                            label: "Gasolene",
                                            type: "number",
                                            name: 'gallons' }} 
                                    handleInput={this.handleInputFields} />
                        <Selector   data={{ size: 4,
                                          name: 'gas',
                                          measurements: convert().possibilities('volume'),
                                          menuOptions: convert().possibilities('volume'),
                                          selectedValue: 'gal' }}
                                    handleSelector={this.handleUnitSelector} />
                    </Grid>
                    <Grid item
                        xs={10}
                        style={{marginTop: '20px'}}>
                        <Fab
                            color="primary"
                            aria-label="play" >
                                <PlayArrowIcon />
                        </Fab>
                    </Grid>
                    <ResultButton
                        align="right"
                        default="Result"
                        msg={this.state.mpg} 
                    />
                    <ResultButton
                        align="left" 
                        msg="mpg"
                    />
                </Grid>
        )
    }
}

export default App;
