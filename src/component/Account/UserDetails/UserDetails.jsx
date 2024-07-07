import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import './UserDetails.css'
import { toast } from 'react-hot-toast';
import Loading from './../../loaders/SpinnerLoading/SpinnerLoading.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLoading } from '../../../Redux/Slices/userLoginData.slice.js';

export default function UserDetails() {
    const [patientData, setPatientData] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const { userToken, userId } = useSelector((state) => state.userLoginData);
    const { doctorData, doctorTimeStart, doctorTimeEnd, doctorDay } = useSelector((state) => state.ReservationDocData);

    // console.log(userToken, userId);
    let headers = { authorization: "Bearer " + userToken };
    const dispatch = useDispatch()

    // dispatch(setLoading(true));
    const getUserData = async () => {
        try {
            const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/user/userDetails/${userId}`,
                {}, { headers })
            // console.log(data);
            if (data.success === true) {
                dispatch(setLoading(false));
                setPatientData(data.result);
            }
            if (data.success === false) {
                // dispatch(setLoading(true));
                toast.error(data.message.split(" ").slice(0, 2).join(" "));
            }
        } catch (error) {
            // dispatch(setLoading(true));
            console.log(error.message);
            toast.error(error.message.split(" ").slice(0, 2).join(" "));
        }
    }

    useEffect(() => {
        if (userToken && userId) {
            getUserData();
        }
        // eslint-disable-next-line
    }, [userToken, userId]);

    const today = new Date();
    const currentYear = today.getFullYear();
    // console.log(currentYear);

    const value = {
        doctorId: doctorData._id,
        userId: userId,
        timeStart: doctorTimeStart,
        timeEnd: doctorTimeEnd,
        date: doctorDay.replace(/^\w+\s+/g, `${currentYear}/`),
        status: 'pending',
    }
    // console.log(value);
    const checkReservation = async () => {
        try {
            const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/Reservation/checkReservation`, value)
            console.log(data);
            if (data.success === true) {
                toast.error(`${data.message} you must remove it or choose another one`);
            };
            if (data.success === false) {
                // toast.success(data.message);
                const createReservation = async () => {
                    try {
                        const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/Reservation/create`, value)
                        console.log(data);
                        if (data.success === true) {
                            toast.success(data.message);
                            navigate("/Reservation/Thank-You");
                        };
                        if (data.success === false)
                            toast.error(data.message);
                    } catch (error) {
                        console.log(error.message);
                        toast.error(error.message.split(" ").slice(0, 2).join(" "));
                    }
                }
                createReservation()
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message.split(" ").slice(0, 2).join(" "));
        }
    }

    const CancelFun = () => {
        navigate(-1)
    }
    return (
        <>
            {!patientData ? <Loading /> : <>
                <div className="UserDetails d-flex bgColorLite" >

                    <div className="UserDetailsForm bg-white w-100">
                        <div className="TopText topTextBgColor py-2">
                            <p className='text-center p-0 m-0 text-white'>{pathName === '/Reservation/create' ? 'Enter Your Information' : 'Manage Profile'}</p>
                        </div>

                        <div className="px-3 my-3">
                            <div className="form-floating mb-3">
                                <input type="text" name='name' className="form-control ps-2" id="floatingInputName" placeholder="UserName" autoComplete='userName' value={patientData?.name} onChange={() => patientData?.name} />
                                <label htmlFor="floatingInputName" className='ps-2'>UserName<span className="text-danger">*</span></label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control ps-2" id="floatingInputEmail" placeholder="name@example.com" value={patientData.email} onChange={() => patientData.email} />
                                <label htmlFor="floatingInputEmail  " className='ps-2'>Email address<span className="text-danger">*</span></label>

                            </div>
                            <div className={`form-floating mb-3 ${pathName === '/Reservation/create' ? 'd-none' : 'd-block'}`}>
                                <input type="date" name="date" className="form-control" id="floatingInputDate" placeholder="01-01-2024" value={patientData.date} onChange={() => patientData.date} />
                                <label htmlFor="floatingInputDate" className='ps-2'>Date Of Birth<span className="text-danger">*</span></label>

                            </div>
                            <div className={`w-100 mb-3 ${pathName === '/Reservation/create' ? 'd-none' : 'd-block'}`}>
                                <div className="row justify-content-center">
                                    <div className="col-md-6 form-floating">
                                        <input type="number" name="hight" maxLength={3} className="form-control " id="floatingInputHight" placeholder="20" value={patientData.hight} onChange={() => patientData.hight} />
                                        <label htmlFor="floatingInputHight" className='ms-2'>Your Hight<span className="text-danger">*</span></label>

                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="number" name="weight" maxLength={3} className="form-control " id="floatingInputWeight" placeholder="20" value={patientData.weight} onChange={() => patientData.weight} />
                                        <label htmlFor="floatingInputWeight" className='ms-2'>Your Weight<span className="text-danger">*</span></label>

                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="phone" name="phone" className="form-control" id="floatingInputPhone" placeholder="012345678" value={patientData.phone} onChange={() => patientData.phone} />
                                <label htmlFor="floatingInputPhone">Mobile Number<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        {pathName === '/Reservation/create' ? <div className='ps-3 my-3'>
                            <button className='btn btn-danger me-3' style={{ paddingLeft: '80px', paddingRight: '80px' }} onClick={() => checkReservation()}>Book</button>
                            <button className='btn btn-outline-primary px-4' onClick={() => CancelFun()}>Cancel</button>
                        </div> : ''}

                    </div>

                </div>
            </>}
        </>
    )
}
