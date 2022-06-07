// import { useState, useEffect } from "react";
import React  from 'react';
import * as FaIcons from "react-icons/fa";

function Footer(props) {

    const social= () => {
      window.location.href="https://www.linkedin.com/in/ashleymrichard1";
    }
  
    const git= () => {
      window.location.href = "https://github.com/amr745/full-stack-mern-on-mobile-frontend";
    }
    return (
    <footer>
      <p className="pfoot">Created by Ashley M. Richard</p>
      <FaIcons.FaLinkedin onClick={social} target="_blank" className="social-link"/>
      <FaIcons.FaGithub className="social-link" alt="Github Link" onClick={git} target="_blank" />
    </footer>
    )
  }
  
  export default Footer;