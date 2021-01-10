import React, { useState, useEffect} from 'react'
import QrReader from 'react-qr-reader'
import './ReactQRReader.css';

export function ReactQRReader() {
  const [qrString, setQrString] = useState("Waiting for QR code...");


  useEffect(() => {

  }, [])

  const handleScan = data => {
    if (data) {
      setQrString(data);
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="reader">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode={"environment"}
      />
      <p className="result">{qrString}</p>
    </div>
  )

}

