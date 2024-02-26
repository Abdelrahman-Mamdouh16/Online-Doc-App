import React from 'react'
import { useSelector } from 'react-redux'
import './Loader.css'
export default function MainLoader({ children }) {
    const { loading } = useSelector((state) => state.userLoginData)
    if (loading) {
        return <>
            <div class="d-flex justify-content-center  align-items-center spinner">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    } else {
        return children
    }
}
