import React from 'react';
// need to include the import bootstrap css so that bootstrap elements have default bootstrap styling
// import ABOVE App.css, not underneath it, otherwise the CSS breaks
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Nav';
import Generator from './Generator';
import Scanner from './Scanner';
import ReportForm from './ReportForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// notice that Home is not using {} but ()
// this is the syntax used for Route component
const Home = () => (
  <div>
    <h1>Home</h1>
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
          <Route path="/scanner" component={Scanner} />
          <Route path="/form" component={ReportForm} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
