import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);


    return (
        <div>
            <h2 className="text-brand text-center">Appointments:{appointments.length} </h2>
            {/* 
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            } */}

            {
            appointments.map(appointment=><li key={appointment._id}>{appointment.name}|{appointment.email}</li>)
            }

              


        </div>
    );
};

export default AppointmentsByDate;