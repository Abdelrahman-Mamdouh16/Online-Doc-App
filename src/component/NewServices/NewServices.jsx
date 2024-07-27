import React from 'react'
import './NewServices.css';
import TopSpecialties from './topSpecialties/TopSpecialties.jsx';
import TopOffers from './topOffers/TopOffers.jsx';
// import North from './north/North.jsx';
// import MedicalQuestion from './medicalQuestion/MedicalQuestion.jsx';
import Pharmacy from './Pharmacy/Pharmacy.jsx';
import LastCard from './lastCard/LastCard.jsx';
import Laboratory from './laboratory/Laboratory .jsx';
export default function NewServices() {
    
    return (
        <div className='NewServices py-5 overflow-hidden bgColorLite'>
            <div className="container">
                <h1 className='fw-bold' style={{ color: '#666666', fontSize: '32px', marginTop: '0px', lineHeight: '28px', }}>
                    New services for better healthcare
                </h1>
                {/* north Section */}
                {/* <North /> */}
                {/* medicalQuestion Section */}
                <Laboratory/>
                {/* Pharmacy Section */}
                <Pharmacy />
                {/* lastCard Section */}
                <LastCard />
            </div>
            {/* topOffers Section */}
            <TopOffers />
            {/* topSpecialties Section */}
            <TopSpecialties />
        </div>
    )
}
