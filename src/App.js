import './App.css';
// import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
// import Services from "./pages/Services";
// import Barbers from "./pages/Barbers";
import Appointments from "./pages/Appointments";

// BACKEND HEROKU URL
function App() {
  // const URL = "https://barberbackendar.herokuapp.com/";
  
  return (
    <div className="App">
      <Appointments />
      {/* <Routes> */}
      {/* <Route path="/" element={<Home URL={URL}/>} /> */}
      {/* <Route path="/services" element={<Services URL={URL}/>} /> */}
      {/* <Route path="/barbers" element={<Barbers URL={URL}/>} /> */}
      {/* <Route path="/appointments" element={<Appointments URL={URL}/>} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;