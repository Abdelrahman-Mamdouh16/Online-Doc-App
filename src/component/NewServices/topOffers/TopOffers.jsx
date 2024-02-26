import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import SpinnerGrow from '../../loaders/spinnerGrow/SpinnerGrow'

export default function TopOffers() {
    const [OffersData, serOffersData] = useState([])
    const [isErrorOffers, setIsErrorOffers] = useState('')

    const topOffersFun = async () => {
        try {
            const { data } = await axios.get('https://online-doctor-app.onrender.com/product/topOffers')
            if (data) serOffersData(data.result);
            setIsErrorOffers(null)
        } catch (error) {
            setIsErrorOffers(error.message)
            console.log(error.message);
        }
    }
    useEffect(() => {
        topOffersFun();
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
        <section className='topOffers py-5'>
            <div className="container">
                <div className='d-flex justify-content-between mb-4'>
                    <h1 className='p-0 m-0' style={{ color: 'rgb(102, 102, 102)', fontSize: '32px', fontWeight: '700' }}>Choose from top offers</h1>
                    <button className='btn btn-danger'>All Offers <i className="fa-solid fa-caret-right"></i></button>
                </div>
                <div className='topOffersSlider mt-2'>
                    {OffersData.length === 0 && !isErrorOffers ? <SpinnerGrow />
                        : <>
                            {isErrorOffers ? <h3 className='text-center p-0 m-0'>{isErrorOffers}...!</h3> : <>
                                <Slider {...settings} key={''}>
                                    {OffersData?.map((ele, index) => <div key={ele._id} className='px-2'>
                                        <div className="topOffersImg" key={ele._id}>
                                            <img src={ele.img} className='w-100 rounded-4' alt="" />
                                        </div>
                                        <div className='topOffersText'>
                                            <h5 className='mt-2' style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: 'white', fontSize: '16px', margin: '0px', color: 'rgb(102, 102, 102)', fontWeight: '600' }}>
                                                {ele.name}
                                            </h5>
                                            <div className='d-md-flex justify-content-start'>
                                                <p className='m-0 me-md-2 text-decoration-line-through' style={{ color: 'rgb(185, 185, 185)' }}> {ele.oldPrice} EGP</p>
                                                <p className='m-0' style={{ color: 'rgb(0, 112, 205)' }}> {ele.newPrice} EGP</p>
                                            </div>
                                            <p className='m-0' style={{ color: "rgb(111, 112, 114)", fontSize: '14px' }}>{ele.Offers} Offers</p>
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
