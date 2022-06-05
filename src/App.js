import React from "react";
import './App.css';

// IMPORT PAGES
import Appointments from "./pages/Appointments";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Navbar/Navbar"

// BACKEND HEROKU URL
function App() {
  
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Appointments />
      <Footer />
    </div>
  );
}

export default App;