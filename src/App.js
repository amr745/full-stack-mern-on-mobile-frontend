import React from "react";
import './App.css';
// import React, { Component }  from 'react';

// IMPORT PAGES
// import Services from "./pages/Services";
// import Barbers from "./pages/Barbers";
import Appointments from "./pages/Appointments";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

// BACKEND HEROKU URL
function App() {
  // const URL = "https://barberbackendar.herokuapp.com/";
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Appointments />
      <Footer />
    </div>
  );
}

export default App;