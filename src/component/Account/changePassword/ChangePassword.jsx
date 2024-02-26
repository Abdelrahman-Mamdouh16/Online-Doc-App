import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup";

export default function ChangePassword() {

    let [isError, setError] = useState('');
    let [isMessage, setIsMessage] = useState('');
    const navigate = useNavigate();
    const SubmitHandling = async (values) => {
        console.log(values);
        try {
            const { data } = await axios.post('https://online-doctor-app.onrender.com/user/register', values);
            if (data.success === true) {
                toast.success('Registration Successfully')
                setIsMessage('')
                setError('')
                navigate('/login')
            }
            else if (data.success !== true) {
                toast.error(data.message)
                setIsMessage(data.message)
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
        old_password: yup.string().required('Password is required').matches(/^\b\d{6}\b$/, 'Password not match 6 number at least'),
        new_password: yup.string().required('Password is required').matches(/^\b\d{6}\b$/, 'Password not match 6 number at least'),
    })

    let formik = useFormik({
        initialValues: {
            old_password: '',
            new_password: '',
        },
        validationSchema,
        onSubmit: SubmitHandling,
    })
    return (
        <>
            <div className="ChangePassword d-flex bgColorLite "style={{marginTop:'25px'}} >
                <div className="container-fluid">
                    <div className="ChangePasswordForm bg-white rounded-3 ">
                        <div className="TopText topTextBgColor py-2">
                            <p className='text-center p-0 m-0 text-white'>Register Now</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="p-3">
                            {isMessage.length > 0 ? <p className="alert alert-danger" role="alert">{isMessage}</p> : ''}
                            {isError.length > 0 ? <p className="alert alert-danger" role="alert">{isError}</p> : ''}

                            <div className="form-floating mb-3">
                                <input type="password" name='old_password' className="form-control" id="floatingOld_Password" placeholder="old_password" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingOld_Password">old_password<span className="text-danger">*</span></label>
                                {formik.errors.old_password && formik.touched.old_password ? <p className='py-2 alert alert-danger'>{formik.errors.old_password}</p> : ""}
                            </div>
                            <div className="form-floating">
                                <input type="password" name='new_password' className="form-control" id="floatingNew_Password" placeholder="new_password" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingNew_Password">new_password<span className="text-danger">*</span></label>
                                {formik.errors.new_password && formik.touched.new_password ? <p className='py-2 alert alert-danger'>{formik.errors.new_password}</p> : ""}
                            </div>

                            <div className='mt-3 d-flex align-items-center'>
                                <button className='btn text-white' type='submit' disabled={!(formik.isValid && formik.dirty)} style={{ "backgroundColor": "red" }}>Submit</button>
                                <button className='btn btn-primary ms-3'>
                                    <Link className='text-decoration-none text-white' to={"/"}>Cancel</Link>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
