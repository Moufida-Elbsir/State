import React, { Component } from 'react'
import './App.css';
import Hello from './kitty.png';
export default class App extends Component {
  state={
    Person:{
       fullName:"Moufida El Bsir",
       bio: "textile engineer",
       imgSrc:Hello,
       profession:"GMC Student",
      },
     Shows:true,
     counter:0
  }
handleShow=()=>this.setState({Shows:!this.state.Shows});
componentDidMount(){
  setInterval(() => {
    this.setState({counter:this.state.counter+1})
  }, 1000);
}
  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow}>{this.state.Shows?'Hide':'Show'}</button>
        {this.state.Shows &&
        <div>
           <h1>{this.state.Person.fullName}</h1>
           <h2>{this.state.Person.bio}</h2>
           <h2>{this.state.Person.profession}</h2>
           <img src={this.state.Person.imgSrc} alt='Not found' />
        </div>}
        <p> {this.state.counter} </p>
      </div>
    )
  }
}


