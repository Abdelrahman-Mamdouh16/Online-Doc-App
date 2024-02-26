import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import SpinnerGrow from '../../loaders/spinnerGrow/SpinnerGrow'

export default function TopSpecialties() {
    const [SpecialtiesData, serSpecialtiesData] = useState([])
    const [isErrorSpecialties, setIsErrorSpecialties] = useState('')


    const topSpecialtiesFun = async () => {
        try {
            const { data } = await axios.get('https://online-doctor-app.onrender.com/product/topSpecialties')
            if (data) serSpecialtiesData(data.result);
            setIsErrorSpecialties(null)
        } catch (error) {
            setIsErrorSpecialties(error.message)
            console.log(error);
        }
    }
    useEffect(() => {
        topSpecialtiesFun();
    }, [])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    
    return (
        <section className='topSpecialties py-5'>
            <div className="container">
                <div className='d-flex justify-content-between mb-4'>
                    <h1 className='p-0 m-0' style={{ color: 'rgb(102, 102, 102)', fontSize: '32px', fontWeight: '700' }}>Book from top specialties</h1>
                    <button className='btn btn-danger'>All Offers <i className="fa-solid fa-caret-right"></i></button>
                </div>
                <div className='topSpecialtiesSlider mt-2'>
                    {SpecialtiesData.length === 0 && !isErrorSpecialties ? <SpinnerGrow />
                        : <>
                            {isErrorSpecialties ? <h3 className='text-center p-0 m-0'>{isErrorSpecialties}...!</h3> : <>
                                <Slider {...settings} key={''}>
                                    {SpecialtiesData?.map((ele, index) => <div key={ele._id} className='px-2'>
                                        <div className="topSpecialtiesImg" key={ele._id}>
                                            <img src={ele.img} className='w-100 rounded-4 rounded-bottom-0' alt="" />
                                        </div>
                                        <div className='topSpecialtiesText'>
                                            <h5 className='p-3 rounded-bottom-4' style={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                backgroundColor: 'white',
                                                fontSize: '16px',
                                                margin: '0px',
                                                color: 'rgb(102, 102, 102)',
                                                fontWeight: '600'
                                            }}>{ele.name}</h5>
                                        </div>
                                    </div>
                                    )}

                                </Slider>
                            </>}
                        </>}
                </div>
            </div>
        </section>
    )
}
