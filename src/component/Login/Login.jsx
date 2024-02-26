import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setLoading, setIsLogin, setUserToken, setUserId } from '../../Redux/Slices/userLoginData.slice'

export default function Login() {
    const dispatch = useDispatch()
    let [isError, setError] = useState('')
    let [isMessage, setIsMessage] = useState('')

    dispatch(setLoading(false));
    const navigate = useNavigate()
    const SubmitHandling = async (val) => {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.post('https://online-doctor-app.onrender.com/user/login', val)
            if (data.success === true) {
                localStorage.setItem('token', data.result.token)
                dispatch(setUserToken(data.result.token))
                const { id } = jwtDecode(localStorage.getItem('token'))
                dispatch(setUserId(id))
                dispatch(setIsLogin(true))
                setIsMessage('')
                setError('')
                toast.success(data.message)
                dispatch(setLoading(true)); 
                navigate('/')
                dispatch(setLoading(false));
            }
            else if (data.success !== true) {
                dispatch(setIsLogin(false));
                dispatch(setLoading(false));
                toast.error(data.message)
                setIsMessage(data.message)
                setError('')
            }
        } catch (error) {
            dispatch(setLoading(false));
            setError(error.message)
            setIsMessage('')
            console.log(error);
        }
    }
    let validationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Email Required'),
        password: yup.string().required('Password is required').matches(/^\b\d{6}\b$/, 'Password not match 6 number at least')
    })
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: SubmitHandling,
    })
    return (
        <>
            <div className="login bgColorLite d-flex justify-content-center align-items-center">
                <div className=" container-fluid container-md ">
                    <div className="loginForm bg-white">

                        <div className="TopText topTextBgColor">
                            <p className='text-center text-white p-0 m-0'>login Now</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="px-3 my-3">

                            {isMessage.length > 0 ? <p className="alert alert-danger" role="alert">{isMessage}</p> : ''}
                            {isError.length > 0 ? <p className="alert alert-danger" role="alert">{isError}</p> : ''}

                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingInput">Email address<span className="text-danger">*</span></label>
                                {formik.errors.email && formik.touched.email ? <p className='py-2 alert alert-danger'>{formik.errors.email}</p> : ''}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' autoComplete='password' className="form-control" id="floatingPassword" placeholder="Password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingPassword">Password<span className="text-danger">*</span></label>
                                {formik.errors.password && formik.touched.password ? <p className='py-2 alert alert-danger'>{formik.errors.password}</p> : ""}
                            </div>

                            <div className='mt-3 d-flex align-items-center'>
                                <button className='btn text-white py-1' type='submit' disabled={!(formik.isValid && formik.dirty)} style={{ "backgroundColor": "red" }}>Submit</button>
                                <Link className='anchor ms-3 text-capitalize' to={"/register"}>Not a user register here ?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
