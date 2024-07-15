import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import UserDetails from '../Account/UserDetails/UserDetails';
import { useNavigate } from 'react-router-dom';
export default function CreateReservationOnTelehealth() {
    const navigation = useNavigate();
    const { doctorData, doctorTimeStart, doctorTimeEnd, doctorDay } = useSelector((state) => state.ReservationDocData)

    // localStorage.setItem('firstLoadDone', '1');
    useEffect(() => {
        if (sessionStorage.getItem('firstLoadDone') === null||sessionStorage.getItem('firstLoadDone') === undefined) {
            sessionStorage.setItem('firstLoadDone', 1);
        } else {
            navigation(-1)
            sessionStorage.removeItem('firstLoadDone')
        }
    }, [navigation]);
    return (
        <>
            <div className="createReservation">
                <div className="container">
                    <div className="row mx-1 mx-md-0">
                        <div className="col-lg-6 mt-4">
                            <div className="content bg-white py-3 rounded-3 mt-0">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center">
                                        <div className="DocImg">
                                            <i className="fa-solid fa-user-doctor p-3  textMain_Blue" style={{ fontSize: '80px', border: '1px black solid', borderRadius: '50%' }}></i>
                                        </div>
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center ">
                                        <div className="docDesc text-center text-md-start px-3 px-md-0">
                                            <p className='m-0 eleDocName' style={{ fontSize: '14px', }}>Doctor
                                                <span className='anchor eleDocName' style={{ fontSize: "21px" }}>{doctorData?.name}
                                                </span>
                                            </p>
                                            <p className='m-0 fw-lighter styleDocDetails' style={{ fontSize: '.8rem' }}>{doctorData?.description}</p>
                                            <p className='m-0 fw-bold styleDocDetails fs-5'>Feaze : <span>{doctorData?.cost} </span>
                                                <i className="fa-solid fa-money-check-dollar"></i></p>
                                        </div>
                                    </div>
                                    <div className="col-12 bgColorLite p-4 textMain my-3 ">
                                        <p className='m-0 fs-5'>{doctorDay} - <span className='text-capitalize'>{doctorTimeStart}</span> <span className='text-capitalize'>{doctorTimeEnd}</span> <span className='fw-bold'> On Telehealth</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <UserDetails />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
