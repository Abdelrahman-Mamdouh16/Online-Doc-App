import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { developerModeFun } from '../../Redux/Slices/developerMode.slice';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    const { isLogin } = useSelector((state) => state.userLoginData);
    const dispatch = useDispatch();
    const location = useLocation();
    const pathName = location.pathname;

    const handleSelect = () => {
        // البحث عن عنصر navbar-collapse وغلقه
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg topTextBgColor">
                <div className="container">
                    <Link className="navbar-brand text-white" to={'/'}>
                        <p className='m-0 d-flex justify-content-center align-items-center'>
                            <img src={require('./../../public/logo.webp')} alt='' className='pe-1' width={'30px'} />
                            OnlineDoc
                        </p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex flex-column-reverse flex-lg-row" onClick={handleSelect}>
                            {!isLogin ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/register">Register</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    {!pathName.includes('/Account') && (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white py-0 text-capitalize" to="" onClick={() => dispatch(developerModeFun())}>
                                                    Login as Doctors
                                                </Link>
                                            </li>
                                            <span className='text-white d-none d-lg-block'>|</span>
                                            <span className='text-white d-block d-lg-none mb-2'>____________</span>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white py-0" to="/contactUs">
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <span className='text-white d-none d-lg-block'>|</span>
                                            <span className='text-white d-block d-lg-none mb-2'>____________</span>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white py-0 d-flex align-items-center" to="/Account/myAppointment">
                                                    <FaRegCalendarAlt /> <p className='d-inline m-0 ms-1 p-0'>My Appointment</p>
                                                </Link>
                                            </li>
                                            <span className='text-white d-none d-lg-block'>|</span>
                                            <span className='text-white d-block d-lg-none mb-2'>____________</span>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white py-0 fs-4" to="/Account/userDetails">
                                                    <i className="fa-regular fa-circle-user"></i>
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </>
                            )}
                        </ul>
                        {pathName.includes('/Account') && (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex">
                                <li className="nav-item">
                                    <Link className="nav-link text-white p-0" to="/logout" onClick={handleSelect}>
                                        <button className='btn btn-danger' style={{ fontSize: '15px', padding: "2.5px" }}>Logout</button>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
