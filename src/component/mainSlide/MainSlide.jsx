import React from 'react'
import './MainSlide.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { developerModeFun } from '../../Redux/Slices/developerMode.slice';

export default function MainSlide() {

    const leftLinkFun = () => {
        const leftLink = document.getElementById('leftLink')
        const rightLink = document.getElementById('rightLink')
        const searchInputsLeft = document.getElementById('searchInputsLeft')
        const searchInputsRight = document.getElementById('searchInputsRight')
        leftLink.classList.add('activeLeft');
        rightLink.classList.remove('activeRight')
        searchInputsLeft.classList.remove('d-none')
        searchInputsRight.classList.add('d-none')
    }
    const rightLinkFun = () => {
        const leftLink = document.getElementById('leftLink')
        const rightLink = document.getElementById('rightLink')
        const searchInputsLeft = document.getElementById('searchInputsLeft')
        const searchInputsRight = document.getElementById('searchInputsRight')
        leftLink.classList.remove('activeLeft')
        rightLink.classList.add('activeRight')
        searchInputsLeft.classList.add('d-none')
        searchInputsRight.classList.remove('d-none')
    }
    const Dispatch = useDispatch();

    return (
        <>

            <div className="MainSlide">
                <div className='overLay'></div>
                <div className="container">
                    <div className="text">
                        <h1>Better Healthcare for a Better Life</h1>
                        <h2>Book online or call <span className=''><i className="fa-solid fa-phone phoneIcon" style={{ fontSize: "16.5px" }}></i> </span><span className='fw-bold'>19460</span></h2>
                    </div>

                    <div className="content">
                        <div className="searchBar overflow-hidden">
                            <div className="topText pt-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <Link className="left  d-flex align-items-center text-decoration-none activeLeft" id='leftLink' onClick={() => leftLinkFun()} to={'#'}>
                                            <div>
                                                <i className="fa-regular fa-calendar-check fs-2"></i>
                                            </div>
                                            <div className='ms-2 mt-3'>
                                                <div>
                                                    <p className='top text-decoration-none '>Book a doctor</p>
                                                </div>
                                                <div>
                                                    <p className='bottom'>Examination or procedure</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            <hr className='d-md-none'/>

                                    <div className="col-md-6 d-flex justify-content-center ">
                                        <Link className="right  d-flex align-items-center text-decoration-none " id='rightLink' onClick={() => rightLinkFun()} to={"#"}>
                                            <div>
                                                <i className="fa-solid fa-headset fs-3"></i>
                                            </div>
                                            <div className='ms-2 mt-3'>
                                                <div>
                                                    <p className='top'>Telehealth</p>
                                                </div>
                                                <div>
                                                    <p className='bottom'>Call consultation with doctor</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>



                            </div>
                            <hr />
                            <div className="searchInputs p-2 p-md-0">
                                <div className="left pb-3 " id='searchInputsLeft'>
                                    <div className="row justify-content-center mx-0">
                                        <div className="col-md-2 p-0 ">
                                            <div>
                                                <select className="form-select form-select-lg rounded-0 rounded-start-1  position-relative" aria-label="Default select example" defaultValue={'Choose specialty'}>
                                                    <option value='Choose specialty'>
                                                        Choose specialty
                                                    </option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                {/* <div className='position position-absolute d-none' style={subtitleFont}>
                                                    <p className=' m-0' > <i class="fa-solid fa-stethoscope" />Choose specialty</p>
                                                </div> */}
                                            </div>

                                        </div>
                                        <div className="col-md-2 p-0">
                                            <select className="form-select form-select-lg rounded-0 " aria-label="Default select example" defaultValue={'Choose city'}>
                                                <option value='Choose city'>Choose city</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <select className="form-select form-select-lg rounded-0 " aria-label="Default select example" defaultValue={'Choose area'}>
                                                <option value='Choose area'>Choose area</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 p-0">
                                            <input type="text" className='w-100 placeholders' placeholder='Doctor name' style={{ border: '1px solid #dee2e6', padding: '11px', color: '#0070cd' }} />
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <button className='btn text-white searchBtn btn-lg w-100' style={{ backgroundColor: 'red' }} onClick={() => Dispatch(developerModeFun())}>
                                                <span className='me-2'><i className="fa-solid fa-magnifying-glass fa-flip-horizontal" /></span>Search
                                            </button>
                                        </div>
                                    </div>


                                </div>
                                <div className="right pb-3 d-none" id='searchInputsRight'>
                                    <div className="row justify-content-center mx-0">
                                        <div className="col-md-3 p-0 ">
                                            <div>
                                                <select className="form-select form-select-lg rounded-0 rounded-start-1  position-relative" aria-label="Default select example text-white" defaultValue={'Choose specialty'}>
                                                    <option value='Choose specialty'>
                                                        Choose specialty
                                                    </option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                            </div>

                                        </div>

                                        <div className="col-md-2 p-0" >
                                            <button className='btn text-white btn-lg w-100 searchBtn text-white' style={{ backgroundColor: 'red' }} onClick={() => Dispatch(developerModeFun())}>
                                                <span className='me-2'><i className="fa-solid fa-magnifying-glass fa-flip-horizontal" /></span>Search
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}
