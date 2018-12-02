import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header';
import NewPage from  './components/NewPage';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <NewPage/>
      </div>
    );
  }
}

export default App;
