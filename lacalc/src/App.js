import React from 'react';

import convert from 'convert-units';

//import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
//import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import Selector from './components/Selectors';
import InputField from './components/InputField';
import ResultButton from './components/ResultButton';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            distance: 0,
            gas: 0,
            mpg: 0
        }
    }

    handleInputFields = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);
        if(event.target.name === 'dist') {
            this.setState({distance: event.target.value})
        } else if (event.target.name === 'gallons') {
            this.setState({gas: event.target.value})
        }
        if (this.state.gas > 0) {
            let tmp = this.state.distance/event.target.value;
            this.setState({mpg: tmp})
        }

        console.log("mpg : " + this.state.mpg);
        console.log("gas : " + this.state.gas);
        console.log("distance : " + this.state.distance);
    }

    render() {
        //console.log(convert().possibilities())
        return (
                <Grid container justify='center' align='center' spacing={3}>
                    <InputField data={{  
                                        input: this.state.firstQuantity, 
                                        label: "Distance",
                                        type: "number",
                                        name: 'dist' }} 
                                handleInput={this.handleInputFields} />

                    <InputField data={{  
                                        input: this.state.secondQuantity, 
                                        label: "Gasolene",
                                        type: "number",
                                        name: 'gallons' }} 
                                handleInput={this.handleInputFields} />

                    <Grid item xs={10}>
                        <Fab color="primary" aria-label="play" >
                            <PlayArrowIcon />
                        </Fab>
                    </Grid>
                    <ResultButton mpg={this.state.mpg} />
                </Grid>
        )
    }
}

export default App;
