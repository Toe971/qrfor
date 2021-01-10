import React from 'react';
import './App.css';
import ReactQRMaker from './components/ReactQRMaker/ReactQRMaker'

function Maker() {
    return (
      <div className="App">
        <h1>Scanner</h1>
          <ReactQRMaker />
      </div>
    );
}

export default Maker;