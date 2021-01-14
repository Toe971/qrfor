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
    try {
      const boolQrStringIsJSON = typeof (JSON.parse(qrString)) === "object";
      if (boolQrStringIsJSON) {
        // previously used JSON.parse(qrString), but did not save to variable. See initial commits to understand more
        // this resulted in data not being shown when i want to
        let parsedQrString = JSON.parse(qrString)
        setReport(
         {
          id: uuidv4(),
          component: parsedQrString.component,
          system: parsedQrString.system
         }
        )
      }
      setDebug(`Now in qrStringValidator if block, Report: ${report}`)
    }
    catch {
      setDebug(`Not a system component, item scanned is: ${qrString}`)
    }
  }



  // debug function similar to console.log() using this for mobile
  const [debug, setDebug] = useState("not debug")

  /* handleScan and handleError are used for QrReader */
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
      // edit: problem is resolved, see my OneNote
      setDebug("data is received in handleScan")
      qrStringValidatorAndSetReportState(qrString);
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode={"environment"}
      />
      {Object.keys(report).length > 0 
        &&
        <p className="result">
          Component: {report.component}
        </p> 
        &&
        <p className="result">
          System: {report.system}
        </p>
      }
      
      {/* <p className="result">{qrString}</p> */}
      {/* qrString is the JSON.stringfy() form of the component */}
      <p>{debug}</p>
    </div>
  )

}

export default ReactQRScanner;

