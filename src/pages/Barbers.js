import { useState, useEffect } from "react";
import React, { Component }  from 'react';

function Barbers(props) {
  // create state to hold services data
  const [barbers, setBarbers] = useState(null);

  // create function to make api call
  const getBarbersData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "barbers");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setBarbers(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getBarbersData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return barbers.map((barber) => (
    <div>
      <h1>{barber.name}</h1>
      <img src={barber.image} alt={barber.name} />
      <p className="barbIntro">{barber.intro}</p>
      <p className="barbSpec">{barber.speciality}</p>
    </div>
  ));
};

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return barbers ? loaded() : <h1>Loading...</h1>;
}

export default Barbers;