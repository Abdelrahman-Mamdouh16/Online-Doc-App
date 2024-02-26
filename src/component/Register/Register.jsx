import React, { useState } from 'react'
import './Register.css'
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../Redux/Slices/userLoginData.slice';
export default function Register() {
    let [isError, setError] = useState('')
    let [isMessage, setIsMessage] = useState('')
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const SubmitHandling = async (values) => {
        console.log(values);
        try {
            dispatch(setLoading(true));
            const { data } = await axios.post('https://online-doctor-app.onrender.com/user/register', values);
            if (data.success === true) {
                dispatch(setLoading(true));
                toast.success('Registration Successfully')
                setIsMessage('')
                setError('')
                navigate('/login')
                dispatch(setLoading(false));
            }
            else if (data.success !== true) {
                toast.error(data.message)
                setIsMessage(data.message)
                dispatch(setLoading(false));
                setIsMessage('')
                setError('')
            }
        } catch (error) {
            setError(error.message);
            setIsMessage('')
            console.log(error.message);
            toast.error(error.message);
        }
    }
    let validationSchema = yup.object({
        name: yup.string().max(15, 'Must be 15 characters or less').required('UserName is Required'),
        email: yup.string().email('Invalid email address').required('Email Required'),
        phone: yup.string().required('Phone is required').matches(/^(002)?(01[0-25][0-9]{8})$/, 'Phone not match'),
        password: yup.string().required('Password is required').matches(/^\b\d{6}\b$/, 'Password not match 6 number at least'),
        date: yup.string().required('Date Of Birth is required'),
        hight: yup.number().required('Hight is required'),
        weight: yup.number().required('weight is required'),
    })
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            date: '',
            hight: '',
            weight: ''
        },
        validationSchema,
        onSubmit: SubmitHandling,
    })

    return (
        <>
            <div className="register d-flex bgColorLite" >
                <div className="container-fluid container-md">
                    <div className="registrationForm bg-white">
                        <div className="TopText topTextBgColor">
                            <p className='text-center p-0 m-0 text-white'>Register Now</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="px-3 my-3">
                            {isMessage.length > 0 ? <p className="alert alert-danger" role="alert">{isMessage}</p> : ''}
                            {isError.length > 0 ? <p className="alert alert-danger" role="alert">{isError}</p> : ''}
                            <div className="form-floating mb-3">
                                <input type="text" name='name' className="form-control" id="floatingInputName" placeholder="UserName" autoComplete='userName' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingInputName">UserName<span className="text-danger">*</span></label>
                                {formik.errors.name && formik.touched.name ? <p className='py-2 alert alert-danger'>{formik.errors.name}</p> : ''}
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingInputEmail">Email address<span className="text-danger">*</span></label>
                                {formik.errors.email && formik.touched.email ? <p className='py-2 alert alert-danger'>{formik.errors.email}</p> : ''}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" name="date" className="form-control" id="floatingInputDate" placeholder="01-01-2024" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingInputDate">Date Of Birth<span className="text-danger">*</span></label>
                                {formik.errors.date && formik.touched.date ? <p className='py-2 alert alert-danger'>{formik.errors.date}</p> : ''}
                            </div>
                            <div className="w-100 mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 form-floating">
                                        <input type="number" name="hight" maxLength={3} className="form-control " id="floatingInputHight" placeholder="20" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <label htmlFor="floatingInputHight">Your Hight<span className="text-danger">*</span></label>
                                        {formik.errors.hight && formik.touched.hight ? <p className='py-2 alert alert-danger m-0'>{formik.errors.hight}</p> : ''}
                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="number" name="weight" maxLength={3} className="form-control " id="floatingInputWeight" placeholder="20" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <label htmlFor="floatingInputWeight">Your Weight<span className="text-danger">*</span></label>
                                        {formik.errors.weight && formik.touched.weight ? <p className='py-2 alert alert-danger m-0'>
                                            {formik.errors.weight}</p> : ''}
                                    </div>
                                </div>


                            </div>

                            <div className="form-floating mb-3">
                                <input type="phone" name="phone" className="form-control" id="floatingInputPhone" placeholder="012345678" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingInputPhone">Mobile Number<span className="text-danger">*</span></label>
                                {formik.errors.phone && formik.touched.phone ? <p className='py-2 alert alert-danger'>{formik.errors.phone}</p> : ''}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingPassword">Password<span className="text-danger">*</span></label>
                                {formik.errors.password && formik.touched.password ? <p className='py-2 alert alert-danger'>{formik.errors.password}</p> : ""}
                            </div>

                            <div className='mt-3 d-flex align-items-center'>
                                <button className='btn text-white py-1' type='submit' disabled={!(formik.isValid && formik.dirty)} style={{ "backgroundColor": "red" }}>Submit</button>
                                <Link className='anchor ms-3' to={"/login"}>You Are Already Have Account ?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
