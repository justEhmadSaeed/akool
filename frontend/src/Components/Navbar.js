import React, { useEffect, useState } from 'react'
import { logoutUser } from '../actions/userActions'
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Button, Dropdown } from 'react-bootstrap';

const Navbar = ({ hideNavItems }) => {
    const [showNav, setShowNav] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.userInfo)

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    const [activeRoute, activeRouteFunc] = useState({});

    const location = useLocation();

    useEffect(() => {
        activeRouteFunc(location.pathname);
    });

    return (
        <>
            <div className="d-none d-lg-flex header-area">
                <div className="container m-0 mw-100">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12" style={{ maxWidth: '85rem' }}>
                            <div className="header-wrap">
                                <div className="header-logo">
                                    <Link to='/'><img src="/images/logo.png" alt="" /></Link>
                                </div>
                                <div className="header-bar">
                                    <a href="https://akool.com/index.html"><i className="fa fa-bars" /></a>
                                </div>
                                <div className="header-menu-fx">
                                    <div className="header-menu reding-menu">
                                        <ul>
                                            <li><a href="https://cn.akool.com/index.html">中文版</a></li>
                                            <li><a href="#"><i className="fa fa-angle-down" />Products</a>
                                                <ul className="submenu sub2">
                                                    <li><a href="https://akool.com/Video.html"><img src="/images/smart camera.png" alt="" />Video</a></li>
                                                    <li><a href="https://akool.com/3D.html"><img src="/images/use_case_card.png" alt="" />3D</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><i className="fa fa-angle-down" />Solution</a>
                                                <ul className="submenu">
                                                    <li><Link to='/solutions/smart_camera'><img src="/images/smart camera.png" alt="" />Smart Camera</Link></li>
                                                    <li><Link to="/solutions/metaverse"><img src="/images/metaverse.png" alt="" />Metaverse</Link></li>
                                                    <li><Link to="/solutions/commerce"><img src="/images/commerce.png" alt="" />Commerce</Link></li>
                                                    <li><Link to="/solutions/entertainment"><img src="/images/entertainment.png" alt="" />Entertainment &amp; Art</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://market.akool.com/">Market</a></li>
                                            <li><Link to="/">Apps</Link></li>
                                            <li><a href="https://akool.com/Company.html">Company</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btn-wrap reding-bt">
                                        <Link to="/register" className={(activeRoute == '/register' ? 'active_btn ' : '') + 'auth_btn  pc-bt'} style={{ backgroundColor: '#000b3e' }}>Register</Link>
                                        <Link to="/login" className={(activeRoute == '/login' ? 'active_btn ' : '') + 'auth_btn  pc-bt'}>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="d-flex d-lg-none navbar navbar-expand-lg w-100">
                <div className="container w-100 m-0 mw-100">
                    <Link className="navbar-brand" to={'/'} title="Home">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                    <button onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className={showNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <div className='w-100'>
                            <ul className="navbar-nav ms-auto flex justify-content-center align-items-center position-relative text-white fs-6">
                                <li className="nav-item">
                                    <Link className="nav-link page_link" to='/'>Products</Link>
                                </li>
                                <div className='dropdown '>
                                    <li className="nav-item ">
                                        <a className="nav-link page_link" href=' #'>Solution
                                            <i className="fa fa-caret-down mx-1"></i>
                                        </a>
                                    </li>
                                    <div className='dropdown-content'>
                                        <Link to='/solutions/smart_camera' className='text-light w-100 d-flex gap-2 align-items-center'>
                                            <img src="/images/smart camera.png" width={40} alt="smart camera" />
                                            <p className='text-light m-0'>Smart Camera</p>
                                        </Link>
                                        <Link to='/solutions/metaverse' className='text-light w-100 d-flex gap-2 align-items-center'>
                                            <img src="/images/metaverse.png" width={40} alt="smart camera" />
                                            <p className='text-light m-0'>Metaverse</p>
                                        </Link>
                                        <Link to='/solutions/commerce' className='text-light w-100 d-flex gap-2 align-items-center'>
                                            <img src="/images/commerce.png" width={40} alt="smart camera" />
                                            <p className='text-light m-0'>Commerce</p>
                                        </Link>
                                        <Link to='/solutions/entertainment' className='text-light w-100 d-flex gap-2 align-items-center'>
                                            <img src="/images/entertainment.png" width={40} alt="smart camera" />
                                            <p className='text-light m-0'>Entertainment &amp; Art</p>
                                        </Link>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Solution</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Market</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Apps</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Company</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                            {user ?
                                <li className="nav-item">
                                    <Button onClick={handleLogout} variant="danger" className='p-2 px-3'>Logout</Button>
                                </li> :
                                <>
                                    <li className="nav-item">
                                        <Link to='/register' className="nav-link nav_btn one">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav_btn two" to='/login'>Login</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_content_section">
                                <div className="footer_logo">
                                    <a href="true">
                                        <img src="/images/footer_logo.png" alt="footer logo" />
                                    </a>
                                </div>
                                <div className="footer_nav_section">
                                    <div className="footer_page_links">
                                        <ul className="first_list">
                                            <li><a href="true">Products</a></li>
                                            <li><a href="true">Company</a></li>
                                            <li><a href="true">Privacy Policy</a></li>
                                        </ul>
                                        <ul className="last_list">
                                            <li><a href="true">Solution</a></li>
                                            <li><a href="true">Pricing</a></li>
                                            <li><a href="true">Terms of Services</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer_register_btn">
                                        <Link to='/register'>Register</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>

            <section className="copyright__social_links ">
                <div className="container">
                    <div className="row">
                        <div className="copyright_section_content">
                            {/* <div className="social_links">
                                <ul>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="copyright_text w-100 text-end">
                                <p>© 2022 by Akool Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar