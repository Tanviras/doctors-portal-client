import React from 'react';
import DateFormatting from "./../DateFormatting/DateFormatting";
import './PrescriptionsTable.css';

const PrescriptionsTable = ({appointments}) => {

    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Date</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Contact</th>
            <th className="text-secondary" scope="col">Prescription</th>
            </tr>
        </thead>
        <tbody>
            {
              appointments.map((appointment, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{<DateFormatting date={appointment.date}></DateFormatting>}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.phone}</td>
                    <td><button className="btn btn-info btnColor">View</button></td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default PrescriptionsTable;