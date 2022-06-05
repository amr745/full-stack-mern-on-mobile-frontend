// import { useState, useEffect } from "react";
import React  from 'react';
import * as FaIcons from "react-icons/fa";

function Footer(props) {

    const social= () => {
      window.location.href="https://www.linkedin.com/in/ashleymrichard1";
    }
  
    const git= () => {
      window.location.href = "https://github.com/amr745/express-and-react-lab-frontend";
    }
    return (
    <footer>
      <p>Created by Ashley M. Richard</p>
      <FaIcons.FaLinkedin onClick={social} target="_blank" className="social-link"/>
      <FaIcons.FaGithub className="social-link" alt="Github Link" onClick={git} target="_blank" />
      {/* <img className="social-link" src="https://imgur.com/8VOL4YY.png" alt="Linkedin Link" onClick={social}/> */}
      {/* <img className="social-link" src="https://imgur.com/YTC2jT5.png"alt="Github Link" onClick={git}/> */}
    </footer>
    )
  }
  
  export default Footer;