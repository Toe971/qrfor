import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid'; 

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'




function ReactQRMaker() {
    // component, faults, and id are going to be passed into the object
    const testObject = {
        id: uuidv4(),
        component: "PlayStation",
        system: "S1"
    }
    const testObjectJSON = JSON.stringify(testObject)

    
    return(
        <div className="generator">
            <QRCode 
                value={testObjectJSON}
                size={256}
            />
        </div>
    )
}

export default ReactQRMaker;