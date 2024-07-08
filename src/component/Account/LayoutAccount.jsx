import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import './LayoutAccount.css'

export default function LayoutAccount() {
    const location = useLocation()
    const pathName = location.pathname;
    // console.log(pathName);
    return (
        <>
            <div className='bgColorLite'>
                <div className="container bgColorLite">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="right">
                                <div className="LayoutAccount d-flex justify-content-center justify-content-md-center  bgColorLite">
                                    <div className="LayoutAccountForm bg-white w-100 overflow-hidden" style={{
                                        marginTop: '25px',
                                        border: '1px solid white',
                                        borderRadius: '10px'
                                    }}>
                                        <div className={` m-0 p-2 ps-3 overflow-hidden ${pathName === '/Account/userDetails' ? 'active' : ''}`}>
                                            <Link className={`text-decoration-none fs-5 ${pathName === '/Account/userDetails' ? 'text-white' : 'textMain'}`} to={'/Account/userDetails'} >
                                                <BiSolidMessageRoundedError className='me-2' />
                                                <span>profile</span>
                                            </Link>
                                        </div>
                                        <hr className='m-0' />
                                        <div className={` m-0 p-2 ps-3 overflow-hidden ${pathName === '/Account/newService' ? 'active' : ''}`}>
                                            <Link className={`text-decoration-none fs-5 ${pathName === '/Account/newService' ? 'text-white' : 'textMain'}`} to={'/Account/newService'}>
                                                <IoPeople className='me-2' />
                                                <span>Change Password</span>
                                            </Link>
                                        </div>
                                        <hr className='m-0' />
                                        <div className={` m-0 p-2 ps-3 overflow-hidden ${pathName === '/Account/myAppointment' ? 'active' : ''}`}>
                                            <Link className={`text-decoration-none fs-5 d-flex ${pathName === '/Account/myAppointment' ? 'text-white' : 'textMain'}`} to={'/Account/myAppointment'}>
                                                <FaRegCalendarAlt className='me-2 mt-1' />
                                                <span className='m-0'>My Appointment</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
