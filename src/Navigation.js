import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa'
import { RiQrScan2Line } from 'react-icons/ri'
import { AiOutlineForm } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import { IconContext } from "react-icons";
import Navbar from 'react-bootstrap/Navbar'
/* take note might clash with Navigation.css, because bootstrap.min.css is in App.css but here
there is Navigation.css also 
. Add the navigation bar in the future*/

/* import { IconContext } from "react-icons"; */ 
/* import IconContext if need to pass down props to it e.g. 
  size={props.size}
*/
/* need to add active classes for the buttons, so whenever a Link is clicked, the CSS is 'active', the other
links are shown as gray color etc. */

function Navigation() {
  /* inline styles are used because the <Link> is wrapping the <li> */
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  // refactor the icons in the future into list?
  // the vertical align does not seem to be working, maybe is the li?
  const icons = [<FaQrcode size="1.5em" />, <RiQrScan2Line size="1.7em" />, <AiOutlineForm size="1.7em" />]
    return (
      <>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <nav>
            <h3 className="logo">{"<JENIUS />"}</h3>
            <ul className="nav-links">
              <Link style={navStyle} to="/scanner"> 
                <li>
                  <FaQrcode size="1.5em" />
                </li>
              </Link>
              <Link style={navStyle} to="/generator">
                <li>
                  <RiQrScan2Line size="1.7em" />
                </li>
              </Link>
              <Link style={navStyle} to="/form">
                <li>
                  <AiOutlineForm size="1.7em" />
                </li>
              </Link>
              <Link style={navStyle} to="/form">
                <li>
                  <HiTemplate size="1.7em" />
                </li>
              </Link>
            </ul>
        </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navigation;