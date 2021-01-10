import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import ReactQRScanner from './components/ReactQRScanner/ReactQRScanner'
import Nav from './Nav';
import Generator from './Generator';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// notice that Home is not using {} but ()
// this is the syntax used for Route component
const Home = () => (
  <div>
    <h1>Home</h1>
        {/* reader-container is used for styling, to force reader
      to be at the center */}
    <div className="reader-container">
        <ReactQRScanner />
    </div>
  </div>
)


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/generator" component={Generator} />
        </Switch>
        <Form>
            <Form.Group>
              <Form.File id="form-file" custom/>
            </Form.Group>
        </Form>
      </div>
    </Router>
  );
}



export default App;
