import { useState, useEffect } from "react";
import React from 'react';

function Home(props) {

  // create function to make api call
  const [home, setHome] = useState(null);

  // create function to make api call
  const getHomeData = async () => {
    // make api call and get response
    const response = await fetch(props.URL);
    // turn response into javascript object
    const data = await response.json();
    // set the home state to the data
    setHome(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getHomeData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return home.map((home) => (
    <div>
      <h1 className="homeWord">Your next haircut awaits...</h1>
      {/* <div className="picdiv"> */}
      <img src={home.logo} alt="Barbershop" className="shopPic" />
      {/* </div> */}
    </div>
    ))
};

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;