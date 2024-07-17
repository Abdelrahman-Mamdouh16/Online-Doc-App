import axios from 'axios';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { Link, json, useNavigate } from 'react-router-dom'

export default function ReservationThankYou() {
  const navigate = useNavigate();

  const valueOnTelehealth = JSON.parse(localStorage.getItem('valueOnTelehealth'))
  console.log(valueOnTelehealth);
  const createReservation = async () => {
    try {
      const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/Reservation/createReservationOnTelehealth`, valueOnTelehealth)
      console.log(data);
      if (data.success === true) {
        toast.success(data.message);
        navigate("/");
      };
      if (data.success === false) {
        toast.error(data.message);
        navigate("/doctors/DoctorsDataOnTelehealth/all-specialties/Egypt");

      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message.split(" ").slice(0, 2).join(" "));
    }
  }
  useEffect(() => {
    if (localStorage.getItem('valueOnTelehealth')) {
      createReservation()
    }
  }, [])
  return (
    <>
      <div className='ReservationThankYou text-center my-5'>
        <div className="container w-100 h-100">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="img">
                <img src={require('../../public/thankyou-banner.jfif')} className='rounded-3 w-100' alt="" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="ReservationThankYou-content mt-3">
                <div className="ReservationThankYou-title">
                  <h2 className='textMain'>Thank You!</h2>
                </div>
                <div className="ReservationThankYou-text">
                  <p className='textMain'>Your reservation has been confirmed. You will receive an email confirmation shortly.</p>
                  {!localStorage.getItem('valueOnTelehealth') ?
                    <Link to={'/'}>
                      <button className='btn text-white px-5' style={{ backgroundColor: "#0070cd" }}> Back Home</button>
                    </Link>:<h3 className='textMain'>Don't Touch any thing we will navigate You to Home</h3>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
