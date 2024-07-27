import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loading from './../../loaders/SpinnerLoading/SpinnerLoading.jsx';
import { toast } from 'react-hot-toast';


export default function MyAppointment() {
    const { userId } = useSelector((state) => state.userLoginData);
    const [reservationData, setReservationData] = useState([])
    const [reservationMessage, setReservationMessage] = useState([])
    const getAllReservation = async () => {
        try {
            const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/Reservation/getAllReservation/${userId}`)
            console.log(data);
            if (data.success === true) {
                setReservationData(data.result)
            }
            if (data.success === false) {
                setReservationMessage(data.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteReservation = async (id) => {
        try {
            const { data } = await axios.delete(`https://node-js-server-onlinedoctor.vercel.app/Reservation/deleteReservation/${id}`)
            console.log(data);
            if (data.success === true) {
                toast.success(data.message)
                getAllReservation();
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getAllReservation();
        // eslint-disable-next-line
    }, [userId]);
    console.log(reservationData);
    return (
        <>
            {
                reservationMessage === "Not found Reservation" ? <h5 className='mt-4 bg-white py-3 text-center rounded-3 textMain'>You don't have any Appointment</h5> :
                    !reservationData.length ? <Loading margin={'my-5'}/>:
                        <div className="MyAppointment d-flex bgColorLite my-4" >
                            <div className="MyAppointmentForm bg-white rounded-3 w-100">
                                <div className="TopText topTextBgColor py-2">
                                    <p className='text-center p-0 m-0 text-white'>My Appointment</p>
                                </div>
                                <div className="table-responsive d-none d-md-block">
                                    <table className="table align-middle  text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='w-20'>Doctor Name</th>
                                                <th scope="col" className='w-20'>Where</th>
                                                <th scope="col" className='w-20'>Reservation Date</th>
                                                <th scope="col" className='w-20 '>Status</th>
                                                <th scope="col" className='w-20'>Cancel</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reservationData?.map((ele, index) => {
                                                return <tr key={index} className={ele.reservation.status === `deleted` ? `table-danger` : ''}>
                                                    <td className='align-middle'>{ele?.doctorData?.name}</td>
                                                    <td className='d-none d-md-table-cell'>{ele.reservation.where ? ele.reservation.where : `${ele?.doctorData?.area} , ${ele?.doctorData?.city}`}
                                                    </td>
                                                    <td className='col-sm-2 d-none d-md-table-cell'>
                                                        <div className='d-flex flex-column  align-items-center'>
                                                            <span>{ele?.reservation?.date}</span>
                                                            <span>{ele?.reservation?.timeStart} {', '}  {ele?.reservation?.timeEnd}</span>
                                                        </div>
                                                    </td>
                                                    <td className='col-sm-2'>{ele?.reservation?.status}</td>
                                                    <td className='col-sm-2'>
                                                        {ele.reservation.status === 'deleted' ? "" :
                                                            <button className='btn btn-danger w-75' onClick={() => deleteReservation(ele?.reservation?._id)}>delete</button>
                                                        }
                                                    </td>
                                                </tr>
                                            })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className='d-md-none d-block '>
                                    {reservationData?.map((ele, index) => {
                                        return <div key={index} className={ele.reservation.status === `deleted` ? `bg-danger-subtle px-3` : 'px-3'}>
                                            <h5 className='m-0 text-center mt-3'>#{index + 1}</h5>
                                            <div className=' p-2'>
                                                <h6 className='m-0 me-2'>Doctor Name : </h6>
                                                <p className='m-0  mt-2'>{ele?.doctorData?.name}</p>
                                            </div>
                                            <div className=' p-2'>
                                                <h6 className='m-0 me-2'>Where : </h6>
                                                <p className='m-0  mt-2'>{ele.reservation.where ? ele.reservation.where : `${ele?.doctorData?.area} , ${ele?.doctorData?.city}`}</p>
                                            </div>
                                            <div className=' p-2'>
                                                <h6 className='m-0 me-2'>Reservation Date : </h6>
                                                <p className='m-0 mt-2 '>{ele?.reservation?.date}{' , '} {ele?.reservation?.timeStart} {' , '}  {ele?.reservation?.timeEnd}</p>
                                            </div>
                                            <div className='d-flex align-items-center p-2'>
                                                <h6 className='m-0 me-2'>Status : </h6>
                                                <p className='m-0 text-capitalize'>{ele?.reservation?.status}</p>
                                            </div>
                                            {ele.reservation.status === 'deleted' ? "" :
                                                <div className='d-flex align-items-center p-2'>
                                                    <h6 className='m-0 me-2'>Cancel : </h6>

                                                    <button className='btn btn-danger ' onClick={() => deleteReservation(ele?.reservation?._id)}>delete</button>

                                                </div>
                                            }
                                            <hr />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
            }

        </>
    )
}
