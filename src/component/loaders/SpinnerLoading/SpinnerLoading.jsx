import React from 'react'

export default function SpinnerLoading({color}) {
    return (
        <div className="container h-100">
            <div className={`d-flex justify-content-center align-items-center textMain_Blue w-100 h-100`}style={{backgroundColor: 'transparent',marginTop:'25px'}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </div>
        
    )
}
