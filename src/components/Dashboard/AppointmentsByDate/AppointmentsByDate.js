import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments,selectedDate }) => {
    console.log(appointments);
    return (
        <div>
            <div className='row'>
            <div className='col-sm-3'><h5 className="text-brand mb-4">Appointments</h5></div>
            <div className='offset-md-6'>{selectedDate.toDateString()}</div>
            </div>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;