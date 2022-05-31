import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({appointments, updateAppointments, deleteAppointments}) {

    const { id } = useParams();
    const appointment = appointments.find(appointment => appointment._id === id);
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(appointment);

    const handleChange = evt => {
        setEditForm({
            ...editForm,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        updateAppointments(editForm, id);
    };

    const removeAppointment = () => {
       deleteAppointments(id);
        navigate("/appointments");
    };

    return (
        <div className="appointment">
            <h1>{appointment.service}</h1>
            <h2>{appointment.barber}</h2>
            <h2>{appointment.date}</h2>
            <h2>{appointment.time}</h2>
            <button id="delete" onClick={removeAppointment}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="barber"
                    placeholder="barber"
                    value={editForm.barber}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="service"
                    placeholder="service"
                    value={editForm.service}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="date"
                    placeholder="date"
                    value={editForm.date}
                    onChange={handleChange}
                />
                 <input 
                    type="text" 
                    name="time"
                    placeholder="time"
                    value={editForm.time}
                    onChange={handleChange}
                />
                <button type="submit">Update Appointment</button>
            </form>
        </div>
    )
}