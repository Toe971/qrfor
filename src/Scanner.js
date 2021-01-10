import React from 'react';
import './App.css';
import ReactQRScanner from './components/ReactQRScanner/ReactQRScanner'


function Scanner() {
    return (
      <div>
        <h1>Scanner</h1>
        {/* reader-container is used for styling, to force reader
      to be at the center */}
        <div className="reader-container">
          <ReactQRScanner />
        </div>
      </div>
    );
}

export default Scanner;