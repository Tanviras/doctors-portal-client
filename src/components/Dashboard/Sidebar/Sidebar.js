import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/Login/firebase.config';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })//backend theke email ta peye jabe
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])


    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleSignOut = () => {
        return firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            name: '',
            email: '',
          }
         setLoggedInUser(signedOutUser);//loggedInUser change korlam
         sessionStorage.removeItem('token');//sessionStorage khali korlam, duitai korlam karon jekono ekta thaklei seta diye dhuke jawa jabe onno page a without re-login
        }).catch(err => {
          // An error happened.
        });
      }


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
               
               
               
                    <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                    </li>
                   
                    
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>



               {/* conditional show of sidebar */}
                {isDoctor && <div> 
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allPatients" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>
                 }
                
            </ul>
            <div>
                <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt}/> 
                <span onClick={handleSignOut}>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;