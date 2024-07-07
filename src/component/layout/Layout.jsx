import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Offline } from "react-detect-offline";
import './layout.css'

export default function Layout() {
    const location = useLocation()
    const pathName = location.pathname;


    useEffect(() => {
        if (pathName !== '/Reservation/create') {
            localStorage.removeItem('firstLoadDone')
        }
        
    }, [pathName])
    return (
        <>
            <div className='app bgColorLite'>
                <Navbar />
                <ScrollRestoration/> 
                <Outlet />
                <div className='container w-50 position-fixed fixed-bottom ' style={{ bottom: '10%', zIndex: '1100' }}>
                    <Offline>
                        <div className="text-center bg-light shadow p-3 rounded">
                            <i className="fa fa-wifi text-danger text-decoration-line-through me-3"></i>
                            <span className="textMain fw-semibold   fs-5">
                                You are offline now, Check your internet <span className='text-decoration-line-through text-danger'>connection </span>
                            </span>
                        </div>
                    </Offline>
                </div>
                <Footer />
            </div>
        </>
    )
}
