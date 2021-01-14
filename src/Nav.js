import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa'
import { RiQrScan2Line } from 'react-icons/ri'
import { AiOutlineForm } from "react-icons/ai";
/* import { IconContext } from "react-icons"; */ 
/* import IconContext if need to pass down props to it e.g. 
  size={props.size}
*/
/* need to add active classes for the buttons, so whenever a Link is clicked, the CSS is 'active', the other
links are shown as gray color etc. */


function Nav() {

  /* inline styles are used because the <Link> is wrapping the <li> */
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

    return (
      <nav >
          <h3 className="logo">{"<JENIUS />"}</h3>
          <ul className="nav-links">
            <Link style={navStyle} to="/scanner"> 
              <li>
                <FaQrcode size="2em" />
              </li>
            </Link>
            <Link style={navStyle} to="/generator">
              <li>
                <RiQrScan2Line size="2.4em" />
              </li>
            </Link>
            <Link style={navStyle} to="/form">
              <li>
                <AiOutlineForm size="2.4em" />
              </li>
            </Link>
          </ul>
      </nav>
    );
}

export default Nav;