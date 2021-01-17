import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import './ReportFormComponent.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function ReportFormComponent() {

    const [component, setComponent] = useState("")
    const handleComponent = (event) => {
        setComponent(event.target.value)
        console.log("From handleComponent ", component)
    }

    const [fault, setFault] = useState("")
    const handleFault = (event) => {
        setFault(event.target.value)
        console.log("From handleFault ", fault)
    }

    const [system, setSystem] = useState("")
    const handleSystem = (event) => {
        setSystem(event.target.value)
        console.log("From handleSystem ", system)
    }

    // pass into dependency array each input's state

    // initialise report state
    const [report, setReport] = useState(
        {
            component: "",
            system: "",
            fault: ""
        }
    ); 

    
    const handleSubmitReport= (event) => {
        event.preventDefault();
        console.log(report.component, report.system, report.fault)
    }

    // set dependency array as component, system, fault, so if any of these state changes
    // set report as text that user has entered
    // previously I used setReport inside handleSubmitReport
    // this resulted in old state being submitted on the first submit
    // only on the second submit will then the correct state be submitted
    // then I read from documentation:
    // 
    useEffect(() => {
        setReport(
            {
                component: component,
                system: system,
                fault: fault
            }
        );
    }, [component, system, fault])

    // I should hardcode the components in a tree view in the future
    /* for now I should use a Bootstrap Form combined with the buttons etc. */
    return(
        /* className='mt-3' means that margin-top size of to $spacer */
        /* see https://getbootstrap.com/docs/4.0/utilities/spacing/ */
        <Container>
            {/* for input type text, value is the initial value of the input */}
            {/* <form onSubmit={handleSubmitReport}>
                <DropdownButton id="dropdown-item-button" title="Select System">
                    <Dropdown.ItemText>Select system</Dropdown.ItemText>
                    {
                        [1, 2, 3, 4].map(element => {
                            return  <Dropdown.Item eventKey={`${element}`}>System{element}</Dropdown.Item>
                        })
                    }
                </DropdownButton>
                <label>
                    What component is it?
                    <input type="text" value={component} onChange={handleComponent}/>
                </label>
                <label>
                    Please describe the fault.
                    <textarea value={fault} onChange={handleFault}/>
                </label>
                <Button type="submit"></Button>
            </form> */}
            <Form onSubmit={handleSubmitReport}>
                <Form.Group as={Row} controlId="formHorizontalText" className='mt-3'>
                    <Form.Label column sm={2}>
                    Component
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Component" 
                            value={component} 
                            onChange={handleComponent}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalTextArea" className='mt-3'>
                    <Form.Label column sm={2}>
                    Fault
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Fault Description" 
                            value={fault} 
                            onChange={handleFault}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mt-3'>
                    <Form.Label column sm={2}>
                        System
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            as="select" 
                            onChange={handleSystem} 
                            defaultValue="Choose..."
                        >
                            <option>Choose...</option>
                            {
                                [1, 2, 3, 4].map(element => {
                                    return <option eventKey={element} value={`System ${element}`}>System {element}</option>
                                })
                            }
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Button type="submit">Submit!</Button>
            </Form>
        </Container>
    )
}

export default ReportFormComponent;