import React, { Component } from 'react';
import './App.css';
import YearSelector   from './YearSelector.js';
import CarMakeSelector from './CarMakeSelector.js';
import CarModelSelector from './CarModelSelector.js';


class CarMakeModelSelect extends Component {
  render() {
  	//let data = this.props.data;
  	let message = "Yes, No Maybe?";
    return (
	    <div>

        <div class="btn-toolbar row" aria-expanded="false" role="toolbar">
          <div class="px-md-5">
    		  	<YearSelector />
          </div>
          <div class="px-md-5">
    		  	<CarMakeSelector />
          </div>
          <div class="px-md-5">
    		  	<CarModelSelector />
          < /div>

    			<p>{message}</p>
        </div>
  		</div>     
    );
  }
}

export default CarMakeModelSelect;