import { useFormik } from 'formik';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function SearchInputsRight() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    function searchRightHandling (value) {
        try {
            var path = `/doctors/DoctorsDataOnTelehealth/${value.ChooseSpecialty}/${value.ChooseCity}`;
            navigate(path)
        } catch (error) {
            console.log(error);
        }
    }
    const formikRight = useFormik({
        initialValues: {
            ChooseSpecialty: "all-specialties",
            ChooseCity: "Egypt",
        },
        onSubmit: searchRightHandling
    })

    return (
        <form className={`right pb-3 ${pathname === `/` ? 'd-none' : 'd-block'} `} id='searchInputsRight' onSubmit={formikRight.handleSubmit} >
            <div className="row justify-content-center mx-0">
                <div className="col-md-3 p-0 ">
                    <div>
                        <select className="form-select form-select-lg rounded-0 rounded-start-1  position-relative textMain_Blue" aria-label="Default select example text-white" name='ChooseSpecialty' defaultValue={formikRight.values.ChooseSpecialty} onChange={formikRight.handleChange} onBlur={formikRight.handleBlur} style={{ textOverflow: 'ellipsis' }}>
                            <option defaultValue={null} hidden={true} >
                                Choose specialty
                            </option>
                            <option value="all-specialties">All-Specialty</option>
                            <option value="Heart">Cardiology and Vascular Disease
                                (Heart)</option>
                            <option value="Skin">Dermatology (Skin)
                            </option>
                            <option value="Teeth">Dentistry (Teeth)</option>
                            <option value="Child">Pediatrics and New Born (Child)</option>
                            <option value="Brain">Neurology (Brain & Nerves)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2 p-0" >
                    <button className='btn text-white btn-lg w-100 searchBtn text-white' type='submit' style={{ backgroundColor: 'red' }}>
                        <span className='me-2'><i className="fa-solid fa-magnifying-glass fa-flip-horizontal" /></span>Search
                    </button>
                </div>
            </div>
        </form >
    )
}
