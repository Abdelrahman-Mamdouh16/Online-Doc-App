import React from 'react'

export default function LastCard() {
    return (
        <section className='lastCard my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-0 pe-0 pe-lg-4">
                        <div className="card mb-3" >
                            <div className="row g-0 justify-content-between align-items-center">
                                <div className="col-lg-5 col-sm-4">
                                    <img src={require('./../../../public/card (1).jpeg')} className="img-fluid rounded-start" height={'100%'} width={'100%'} alt="..." />
                                </div>
                                <div className="col-lg-7 col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Teleconsultation</h5>
                                        <p className="card-text">Schedule a voice or video call with a specialized doctor.</p>
                                        <button className='btn btn-danger anchor'>Book a Call <i className="fa-solid fa-caret-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 ps-0 ps-lg-4">
                        <div className="card mb-3">
                            <div className="row g-0 justify-content-between align-items-center">
                                <div className="col-lg-5 col-sm-4">
                                    <img src={require('./../../../public/card (2).jpeg')} className="img-fluid rounded-start" width={'100%'} alt="..." />
                                </div>
                                <div className="col-lg-7 col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Home Visit</h5>
                                        <p className="card-text">Choose the specialty, and the doctor
                                            will visit you at home.</p>
                                        <button className='btn btn-danger anchor'>Book a visit <i className="fa-solid fa-caret-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
