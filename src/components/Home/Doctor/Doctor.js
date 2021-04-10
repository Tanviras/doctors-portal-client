import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">

            {/* Look,we have image in two places. One in 'doctors' where the image isn't in binary form.

            Another one is at mongodb database where the image is encoded and in binary(base64) form.
            Database a 'image' er vetor 'img' hishebe ache. Tai 'doctor.image.img'

            Tai amra conditional vabe nicchi,jate kono ek jayga theke pawa gelei hoy.  */}

        {
            doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} alt=''/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;