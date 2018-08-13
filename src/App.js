import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Lista from './Lista';
import './App.css';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      isLoading:true,
       data : 'initial data'
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(){
    this.setState({data: 'data updated'});
  }

  componentDidMount(){
    this.fetchdata();
  }

  // commponentWillMount(){
  //   data = JSON.parse(data) 
  // }

  fetchdata(){
    fetch('https://unitec.blackboard.com/bbcswebdav/pid-4626106-dt-content-rid-61346755_1/courses/HNTC01.UNITEC.247CCC307201824SPS/positions.json')
    .then(response => response.json())
    .then(result => this.setState({result, isLoading:false}))
    .catch(error => console.log('parsing failed', error))
    
}
  render() {
    return (
      <Router>
        <div className="App">
          <Home myDataProp = {this.state.data}
          updateStateProp = {this.updateState}/>   
        </div>
      </Router>
    );
  }
}


export default App;
