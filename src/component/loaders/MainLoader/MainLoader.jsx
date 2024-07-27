import React from 'react'
import { useSelector } from 'react-redux'
import './Loader.css'
export default function MainLoader({ children }) {
    const { loading } = useSelector((state) => state.userLoginData)
    if (loading) {
        return <>
            <div className="d-flex justify-content-center  align-items-center spinner">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    } else {
        return children
    }
}
