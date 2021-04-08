import React from 'react';
import './AppointmentsByDateHelper.css';

const AppointmentsByDateHelper = ({ appointment }) => {
    console.log(appointment);
    return (
        <div className='row mb-1'>
            
        <div className='col-sm-5'><b>{appointment.name}</b></div>
        <div className='col-sm-4'><b>7:00 PM</b></div>
        <div className='col-sm-3'><button className='btn btn-info'>Visited</button></div>

        </div>
    );
};

export default AppointmentsByDateHelper;