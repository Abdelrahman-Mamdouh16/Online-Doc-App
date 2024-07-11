import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import * as yup from "yup";

export default function ChangePassword() {

    let [isError, setError] = useState('');
    let [isMessage, setIsMessage] = useState('');
    // const navigate = useNavigate();
    const { userId } = useSelector((state) => state.userLoginData)


    const SubmitHandling = async (values) => {
        console.log(values);
        try {
            const { data } = await axios.patch(`https://online-doctor-app.onrender.com/user/userAccount/UpdatePass/${userId}`, values);
            console.log(data);
            if (data.success === true) {
                toast.success('Registration Successfully')
                setIsMessage(data.message)
                setError('')
            }
            else if (data.success === false) {
                toast.error(data.message)
                setIsMessage(data.message)
                setIsMessage('')
                setError(data.message)
            }
        } catch (error) {
            setError(error.message);
            setIsMessage('')
            console.log(error.message);
            toast.error(error.message);
        }
    }
    let validationSchema = yup.object({
        newPassword: yup.string().required('Password is required').matches(/^\b\d{6}\b$/, 'Password not match 6 number at least'),
    })

    let formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
        },
        validationSchema,
        onSubmit: SubmitHandling,
    })
    return (
        <>
            <div className="ChangePassword d-flex bgColorLite my-4 " >
                {/* <div className="container"> */}
                    <div className="ChangePasswordForm bg-white rounded-3 w-100">
                        <div className="TopText topTextBgColor py-2">
                            <p className='text-center p-0 m-0 text-white'>Change Your Password</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="p-3">
                            {isMessage.length > 0 ? <p className="alert alert-info" role="alert">{isMessage}</p> : ''}
                            {isError.length > 0 ? <p className="alert alert-danger" role="alert">{isError}</p> : ''}

                            <div className="form-floating mb-3">
                                <input type="password" name='oldPassword' className="form-control" id="floatingOld_Password" placeholder="old_password" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingOld_Password">old_password<span className="text-danger">*</span></label>
                                {/* {formik.errors.old_password && formik.touched.old_password ? <p className='py-2 alert alert-danger'>{formik.errors.old_password}</p> : ""} */}
                            </div>
                            <div className="form-floating">
                                <input type="password" name='newPassword' className="form-control" id="floatingNew_Password" placeholder="newPassword" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="floatingNew_Password">new_password<span className="text-danger">*</span></label>
                                {formik.errors.newPassword && formik.touched.newPassword ? <p className='py-2 alert alert-danger'>{formik.errors.newPassword}</p> : ""}
                            </div>

                            <div className='mt-3 d-flex align-items-center'>
                                <button className='btn text-white' type='submit' disabled={!(formik.isValid && formik.dirty)} style={{ "backgroundColor": "red" }}>Submit</button>
                                <button className='btn btn-primary ms-3'>
                                    <Link className='text-decoration-none text-white' to={"/"}>Cancel</Link>
                                </button>

                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
