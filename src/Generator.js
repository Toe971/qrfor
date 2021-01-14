import React from 'react';
import './Generator.css';
import ReactQRGenerator from './components/ReactQRGenerator/ReactQRGenerator'

function Generator() {
    return (
      <div className="generator-container">
        <h1>Generator</h1>
        <ReactQRGenerator />
      </div>
    );
}

export default Generator;