import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header';
import NewPage from  './components/NewPage';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      language:'python',
      version:3.2,
      repo:'open-source',
    }

    this.country= 'india';
    this.getInfo = this.getInfo.bind(this);
    console.log('constructor called');
  }

  

  componentDidMount(){
    console.log('didmount called');
  }
  componentWillMount(){
    console.log('willmount called');
  }

  componentDidUpdate(){
    console.log('didupdtae called');
  }
  componentWillUpdate(){
    console.log('will updtae called');
  }

  componentWillUnmount() {
    console.log('will unmount called');

  }




  getInfo(){
    return 'we got it !!';
  }

  render() {
    return (
      <div className="App">
       <Header info={this.state} country={this.country} funcInfo={this.getInfo}/>
       <NewPage name = {'abc'} age={'38'}/>
      </div>
    );
  }
}

export default App;
