import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.webp'
import './Footer.css'
import googlePlay from '../../public/google-play.webp'
import appStore from '../../public/app-store.webp'
export default function Footer() {
  return (
    <>
      <div className="footer py-4 topTextBgColor">
        <div className="container ps-5 ps-md-0">
          <div className="row justify-content-center align-content-center">
            <div className="col-lg-2 col-md-3 col-6 ">
              <div className="firstColumn">
                <Link className="text-decoration-none text-white logo" to={''}>
                  <p className='my-2 d-flex justify-content-start align-items-center'>
                    <img src={logo} alt='' className='pe-1' width={'30px'} />
                    OnlineDoc</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    About Us</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Our Team</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Careers</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Press</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="secColumn">
                <Link className="text-decoration-none text-white logo fw-bold" to={''}>
                  <p className='my-2 d-flex justify-content-start'>
                    Search By</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Specialty</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Area</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Insurance</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Hospital</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    Center</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="thirdColumn">
                <Link className="text-decoration-none text-white logo fw-bold" to={''}>
                  <p className='my-2 d-flex justify-content-start'>
                    Are You A Doctor ?</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                    login As Doctor</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="forthColumn">
                <Link className="text-decoration-none text-white logo fw-bold" to={''}>
                  <p className='my-2 d-flex justify-content-start'>
                  Need Help?</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                  Medical Library</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                  Contact Us</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                  Terms Of Use</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                  Privacy Policy</p>
                </Link>
                <Link className="text-white anchor" to={''}>
                  <p className='my-1 d-flex justify-content-start'>
                  Doctors Policies</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12 d-none d-lg-block">
              <div className="fifthColumn">
                <Link className="text-decoration-none text-white logo fw-bold" to={''}>
                  <p className='my-2 d-flex justify-content-start'>
                    Social Media</p>
                </Link>
                <Link className="d-flex justify-content-start" to={''}>
                  <img src={googlePlay} className='my-1 ' width={'80px'} alt="" />
                </Link>
                <Link className="d-flex justify-content-start" to={''}>
                  <img src={appStore} className='my-2' width={'80px'} alt="" />
                </Link>
                <Link className="text-white anchor d-flex justify-content-start" to={''}>
                  <div>
                    <i className="fa-brands fa-facebook-f text-center"></i>
                    <i className="fa-brands fa-instagram mx-3"></i>
                    <i className="fa-brands fa-twitter"></i>
                  </div>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
