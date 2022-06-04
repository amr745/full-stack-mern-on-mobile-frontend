import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
          <NavLink to="/">
          <img src="https://imgur.com/84nWw4D.png" alt="Shop Logo" className="shopLogo" />
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/Services" activeStyle>
              Services
              </NavLink>
              <NavLink to="/Barbers" activeStyle>
              Barbers
              </NavLink>
              <NavLink to="/Appointments" activeStyle>
              Appointments
              </NavLink>
          </NavMenu>
          {/* <NavBtn> */}
              {/* <NavBtnLink to="signin">Sign In</NavBtnLink> */}
          {/* </NavBtn> */}
      </Nav>
    </div>
  )
}

export default Navbar;
