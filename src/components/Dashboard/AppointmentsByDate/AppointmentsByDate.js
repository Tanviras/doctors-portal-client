import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import AppointmentsByDateHelper from '../AppointmentsByDateHelper/AppointmentsByDateHelper';


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
                <div>
                <div>

                <div className='row mb-3'>
                    <div className='col-sm-5 text-secondary'><b>Name</b></div>
                    <div className= 'col-sm-4 text-secondary' ><b>Schedule</b></div>
                    <div className='col-sm-3 text-secondary'><b>Action</b></div>
                </div>

            </div>

            <div className=''>
            {
                appointments.map(appointment =>
                    <AppointmentsByDateHelper 
                        key={appointment._id}
                        appointment={appointment}
                    >
                    </AppointmentsByDateHelper>)
            } 
            </div>
            </div>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            } 
        </div>
    );
};

export default AppointmentsByDate;