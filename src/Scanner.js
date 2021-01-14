import React from 'react';
import ReactQRScanner from './components/ReactQRScanner/ReactQRScanner'
import './Scanner.css'


function Scanner() {
    return (
      <div className="scanner-container">
        <h1>Scanner</h1>
        {/* reader-container is used for styling, to force reader
      to be at the center */}
        <ReactQRScanner />
      </div>
    );
}

export default Scanner;