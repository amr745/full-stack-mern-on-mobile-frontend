import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import React, { Component }  from 'react';
import Index from "./Index"
import Show from "./Show"
import Services from "./Services";
import Barbers from "./Barbers";
import Home from "./Home";

export default function Appointments(props) {
    const [appointments, setAppointments] = useState(null)

    const URL = "https://barberbackendar.herokuapp.com/";

    const getAppointments = async () => {
        const data = await fetch(URL + "appointments").then(res => res.json())
        setAppointments(data);
    }

    const createAppointments = async appointment => {
        await fetch(URL + "appointments", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(appointment),
        });
        getAppointments();
    }

    const updateAppointments = async (appointment, id) => {
        await fetch(URL + "appointments/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        })
        getAppointments()
      }
    
      const deleteAppointments = async id => {
        await fetch(URL + "appointments/" + id, {
          method: "DELETE",
        })
        getAppointments()
      }

    useEffect(() => {
        getAppointments()
    },[]);

    return (
        <main>
            <Routes>
              <Route path="/" element={<Home URL={URL}/>} />
              <Route path="/services" element={<Services URL={URL}/>} />
              <Route path="/barbers" element={<Barbers URL={URL}/>} />
              <Route path="/appointments" element={<Index appointments={appointments} createAppointments={createAppointments} />} />
              <Route path="/appointments/:id" element={<Show appointments={appointments} deleteAppointments={deleteAppointments} updateAppointments={updateAppointments} />} />
            </Routes>
        </main>
    )
}