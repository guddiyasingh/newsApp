
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
 
  render() {
    return (
      <div >
        <Navbar title="myTitle" description="mydesc"/>
       <News/>
      </div>
    )
  }
}