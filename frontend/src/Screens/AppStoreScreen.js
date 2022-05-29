import React, { useState } from 'react'
import { logoutUser } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { Button, Modal, Form } from 'react-bootstrap'
import Helmet from 'react-helmet';

const AppStoreScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [showNav, setShowNav] = useState(false)
    const [showNavDropdown, setShowNavDropdown] = useState(false)
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

    const user = useSelector(state => state.userInfo)
    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Helmet>
                <title>Apps</title>
            </Helmet>
            <div className="dash-area" >
                <div className="dash-fl">
                    <div className="dash-left">
                        <div className="dash-logo">
                            <Link title="footer logo" to='/'><img src="/images/footer_logo.png" alt="footer logo" /></Link>
                        </div>
                        <div className="dash-menu">
                            <ul className='d-flex flex-column align-items-start px-3'>
                                <li><NavLink exact activeClassName='active' to="/"><img src="/images/application.png" alt="" /> Creation</NavLink></li>
                                <li><a href="https://market.akool.com/"><img src="/images/application.png" alt="" /> Data Marketplace</a></li>
                                <li><NavLink exact activeClassName='active' to="/recognition"><img src="/images/application.png" alt="" /> Recognition</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dash-right" style={{ position: 'relative' }}>
                        <div className="store-baner gap-4" style={{ backgroundImage: "url('images/app_intro_bg.png')" }}>
                            <div title="nav_icon" onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="dash-right-btn col-md-block" data-bs-toggle="offcanvas"
                                role="button" aria-controls="offcanvasExample">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <div className={showNav ? "offcanvas offcanvas-start col-md-block show" : "offcanvas offcanvas-start col-md-block"} style={showNav ? { visibility: "visible" } : { visibility: "hidden" }} >
                                <div className="offcanvas-header">
                                    <div className="dash-logo">
                                        <Link to={'/'}><img src="/images/footer_logo.png" alt="" /></Link>
                                    </div>
                                    <button type="button" className="btn-close text-reset" onClick={() => { setShowNav(false) }}
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">


                                    <div className="dash-menu">
                                        <ul onClick={() => { setShowNav(false) }}>
                                            <li ><NavLink exact activeClassName='active ' to="/"><img src="/images/application.png" alt="" />
                                                Creation</NavLink></li>
                                            <li><a href="https://market.akool.com/"><img src="/images/application.png" alt="" />Data Marketplace</a></li>
                                            <li><NavLink exact activeClassName='active' to="/recognition"><img src="/images/application.png" alt="" />Recognition</NavLink></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <h3 className='launch-h3 w-100'>App Store</h3>
                            <div className='d-flex align-items-center justify-content-end gap-2 position-relative'>
                                <img className='w-75 w-sm-100' src="/images/man.png" alt="" />
                                <div className='text-white d-none d-sm-block fw-bold fs-6'>
                                    <p className='text-white mb-2'>{user.firstName + ' ' + user.lastName}</p>
                                    <p className='text-white mb-2'>{user.email}</p>
                                    <div className='d-flex items-center gap-2'>
                                        <Button variant="primary" className='w-100' onClick={handleShow}>
                                            Profile
                                        </Button>
                                        <button onClick={handleLogout} type="button" className="btn btn-primary">Logout</button>
                                    </div>
                                </div>
                                <span onClick={() => { showNavDropdown ? setShowNavDropdown(false) : setShowNavDropdown(true) }}><i className="fa fa-chevron-down d-sm-none" style={{ color: "#fff" }}></i></span>
                                <div className={showNavDropdown ? 'position-absolute end-0 bg-light p-2 rounded shadow d-sm-none' : 'position-absolute end-0 bg-light p-2 rounded d-none'} style={{ top: "4rem" }}>
                                    <p className='mb-2'>{user.firstName + ' ' + user.lastName}</p>
                                    <p className='mb-2'>{user.email}</p>
                                    <Button variant="primary" className='w-100 mb-1' onClick={handleShow}>
                                        Profile
                                    </Button>
                                    <button onClick={handleLogout} type="button" className="btn btn-primary w-100">Logout</button>

                                </div>
                            </div>
                            <div onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className={showNav ? 'modal-backdrop fade show' : 'd-none'}></div>
                        </div>
                        <Modal
                            size="lg"
                            show={show}
                            onHide={() => setShow(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title className='text-center w-100'>Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='d-flex gap-5 flex-column flex-md-row align-items-center justify-content-center w-100 '>
                                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                                    <div style={{ width: '10rem', height: '10rem', }}>
                                        <img src={img} alt='' className='w-100 h-100' />
                                    </div>
                                    <input type="file" id="img" name="img" accept="image/*" onChange={onImageChange} />
                                    <Button>Upload Picture</Button>
                                </div>
                                <Form className='w-100 w-md-50'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="email" value={user.firstName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="email" value={user.lastName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={user.email} />
                                    </Form.Group>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStoreScreen