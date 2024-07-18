import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';

export default function ContactUs() {
  return (
    <>
      <div className="container w-100 px-md-5 mb-5">
        <div className="ContactUs p-5 bg-white my-5 rounded-5 textMain">
          <div className="mainContent-body pt-4 bg-transparent h-100 w-100">
            <h1 className="fw-bold my-3 textMain">Contact Us</h1>
            {/* <p className="card-text"> */}
            <h5 className='d-inline textMain'>Location : </h5> Zagazig, Egypt<br />

            <h5 className='d-inline textMain'><Link to="tel:+201553739206" className='text-decoration-none textMain' target="_blank">Phone : </Link></h5>
            <Link to="tel:+201553739206" className='text-decoration-none textMain' target="_blank">+201553739206</Link><br />

            <h5 className='d-inline textMain'> <Link to="mailto:abdelrahman.mamdouh.161020@gmail.com" className='text-decoration-none textMain' target="_blank">Email : </Link></h5>
            
            <Link to="mailto:abdelrahman.mamdouh.161020@gmail.com" className='textMain' target="_blank">abdelrahman.mamdouh.161020@gmail.com</Link>
            <br />

            <h5 className='d-inline textMain'><Link to="https://bit.ly/Github_Abdelrahman-Mamdouh" className='text-decoration-none textMain' target="_blank">GitHub : </Link></h5>

            <Link to="https://bit.ly/Github_Abdelrahman-Mamdouh" className='textMain' target="_blank">https://bit.ly/Github_Abdelrahman-Mamdouh</Link><br />

            <h5 className='d-inline textMain'><Link href="https://www.linkedin.com/in/abdelrahman-mamdouh161020" className='text-decoration-none textMain' target="_blank">Linkedin : </Link></h5>

            <Link href="https://www.linkedin.com/in/abdelrahman-mamdouh161020" className=' textMain' target="_blank">https://www.linkedin.com/in/abdelrahman-mamdouh161020</Link><br />
            {/* </p> */}
          </div>
        </div>

        <div className="AboutUs m-auto p-5 bg-white my-5 rounded-5 textMain">
          <div className="container px-md-5">
            <div className="mainContent-body pt-4 bg-transparent h-100 w-100">
              <h1 className="card-title fw-bold my-3">About Us</h1>
              <p className="card-text">
                I'm Abdelrahman Mamdouh, a seasoned Front-End Developer specializing in React.js, with a strong proficiency in HTML, CSS, and JavaScript. Currently excelling as a React.js Developer at LevelUp ESG, I have a proven track record of developing advanced web applications and ensuring high code standards. My expertise is further enhanced by my completion of advanced courses from renowned institutions like Route Academy, Scrimba.com, Itrax Academy, and Elzero Web School.
                <br /><br />
                My journey includes leading the Google Developers Student Club (GDSC) at MTI University and collaborating with fellow GDSC chapters at Modern Academy, AZEX Al Azher, and MSP Al Azher. I am passionate about collaborative efforts and delivering high-quality, responsive web applications that cater to user needs.
                <br /><br />
                If you seek a reliable partner in your programming odyssey, I'm here to assist you in reaching your milestones. Connect with me today, and let's embark on this journey together!
              </p>
            </div>
          </div>
        </div>

        <div className="OurMission m-auto p-5 bg-white my-3 rounded-5 textMain">
          <div className="container px-md-5">
            <div className="mainContent-body pt-4 bg-transparent h-100 w-100">
              <h2 className="card-title fw-bold my-5">Our Mission</h2>
              <p className="card-text">
                Fueled by a passion for code, I'm Abdelrahman Mamdouh, your guide on the exciting path to becoming a web development master! Whether you're just starting your coding journey or looking to refine your existing skills, I'm here to equip you with the knowledge and inspiration to reach your programming goals.
                <br /><br />
                My expertise lies in React.js, HTML, CSS, and JavaScript, honed through advanced courses at renowned institutions like Route Academy, Scrimba.com, Itrax Academy, and Elzero Web School. But learning doesn't stop there! I also actively contribute to the developer community.
                <br /><br />
                Leading the Google Developers Student Club (GDSC) at MTI University and collaborating on projects with fellow GDSC chapters at Modern Academy, AZEX Al Azher, and MSP Al Azher has fostered my collaborative spirit and commitment to delivering high-quality, user-centric web applications.
                <br /><br />
                Let's embark on this coding adventure together! I'm dedicated to providing you with the guidance, inspiration, and support you need to excel in the world of web development. Connect with me today, and let's turn your programming aspirations into reality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
