import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './../../loaders/SpinnerLoading/SpinnerLoading.jsx';
import toast from 'react-hot-toast';

export default function GetAppointment() {
  const { id } = useParams();
  const [reservationData, setReservationData] = useState()
  const GetAppointment = async () => {
    try {
      const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/Reservation/getAppointment/${id}`)
      console.log(data);
      if (data.success === true) {
        setReservationData(data.result)
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
        GetAppointment();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetAppointment();
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      {!reservationData ? <Loading /> :
        <div className="GetAppointment d-flex bgColorLite my-4" >
          <div className="GetAppointmentForm bg-white rounded-3 w-100">
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
                  <tr className={reservationData.reservation.status == `deleted` ? `table-danger` : ''}>
                    <td className='align-middle'>{reservationData?.doctorData?.name}</td>
                    <td className='d-none d-md-table-cell'>{reservationData?.doctorData?.area} , {reservationData?.doctorData?.city}  </td>
                    <td className='col-sm-2 d-none d-md-table-cell'>
                      <div className='d-flex flex-column  align-items-center'>
                        <span>{reservationData?.reservation?.date}</span>
                        <span>{reservationData?.reservation?.timeStart} {', '}  {reservationData?.reservation?.timeEnd}</span>
                      </div>
                    </td>
                    <td className='col-sm-2'>{reservationData?.reservation?.status}</td>
                    <td className='col-sm-2'>
                      {reservationData.reservation.status == 'deleted' ? "" :
                        <button className='btn btn-danger w-75' onClick={() => deleteReservation(reservationData?.reservation?._id)}>delete</button>
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-md-none d-block '>
              
                <div  className={reservationData.reservation.status == `deleted` ? `bg-danger-subtle px-3` : 'px-3'}>
                  {/* <h5 className='m-0 text-center mt-3'>#{index + 1}</h5> */}
                  <div className='d-flex align-items-center p-2'>
                    <h6 className='m-0 me-2'>Doctor Name : </h6>
                    <p className='m-0'>{reservationData?.doctorData?.name}</p>
                  </div>
                  <div className='d-flex align-items-center p-2'>
                    <h6 className='m-0 me-2'>Where : </h6>
                    <p className='m-0'>{reservationData?.doctorData?.area} , {reservationData?.doctorData?.city}</p>
                  </div>
                  <div className='d-flex align-items-center p-2'>
                    <h6 className='m-0 me-2'>Reservation Date : </h6>
                    <p className='m-0'>{reservationData?.reservation?.date}{' , '} {reservationData?.reservation?.timeStart} {' , '}  {reservationData?.reservation?.timeEnd}</p>
                  </div>
                  <div className='d-flex align-items-center p-2'>
                    <h6 className='m-0 me-2'>Status : </h6>
                    <p className='m-0'>{reservationData?.reservation?.status}</p>
                  </div>
                  {reservationData.reservation.status == 'deleted' ? "" :
                    <div className='d-flex align-items-center p-2'>
                      <h6 className='m-0 me-2'>Cancel : </h6>

                      <button className='btn btn-danger' onClick={() => deleteReservation(reservationData?.reservation?._id)}>delete</button>

                    </div>
                  }
                  <hr />
                </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
