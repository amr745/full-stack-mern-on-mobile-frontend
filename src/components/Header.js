import { Link } from "react-router-dom";
import React from "react"
import Home from "../pages/Home";

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

  // const [image, setImage] = useState(null);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // const handleClick = (Home) => {
    // setImage(Home)
  // };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  
  // const images = imagesArr.map((ele, index) => {
  //   return (
  //   <img className="thumb" src={ele.img} alt={ele.alt} key={index} onClick={()=>handleClick(ele.img)} />
  //   )
  // });

  

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  // useEffect(() => {getImage()}, []);

  // const handleClick = () => {
    // setImage(props.URL)
  // };

  return (
    // return home.map((home) => (
  <header>
    <Link to={`/`}>
      <img src="https://imgur.com/84nWw4D.png" alt="Shop Logo"/>
    </Link>
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