import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa'
import { RiQrScan2Line } from 'react-icons/ri'
/* import { IconContext } from "react-icons"; */ 
/* import IconContext if need to pass down props to it e.g. 
  size={props.size}
*/


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
              <li>
                <FaQrcode size="3em" />
              </li>
            </Link>
            <Link style={navStyle} to="/generator">
              <li>
                <RiQrScan2Line size="3.4em" />
              </li>
            </Link>
          </ul>
      </nav>
    );
}

export default Nav;