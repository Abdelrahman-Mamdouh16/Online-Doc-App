import React from 'react'
import ass from '../../public/error.svg'
// import '../NotFound/NotFound.css'
import { Helmet } from 'react-helmet';

export default function NotFound() {

  return (
    <>
      <Helmet>
        <title>Page Not Found 404</title>
      </Helmet>
      <div className="img text-center" style={{ margin: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto" >
              <img src={ass} alt="" className='w-100 m-auto' />
            </div>
            <div className="col-md-12">
              <h1 className='textMain'>Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
