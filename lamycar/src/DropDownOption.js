import React, { Component } from 'react';
import './App.css';


class DropDownOption extends Component {
  render() {
    return (
    			<option value="{this.props.children}">{this.props.children}</option>     
    );
  }
}

export default DropDownOption;