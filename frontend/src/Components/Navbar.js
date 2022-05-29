import React, { useEffect, useState } from 'react'
import { logoutUser } from '../actions/userActions'
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Button, Dropdown } from 'react-bootstrap';

const Navbar = ({ hideNavItems }) => {
    // const [showNav, setShowNav] = useState(false)
    // const dispatch = useDispatch()
    // const navigate = useNavigate();

    // const user = useSelector(state => state.userInfo)

    // const handleLogout = () => {
    //     dispatch(logoutUser())
    //     navigate('/')
    // }
    // const [showDropdown, setShowDropdown] = useState(false);

    const [activeRoute, activeRouteFunc] = useState({});

    const location = useLocation();

    useEffect(() => {
        activeRouteFunc(location.pathname);
    });

    return (
        // <>
        //     <nav className="navbar navbar-expand-lg w-100">
        //         <div className="container w-100 m-0 mw-100">
        //             <Link className="navbar-brand" to={'/'} title="Home">
        //                 <img src="/images/logo.png" alt="" />
        //             </Link>
        //             <button onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        //                 aria-label="Toggle navigation">
        //                 <i className="fa fa-bars" aria-hidden="true"></i>
        //             </button>
        //             <div className={showNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
        //                 <div className='w-100'>
        //                     <ul className="navbar-nav ms-auto flex justify-content-center align-items-center position-relative text-white fs-6">
        //                         <li className="nav-item">
        //                             <Link className="nav-link page_link" to='/'>Products</Link>
        //                         </li>
        //                         <div className='dropdown '>
        //                             <li className="nav-item ">
        //                                 <a className="nav-link page_link" href=' #'>Solution
        //                                     <i className="fa fa-caret-down mx-1"></i>
        //                                 </a>
        //                             </li>
        //                             <div className='dropdown-content'>
        //                                 <Link to='/solutions/smart_camera' className='text-light w-100 d-flex gap-2 align-items-center'>
        //                                     <img src="/images/smart camera.png" width={40} alt="smart camera" />
        //                                     <p className='text-light m-0'>Smart Camera</p>
        //                                 </Link>
        //                                 <Link to='/solutions/metaverse' className='text-light w-100 d-flex gap-2 align-items-center'>
        //                                     <img src="/images/metaverse.png" width={40} alt="smart camera" />
        //                                     <p className='text-light m-0'>Metaverse</p>
        //                                 </Link>
        //                                 <Link to='/solutions/commerce' className='text-light w-100 d-flex gap-2 align-items-center'>
        //                                     <img src="/images/commerce.png" width={40} alt="smart camera" />
        //                                     <p className='text-light m-0'>Commerce</p>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <li className="nav-item">
        //                             <a className="nav-link" href='true'>Pricing</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link" href='true'>Apps</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link" href='true'>Market</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link" href='true'>Company</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
        //                     {user ?
        //                         <li className="nav-item">
        //                             <Button onClick={handleLogout} variant="danger" className='p-2 px-3'>Logout</Button>
        //                         </li> :
        //                         <>
        //                             <li className="nav-item">
        //                                 <Link to='/register' className="nav-link nav_btn one">Register</Link>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <Link className="nav-link nav_btn two" to='/login'>Login</Link>
        //                             </li>
        //                         </>
        //                     }
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        <>
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-wrap">
                                <div className="header-logo">
                                    <a href="https://akool.com/index.html"><img src="/images/logo.png" alt="" /></a>
                                </div>
                                <div className="header-bar">
                                    <a href="https://akool.com/index.html"><i className="fal fa-bars" /></a>
                                </div>
                                <div className="header-menu-fx">
                                    <div className="header-menu reding-menu">
                                        <ul>
                                            <li><a href="https://cn.akool.com/index.html">中文版</a></li>
                                            <li><a href="#"><i className="fal fa-angle-down" />Products</a>
                                                <ul className="submenu sub2">
                                                    <li><a href="https://akool.com/Video.html"><img src="assets/img/build/b1.png" alt="" />Video</a></li>
                                                    <li><a href="https://akool.com/3D.html"><img src="assets/img/build/b2.png" alt="" />3D</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><i className="fal fa-angle-down" />Solution</a>
                                                <ul className="submenu">
                                                    <li><a href="https://akool.com/Camera.html"><img src="assets/img/build/b1.png" alt="" />Smart Camera</a></li>
                                                    <li><a href="https://akool.com/MR.html"><img src="assets/img/menu/m1.png" alt="" />VR/AR Company</a></li>
                                                    <li><a href="https://akool.com/Commerce.html"><img src="assets/img/menu/m2.png" alt="" />Commerce</a></li>
                                                    <li><a href="https://akool.com/Art.html"><img src="assets/img/menu/m3.png" alt="" />Entertainment &amp; Art</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://market.akool.com/">Market</a></li>
                                            <li><a href="https://akool.com/Company.html">Company</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btn-wrap reding-bt">
                                        <Link to="/register" className={(activeRoute == '/register' ? 'active_btn ' : '') + 'auth_btn  pc-bt'}>Register</Link>
                                        <Link to="/login" className={(activeRoute == '/login' ? 'active_btn ' : '') + 'auth_btn  pc-bt'}>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar