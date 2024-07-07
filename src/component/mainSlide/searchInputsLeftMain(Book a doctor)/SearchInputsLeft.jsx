import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function SearchInputsLeft() {

    const navigate = useNavigate()
    async function searchLefHandling(value) {
        try {
            var path = `/doctors/DoctorsData/${value.ChooseSpecialty}/${value.ChooseCity}`;
            if (value.ChooseArea) {
                path += `/${value.ChooseArea}`;
            };
            if (value.DoctorName) {
                path += `/${value.DoctorName}`;
            }
            navigate(path)
        } catch (error) {
            console.log(error);
        }
    }

    const formikLef = useFormik({
        initialValues: {
            ChooseSpecialty: "all-specialties",
            ChooseCity: "Egypt",
            ChooseArea: "",
            DoctorName: ""
        },
        onSubmit: searchLefHandling
    })
    return (
        <form className="left pb-3 " id='searchInputsLeft' onSubmit={formikLef.handleSubmit}>
            <div className="row justify-content-center mx-0">
                <div className="col-md-2 p-0 ">
                    <div>
                        <select className="form-select form-select-lg rounded-0 rounded-start-1  position-relative textMain_Blue" aria-label="Default select example" name='ChooseSpecialty' onChange={formikLef.handleChange} onBlur={formikLef.handleBlur} style={{ textOverflow: 'ellipsis' }}>
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
                <div className="col-md-2 p-0">
                    <select className="form-select form-select-lg rounded-0 textMain_Blue" aria-label="Default select example" name='ChooseCity' onChange={formikLef.handleChange} onBlur={formikLef.handleBlur} style={{ textOverflow: 'ellipsis' }}>
                        <option hidden={true}>Choose city</option>
                        <option value="Egypt">All-Cities</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Giza">Giza</option>
                        <option value="Al-Sharqiya">Al-Sharqiya</option>
                        <option value="Alexandria">Alexandria</option>
                    </select>
                </div>
                <div className="col-md-2 p-0">
                    <select className="form-select form-select-lg rounded-0 textMain_Blue " aria-label="Default select example" name='ChooseArea' onChange={formikLef.handleChange} onBlur={formikLef.handleBlur} style={{ textOverflow: 'ellipsis' }}>
                        <option defaultValue={null} hidden={true}>Choose area</option>
                        <option value="All-Area">All Area</option>
                    </select>
                </div>
                <div className="col-md-3 p-0">
                    <input type="text" className='w-100 placeholders' name='DoctorName' onChange={formikLef.handleChange} onBlur={formikLef.handleBlur} placeholder='Doctor name' style={{ border: '1px solid #dee2e6', padding: '11px', color: '#0070cd', textOverflow: 'ellipsis' }} />
                </div>
                <div className="col-md-2 p-0">
                    <button className='btn text-white searchBtn btn-lg w-100' style={{ backgroundColor: 'red' }} type='submit'>
                        <span className='me-2'><i className="fa-solid fa-magnifying-glass fa-flip-horizontal" /></span>Search
                    </button>
                </div>
            </div>
        </form>
    )
}
