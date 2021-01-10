import React from 'react';
import './App.css';
import ReactQRGenerator from './components/ReactQRGenerator/ReactQRGenerator'

function Generator() {
    return (
      <div className="App">
        <h1>Scanner</h1>
          <ReactQRGenerator />
      </div>
    );
}

export default Generator;