import React from 'react'
import { Link } from 'react-router-dom'

export default function Laboratory () {
    return (
        <section className='medicalQuestion mt-5 p-5 '>
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-12 ">
                    <div className="medicalQuestionText d-flex flex-column justify-content-center justify-content-md-start">
                        <div>
                            <h4 className='m-0'>Laboratories</h4>
                        </div>
                        <div>
                            <p style={{
                                color: '#666666', margin: '4px 0px 8px',
                                fontWeight: '400',
                            }}>Check the Laboratories near you</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center justify-content-md-start mt-4 mt-md-3">
                    <div className="medicalQuestionButton">
                        <Link to={'https://www.google.com/maps/search/Lab+Medical/'}>
                        <button className='btn fs-5 fw-bold' style={{
                            width: '100%',
                            backgroundColor: '#e6f1ff',
                            color: '#0070cd',
                            padding: '16px 50px',
                            fontSize: '16px',
                            fontWeight: '400'
                        }}>Show all Laboratories</button>
                        </Link>
                    </div>
                </div>


            </div>

        </section>
    )
}
