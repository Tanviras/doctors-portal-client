import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import './Dashboard.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    // border: '1px solid red',
    height: '100%',
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date:selectedDate})
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])



    return (
        <section>
            <div style={containerStyle} className="row">

                {/* 1st column */}
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>



            
                {/* 2nd column */}
                <div className="col-md-4 col-sm-12 col-12 d-flex justify-content-center" style={{ height: "83vh" }}>
                  <div className='col p-3'>

                   <div className=''>
                       <div> <h3>Appointments</h3></div>
                   </div>
                  

                  <div className='calendarAlign'>
                  <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                  </div>
                    
                  </div>
                </div>


                {/* 3rd column */}
                <div className="col-md-5 col-sm-12 col-12 listAlign table shadow p-5 rounded" style={{ height: "83vh" }}>
                    <AppointmentsByDate appointments={appointments} selectedDate={selectedDate}></AppointmentsByDate>
                </div>
               


            </div>
        </section>
    );
};

export default Dashboard;