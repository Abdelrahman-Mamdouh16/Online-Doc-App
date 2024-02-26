import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import { developerModeFun } from '../../Redux/Slices/developerMode.slice'

export default function Navbar() {
    const { isLogin } = useSelector((state) => state.userLoginData)
    const Dispatch = useDispatch();
    const location = useLocation()
    const pathName = location.pathname;
    return (
        <>
            <nav className="navbar navbar-expand-lg topTextBgColor" >
                <div className="container">
                    <Link className="navbar-brand text-white" to={'/'}>
                        <p className='m-0 d-flex justify-content-center align-items-center'>
                            <img src={require('./../../public/logo.webp')} alt='' className='pe-1' width={'30px'} />
                            OnlineDoc</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/cart'}>Cart</Link>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex">
                            {!isLogin ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={"/register"}>Register</Link>
                                    </li>
                                </> : <>

                                    {!pathName.includes('/Account')  ? <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white py-0 text-capitalize" to={""} onClick={() => Dispatch(developerModeFun())}>
                                                Login as Doctors
                                            </Link>
                                        </li>
                                        <span className='text-white d-none d-lg-block'>|</span>
                                        <span className='text-white d-block d-lg-none mb-2'>____________</span>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white py-0 " to={""} onClick={() => Dispatch(developerModeFun())}>
                                                Contact Us
                                            </Link>
                                        </li>
                                        <span className='text-white d-none d-lg-block'>|</span>
                                        <span className='text-white d-block d-lg-none mb-2'>____________</span>

                                        <li className="nav-item">
                                            <Link className="nav-link text-white py-0 " to={""} onClick={() => Dispatch(developerModeFun())}>
                                                عربي
                                            </Link>
                                        </li>
                                        <span className='text-white d-none d-lg-block'>|</span>
                                        <span className='text-white d-block d-lg-none mb-2'>____________</span>

                                        <li className="nav-item">
                                            <Link className="nav-link text-white py-0 fs-4" to={"/Account/userDetails"}>
                                                <i className="fa-regular fa-circle-user"></i>
                                            </Link>
                                        </li>
                                    </> : ''}
                                </>
                            }

                        </ul>
                        {pathName.includes('/Account') ? <>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex">
                                <li className="nav-item">
                                    <Link className="nav-link text-white p-0" to={"/logout"}>
                                        <button className='btn btn-danger' style={{ fontSize: '15px', padding: "2.5px" }}>Logout</button>
                                    </Link>
                                </li>
                            </ul>
                        </> : ''}
                    </div>
                </div>
            </nav>
        </>
    )
}



// <>
//                                     {pathName === '/userDetails' ? <>
//                                         <li className="nav-item">
//                                             <Link className="nav-link text-white p-0" to={"/logout"}>
//                                                 <button className='btn btn-danger' style={{ fontSize: '15px', padding: "2.5px" }}>Logout</button>
//                                             </Link>
//                                         </li>
//                                     </> : ''}
//                                     {pathName !== '/userDetails' ? <>
//                                         <li className="nav-item">
//                                             <Link className="nav-link text-white py-0 text-capitalize" to={""}>
//                                                 Login as Doctors
//                                             </Link>
//                                         </li>
//                                         <span className='text-white d-none d-lg-block'>|</span>
//                                         <span className='text-white d-block d-lg-none mb-2'>____________</span>
//                                         <li className="nav-item">
//                                             <Link className="nav-link text-white py-0 " to={""}>
//                                                 Contact Us
//                                             </Link>
//                                         </li>
//                                         <span className='text-white d-none d-lg-block'>|</span>
//                                         <span className='text-white d-block d-lg-none mb-2'>____________</span>

//                                         <li className="nav-item">
//                                             <Link className="nav-link text-white py-0 " to={""}>
//                                                 عربي
//                                             </Link>
//                                         </li>
//                                         <span className='text-white d-none d-lg-block'>|</span>
//                                         <span className='text-white d-block d-lg-none mb-2'>____________</span>

//                                         {pathName !== '/userDetails' ? <>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link text-white py-0 fs-4" to={"/userDetails"}>
//                                                     <i className="fa-regular fa-circle-user"></i>
//                                                 </Link>
//                                             </li></> : ''}
//                                     </> 