import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Toast } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUserInfo } from '../actions/userActions'

export const OtpVerification = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState({
        message: null,
        bg: 'danger',
        title: 'Otp Verification'
    })
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState(null)

    const timeoutToastMessage = (message, time = 3000, bg = 'danger') => {
        setTimeout(() => setToastMessage({ ...toastMessage, message: null, bg }), time);
        setToastMessage({ ...toastMessage, message, bg })
    }

    const handleVerification = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = { otp, email: null };
        axios.put('https://api.akool.com/api/v1/user/verify_otp', data,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(({ data }) => {
                console.log(data);
                dispatch(saveUserInfo(data.user))
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                timeoutToastMessage('Wrong Otp Entered. Please try again!')
                setLoading(false)
                console.log(err)
            })
    }

    const resendOtp = () => {
        setLoading(true)
        axios.get('https://api.akool.com/api/v1/user/resend_otp',
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(({ data }) => {
                timeoutToastMessage('Otp Successfully Resend', 3000, 'success')
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    return (
        <div className="hero-aera login-hero">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Toast show={toastMessage.message ? true : false} className="position-fixed end-0 d-inline-block m-1" bg={toastMessage.bg} style={{ zIndex: '100', top: '4rem' }}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{toastMessage.title}</strong>
                </Toast.Header>
                <Toast.Body className='text-white'>
                    {toastMessage.message}
                </Toast.Body>
            </Toast>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="login-wrap">
                            <div className="login-title">
                                <h3>Get Started</h3>
                                <p>10G free storage, 20 free processing api call, 1k free visits</p>
                            </div>
                            <div className="login-single-box">
                                <h6>Build content solution on Akool</h6>
                                <div className="login-icon">
                                    <a href="true" data-aos="zoom-in" data-aos-delay={50} data-aos-duration={1100}><img src="/images/login/l1.png" alt="" /> Video</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={150} data-aos-duration={1300}><img src="/images/login/l3.png" alt="" /> 3D</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={200} data-aos-duration={1400}><img src="/images/login/l4.png" alt="" /> Rendering</a>
                                </div>
                            </div>
                            <div className="login-single-box">
                                <h6>Deploy easily with</h6>
                                <div className="login-icon">
                                    <a href="true" data-aos="zoom-in" data-aos-delay={250} data-aos-duration={1500}><img src="/images/login/l5.png" alt="" /> Android</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={300} data-aos-duration={1600}><img src="/images/login/l6.png" alt="" /> iOS</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={350} data-aos-duration={1700}><img src="/images/login/l7.png" alt="" /> Web</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={400} data-aos-duration={1800}><img src="/images/login/l8.png" alt="" /> Unity</a>
                                </div>
                            </div>
                            <div className="login-single-box log-las">
                                <h6>Trusted by thousands of customers globally</h6>
                                <div className="login-icon">
                                    <a href="true" data-aos="zoom-in" data-aos-delay={450} data-aos-duration={1900}><img src="/images/login/l9.png" alt="" /> Nreal</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={500} data-aos-duration={2000}><img src="/images/login/l10.png" alt="" /> DreamGlass</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={550} data-aos-duration={2100}><img src="/images/login/l11.png" alt="" /> Shopify</a>
                                    <a href="true" data-aos="zoom-in" data-aos-delay={600} data-aos-duration={2200}><img src="/images/login/l12.png" alt="" /> Tencent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-form rounded" style={{ height: '34rem' }} data-aos="zoom-in" data-aos-delay={650} data-aos-duration={2300}>
                <div className="login-form-title">
                    <h4>Verification Code</h4>
                </div>
                <form onSubmit={(e) => { handleVerification(e) }}>
                    <div className="login-inp">
                        <input value={otp} onChange={(e) => { setOtp(e.target.value.trim()) }} name="otp" type="Otp" placeholder="Enter Verification Code" />
                    </div>
                    <div className="log-bt">
                        <button type="submit">
                            {loading && <span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>}
                            Verify
                        </button>
                    </div>
                    <div className="log-btn">
                        <p>Didn't receive a verification code?</p>
                        <Button onClick={resendOtp}>Resend</Button>
                    </div>
                </form>
            </div>
        </div>)
}