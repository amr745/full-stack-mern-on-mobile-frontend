import './App.css';
import { Route, Routes } from "react-router-dom"

// IMPORT PAGES
import Services from "./pages/Services";
import Barbers from "./pages/Barbers";

// BACKEND HEROKU URL
function App() {
  const URL = "https://barberbackendar.herokuapp.com/";
  
  return (
    <div className="App">
      <Routes>
      {/* <Route path="/" element={<Home URL={URL}/>} /> */}
      <Route path="/services" element={<Services URL={URL}/>} />
      <Route path="/barbers" element={<Barbers URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;