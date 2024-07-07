import React from 'react'
import { Link } from 'react-router-dom';
import SearchInputsRight from './searchInputsRightMain(Telehealth)/SearchInputsRight.jsx';
import SearchInputsLeft from './searchInputsLeftMain(Book a doctor)/SearchInputsLeft.jsx';
import './MainSlide.css';

export default function MainSlide() {

    function leftLinkFun() {
        document.getElementById('leftLink').classList.add('activeLeft');
        document.getElementById('rightLink').classList.remove('activeRight')
        document.getElementById('searchInputsLeft').classList.remove('d-none')
        document.getElementById('searchInputsRight').classList.add('d-none')
    }
    function rightLinkFun() {
        document.getElementById('leftLink').classList.remove('activeLeft')
        document.getElementById('rightLink').classList.add('activeRight')
        document.getElementById('searchInputsLeft').classList.add('d-none')
        document.getElementById('searchInputsRight').classList.remove('d-none')
    }



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
                                <div className="row justify-content-md-center">
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
                                    <hr className='d-md-none m-1' />
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <Link className="right  d-flex align-items-center text-decoration-none " id='rightLink' onClick={() => rightLinkFun()} to={'#'}>
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
                            <hr className='m-1' />

                            <div className="searchInputs p-2 p-md-0">
                                <SearchInputsLeft/>
                                <SearchInputsRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
