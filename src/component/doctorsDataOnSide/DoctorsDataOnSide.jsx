import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './DoctorsDataOnSide.css'
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { setDoctorDay, setDoctorData, setDoctorTimeStart, setDoctorTimeEnd } from '../../Redux/Slices/ReservationDocData.slice.js';
import SearchInputsLeft from '../mainSlide/searchInputsLeftMain(Book a doctor)/SearchInputsLeft.jsx';
import SpinnerLoading from '../loaders/SpinnerLoading/SpinnerLoading.jsx';
export default function DoctorsDataOnSide() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState([]);
  const [searchMessage, setSearchMessage] = useState([]);
  useEffect(() => {
    async function searchLefHandling() {
      try {
        const { data } = await axios.post(`https://node-js-server-onlinedoctor.vercel.app/doctor/DocSearch`, param);
        console.log(data);
        if (data.success === true) {
          setSearchData(data.result);
          setSearchMessage(data.message);
        } else {
          setSearchData('');
          setSearchMessage(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    searchLefHandling();
  }, [param]);
  // console.log(searchData);

  var settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 3
  };




  const options = {
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  };

  const getDate = new Date();
  const getToday = getDate.toLocaleDateString('EN-EG', options).replace(/,/g, '')
  const getTomorrow = new Date(getDate.getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('EN-EG', options).replace(/,/g, '');

  const getAfterTomorrow = new Date(getDate.getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('EG-EN', options).replace(/,/g, '');

  const getAfterTomorrowAfterOne = new Date(getDate.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('EN-EG', options).replace(/,/g, '');
  const getAfterTomorrowAfterTow = new Date(getDate.getTime() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('EN-EG', options).replace(/,/g, '');
  const getAfterTomorrowAfterThree = new Date(getDate.getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('EN-EG', options).replace(/,/g, '');

  const Booking = (doctorData, timeStart, timeEnd, theDay) => {
    dispatch(setDoctorData(doctorData));
    dispatch(setDoctorTimeStart(timeStart));
    dispatch(setDoctorTimeEnd(timeEnd));
    dispatch(setDoctorDay(theDay));
    // console.log(id, timeStart, timeEnd, theDay);
    navigate('/reservationOnSide/create');
  }
  console.log(searchData);
  return (
    <>
      <div className='DoctorsData'>
        <div className='topSearch '>
          <div className='topSearchBanner'>
            <div className='container'>
              <div className="topSearchText  pt-3 mx-md-5">
                <h1 className='ms-1'>Best Doctor in Egypt</h1>
                <h2 className='ms-1 tsTst'>Book online or call <span className=''><i className="text-danger fa-solid fa-phone phoneIcon" style={{ fontSize: "16.5px" }}></i> </span><span className='fw-bold'>19460</span></h2>
                <p className='ms-1 tsTst'>15000 Doctors - 9000 Professors and Consultants - More than 40 Specialties</p>
              </div>
              <div className='rounded-top-3 overflow-hidden'>
                <SearchInputsLeft />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className='mx-md-5' style={{ backgroundColor: '#e2e6ea' }}>
            <h1 className='text-capitalize' style={{
              fontSize: "20px",
              fontWeight: '700',
              margin: "0px",
              color: 'rgb(116, 116, 112)'
            }}>{param.specialization}
              <small className='ms-2 fw-light' style={{ fontSize: '15px' }}>{searchData?.length} Doctor</small>
            </h1>
            {searchMessage ? <p style={{ fontSize: '12px', color: 'rgb(116, 116, 112)' }}>{searchMessage}</p> : ''}
          </div>
          {searchMessage === 'doctors is not found' ? '' :
            !searchData.length ? <SpinnerLoading/>
              : searchData?.map((ele, index) => {
                return <div className=' bg-white mb-2 rounded mx-md-5 styleDocCard' style={{ cursor: 'pointer' }} key={index}>
                  <div className='row'>
                    <div className="img col-lg-4 col-xl-3 d-flex justify-content-center my-lg-3">
                      <i className="fa-solid fa-user-doctor p-3 m-3 textMain_Blue" style={{ fontSize: '80px', border: '1px black solid', borderRadius: '50%' }}></i>
                    </div>
                    <div className="desc col-lg-8 col-xl-5 my-auto d-flex flex-column justify-content-center my-lg-3">
                      <div className='px-3'>
                        <p className='m-0 eleDocName' style={{ fontSize: '14px', }}>Doctor
                          <span className='anchor eleDocName' style={{ fontSize: "21px" }}>{ele.name}
                          </span>
                        </p>

                        <p className='m-0 fw-lighter styleDocDetails' style={{ fontSize: '.8rem' }}>{ele.description}</p>

                        <p className='m-0 styleDocDetails fs-6'>Rate : {ele.rate} <i className="fa-solid fa-star 
                text-warning"></i></p>

                        <p className='m-0 styleDocDetails'><i className="fa-solid fa-stethoscope textMain_Blue"></i>  Specialized in : <span className='fw-bold'>{ele.specialization}</span></p>

                        <p className='m-0 styleDocDetails'><i className="fa-solid fa-location-dot pe-1 textMain_Blue"></i>  Location : {ele.address}</p>

                        <p className='m-0 styleDocDetails'><i className="fa-solid fa-money-check-dollar textMain_Blue"></i> Feaze : {ele.cost} EGP</p>

                        <p className='m-0 styleDocDetails'><i className="fa-solid fa-phone phoneIcon textMain_Blue" style={{}}></i> <span className='fw-bold'>19460</span> - cost of regular call</p>
                      </div>

                    </div>
                    <div className="timeTable col-lg-8 col-xl-4 m-auto text-center">
                      <Slider {...settings}>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 " >Today</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize " style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1">
                            <button className='btn  text-white w-100' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getToday)}>
                              Book
                            </button>
                          </div>
                        </div>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 ">Tomorrow</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize" style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1"><button className='btn text-white w-100' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getTomorrow)}>Book</button></div>
                        </div>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 ">{getAfterTomorrow}</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize" style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1"><button className='btn text-white w-100' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getAfterTomorrow)}>Book</button></div>
                        </div>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 ">{getAfterTomorrowAfterOne}</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize" style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1"><button className='btn text-white' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getAfterTomorrowAfterOne)}>Book</button></div>
                        </div>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 ">{getAfterTomorrowAfterTow}</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize" style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1"><button className='btn text-white w-100' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getAfterTomorrowAfterTow)}>Book</button></div>
                        </div>
                        <div className="w-75 bg-white my-3 rounded-top rounded-bottom overflow-hidden text-white mx-auto d-flex flex-column">
                          <div className="topTextBgColor text-center py-2 ">{getAfterTomorrowAfterThree}</div>
                          <div className="py-4 text-center textMain_Blue text-capitalize" style={{ borderLeft: '1px #e2e6ea solid', borderRight: '1px #e2e6ea solid' }}>
                            <h1 className='fs-6'>{ele.timeStart}</h1>
                            <h1 className='m-0 fs-6'>{ele.timeEnd}</h1>
                          </div>
                          <div className="bg-danger text-center py-1"><button className='btn text-white w-100' onClick={() => Booking(ele, ele.timeStart, ele.timeEnd, getAfterTomorrowAfterThree)}>Book</button></div>
                        </div>
                      </Slider>
                      <p className='styleDocDetails'>Reservation required, first-come, first-served</p>
                    </div>
                  </div>
                </div>
              })}
        </div >
      </div>

    </>
  )
}
