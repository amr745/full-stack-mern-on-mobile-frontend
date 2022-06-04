import { Link } from "react-router-dom"
import { useState } from "react";
import React, { Component }  from 'react';

export default function Index({appointments, createAppointments}) {

    const [form, setForm] = useState({
        barber: '',
        service: '',
        date: '',
        time: '',
    });

    const handleChange = evt => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createAppointments(form);
        setForm({
            barber: '',
            service: '',
            date: '',
            time: '',
        })
    }

    // loaded function
    const loaded = () => appointments.map(appointment => (
            <div key={appointment._id} className="appointment">
                <Link to={`/appointments/${appointment._id}`}>
                    <h1>{appointment.service}</h1>
                </Link>
                <h3>{appointment.barber}</h3>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
            </div>
        ))

    const loading = () => <h1>Loading...</h1>

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="barber"
                    placeholder="barber"
                    value={form.barber}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="service"
                    placeholder="service"
                    value={form.service}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="date"
                    placeholder="date"
                    value={form.date}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="time"
                    placeholder="time"
                    value={form.time}
                    onChange={handleChange}
                />
                <button type="submit">Add Appointment</button>
            </form>
            {appointments ? loaded() : loading()}
        </section>
    )
}