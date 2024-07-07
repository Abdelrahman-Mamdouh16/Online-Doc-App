import React from 'react'
import { Link } from 'react-router-dom'

export default function ReservationThankYou() {
  return (
    <>
      <div className='ReservationThankYou text-center my-5'>
        <div className="container w-100 h-100">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="img">
                <img src={require('../../../public/thankyou-banner.jfif')} className='rounded-3' alt="" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="ReservationThankYou-content mt-3">
                <div className="ReservationThankYou-title">
                  <h2 className='textMain'>Thank You!</h2>
                </div>
                <div className="ReservationThankYou-text">
                  <p className='textMain'>Your reservation has been confirmed. You will receive an email confirmation shortly.</p>
                  <Link to={'/'}>
                  <button className='btn text-white px-5' style={{backgroundColor: "#0070cd"}}> Back Home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
