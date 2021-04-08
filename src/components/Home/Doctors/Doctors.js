import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    // const [doctors, setDoctors] = useState([])

    // useEffect( () => {
    //     fetch('http://localhost:5000/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;