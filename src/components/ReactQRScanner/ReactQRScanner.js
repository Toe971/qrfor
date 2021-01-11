import React, { useState, useEffect} from 'react'
import QrReader from 'react-qr-reader'
import './ReactQRScanner.css';
import { v4 as uuidv4 } from 'uuid'; 

function ReactQRScanner() {
  /* qrStringValidator is validator function, to check if qrString is a component */
  /* after validation of qrString, in the future need to fetch it */
  /* should be implemented using fetch() then array.filter() etc. */
  /* for now just check if qrString is a Object */
  // pass in {} to useState first, commented out id, component etc.
  // so that can remember the shape of report object
  // actually empty object is true, need to test
  const [report, setReport] = useState(
      {
        /* id: "",
        component: "",
        fault: "", */
      }
    );
    
  
  /* pass qrStringValidator to handleScan */
  /* so onScan we can validate the qrString */
  const qrStringValidatorAndSetReportState = (qrString) => {
    const boolQrStringIsJSON = typeof JSON.parse(qrString) === "object";
    if (boolQrStringIsJSON) {
      setReport(
       {
        id: uuidv4(),
        component: qrString.component,
        fault: qrString.fault,
       }
      )
    }
  }




  /* handleScan and handleError are used for QrReader */
  /* qrString  */
  const [qrString, setQrString] = useState("Waiting for QR code...");

  useEffect(() => {

  }, [])


  const handleScan = data => {
    if (data) {
      // setQrString updates state of qrString
      setQrString(data);
      // pass in qrString to de-JSONify it
      // still does not work for qrStringValidator, not sure if problem is with the function itself 
      // or calling two different setStates
      qrStringValidatorAndSetReportState(qrString);
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
      {report.length > 0 &&
      <p className="result">
        Component: {report.component}
      </p>}
      <p className="result">{qrString}</p>
    </div>
  )

}

export default ReactQRScanner;

