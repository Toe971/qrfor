import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    return (
      <nav >
          <h3>Logo</h3>
          <ul className="nav-links">
            <Link to="/Reader"> 
              <l1>Reader</l1>
            </Link>
            <Link to="/Maker">
              <li>Maker</li>
            </Link>
          </ul>
      </nav>
    );
}

export default Nav;