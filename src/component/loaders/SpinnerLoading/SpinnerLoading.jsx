import React from 'react'

export default function SpinnerLoading() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center textMain_Blue"style={{height:'80vh',backgroundColor: 'transparent'}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </div>
        
    )
}
