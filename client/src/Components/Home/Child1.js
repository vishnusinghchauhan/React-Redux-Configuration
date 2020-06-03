import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";

class Child1 extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
      	childname:"name"
      };
    }

  sendBackData = (e) => {
    this.props.parentCallback(e.target.value);
  }



render() {
	 return (
	 	     <div>
			   <div> hello  from parent :- {this.props.valueFromParent} </div>	

			    <input placeholder="Enter name in child"  onChange={this.sendBackData} /> 
         </div>
        )
	}
}

export default Child1;