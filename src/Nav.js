import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {

  /* inline styles are used because the <Link> is wrapping the <li> */
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

    return (
      <nav >
          <h3>Logo</h3>
          <ul className="nav-links">
            <Link style={navStyle} to="/scanner"> 
              <li>Scanner</li>
            </Link>
            <Link style={navStyle} to="/generator">
              <li>Generator</li>
            </Link>
          </ul>
      </nav>
    );
}

export default Nav;