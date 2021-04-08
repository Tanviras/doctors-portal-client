import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Treatment</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment) => 
                        
                    <tr>
                        <td><b>{appointment.name}</b></td>
                        <td><b>{appointment.phone}</b></td>
                        <td><b>{appointment.service}</b></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;