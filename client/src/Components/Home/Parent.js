import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";


import Child1 from './Child1'



class Parent extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        name : 'vishnu',
        message: "parent message"
      };
  }

  callbackFunction = (childData) => {
       this.setState({message: childData})
  }


  render() {
	 return (
			   <div>
            <input placeholder="Enter name in parent"  id="name"  type="text" onChange={e => this.setState({ name: e.target.value })}  /> 
           
            <Child1 parentCallback = {this.callbackFunction} valueFromParent={this.state.name}/>
           
            <p> data from child : - {this.state.message} </p>
         </div>		

      )
	}
}

export default Parent;