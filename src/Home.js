import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Lista from './Lista';

class Home extends Component{
    render(){
      return(
        <Router>
          <div>
            <h1>Job Search</h1>
            <ul>
              <li><Link to={'/Lista'}>Lista</Link></li>
            </ul>
            <div class="form-group">
              <label for=""></label>
              <input type="search" class="form-control" name="" id="search" aria-describedby="helpId" placeholder="Search Job"/>
              <button onClick = {this.props.updateStateProp} type="button" class="btn btn-primary" id="boton">Search</button>
            </div>
            <h2>{this.props.myDataProp}</h2>
            <Switch>
                  <Route exact path='/Lista' component={Lista} />
               </Switch>
          </div>
        </Router>
      );
    }
  }

  export default Home;