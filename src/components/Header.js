// import { Link } from "react-router-dom";
import React from 'react';

function Header(props) {
//   inline style for the nav tag
  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   border: "3px solid white",
  //   padding: "8px",
  //   width: "90%",
  //   margin: "auto",
  // };
  
  return (
  <header>
      <img src="https://imgur.com/84nWw4D.png" alt="Shop Logo" />
      {/* <nav style={navStyle}>
          <Link to="/">HOME</Link>
          <Link to="/Services">SERVICES</Link>
          <Link to="/Barbers">BARBERS</Link>
          <Link to="/Appointments">APPOINMENTS</Link>
          </nav> */}
    </header>
    );
}

export default Header;