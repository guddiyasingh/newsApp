
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {
 
  render() {
    return (
      <div >
        <Navbar/>
        <Routes>
          <Route path="/" element={<News pageSize={5} country="us" category="general" />} />
          <Route path="/business" element={<News pageSize={5} country="us" category="business" />} />
          <Route path="/entertainment" element={<News pageSize={5} country="us" category="entertainment" />} />
          <Route path="/general" element={<News pageSize={5} country="us" category="general" />} />
          <Route path="/health" element={<News pageSize={5} country="us" category="health" />} />
          <Route path="/science" element={<News pageSize={5} country="us" category="science" />} />
          <Route path="/sports" element={<News pageSize={5} country="us" category="sports" />} />
          <Route path="/technology" element={<News pageSize={5} country="us" category="technology" />} />
        </Routes>
      </div>
    )
  }
}
