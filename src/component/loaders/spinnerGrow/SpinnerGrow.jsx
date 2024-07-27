import React from 'react'

export default function SpinnerGrow() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="spinner-grow text-primary d-flex justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
