import React from 'react'

export default function North() {
    const styleBtn = {
        width: '100%', backgroundColor: '#e6f1ff', color: '#0070cd', padding: '16px 80px', fontSize: '16px', fontWeight: '400'
    }
    return (
        <section className='north mt-5 p-3 pe-0 pe-md-5 bg-white'>
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6 ">
                    <div className="northImg d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className='img me-3'>
                            <img src={require('./../../../public/mental-health.jpeg')} alt="" />
                        </div>
                        <div className="northText">
                            <div>
                                <img src={require('./../../../public/mental-health-logo.jpg')} width={'93px'} alt="" />
                            </div>
                            <div>
                                <p style={{ color: '#666666', margin: '4px 0px 8px', fontWeight: '400', }}>North, your way to practice peace.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
                    <div className="northButton">
                        <button className='btn' style={styleBtn}>Explore North</button>
                    </div>
                </div>


            </div>

        </section>
    )
}
