import { useState, useEffect } from "react";
import React from 'react';
import './Services.css';

function Services(props) {
  // create state to hold services data
  const [services, setServices] = useState(null);

  // create function to make api call
  const getServicesData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "services");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setServices(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getServicesData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return services.map((service) => (
    <div className="ser">
      <h4 className="serLet">{service.cut} | {service.price}</h4>
      {/* <h3>{service.price}</h3> */}
      <p className="servDis">{service.description}</p>
    </div>
  ));
};

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return services ? loaded() : <h1>Loading...</h1>;
}

export default Services;