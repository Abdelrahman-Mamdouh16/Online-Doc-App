import React, {  } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLogin, setLoading, setUserId, setUserToken } from '../../Redux/Slices/userLoginData.slice'

export default function LogOut() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(setLoading(false))
        dispatch(setIsLogin(false))
        dispatch(setUserId(null))
        dispatch(setUserToken(null));
        navigate('/')
    }
    const Home = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="logOut bgColorLite d-flex justify-content-center align-items-center py-5">
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center text-center my-5 py-5">
                        <div className='col-md-6 p-5 rounded' style={{ backgroundColor: '#0070cd' }}>
                            <h1 className='text-capitalize text-white'>are you sure to sign out</h1>
                            <div className='d-flex justify-content-around'>
                                <button className='btn btn-danger' onClick={() => logOut()}>Yes</button>
                                <button className='btn btn-info' onClick={() => Home()}>No</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
