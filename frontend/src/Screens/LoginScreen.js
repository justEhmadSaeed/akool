import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUserInfo } from '../actions/userActions'
import { useSelector } from 'react-redux'
import Helmet from 'react-helmet'
import { Toast } from 'react-bootstrap'


const LoginScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, showError] = useState(false)

    const userLoggedIn = useSelector(state => state.userInfo)

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            email,
            password
        }
        axios.post('https://api.akool.com/api/v1/public/login', data)
            .then(({ data }) => {
                if (!data.user.email_verified) {
                    localStorage.setItem('token', data.token)
                    navigate('/otp')
                }
                else {
                    localStorage.setItem('token', data.token)
                    dispatch(saveUserInfo(data.user))
                    setLoading(false)
                    navigate('/')
                }
                console.log(data);
            })
            .catch(err => {
                setTimeout(() => {
                    showError(false)
                }, 3000);
                showError(true)
                setLoading(false)
                console.log(err)
            })
    }

    // If ths user is already logged in then redirect to home screen
    if (userLoggedIn)
        return <Navigate to='/' />
    return <div className="hero-aera login-hero">
        <Helmet>
            <title>Login</title>
        </Helmet>
        <Toast show={error ? true : false} className="position-fixed end-0 d-inline-block m-1" bg='danger' style={{ zIndex: '100', top: '4rem' }}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Login</strong>
            </Toast.Header>
            {/* className={variant === 'Dark' && 'text-white'} */}
            <Toast.Body className='text-white'>
                Wrong email/password. Please try again!
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
                <h4>Login</h4>
            </div>
            <form onSubmit={(e) => { handleLogin(e) }}>
                <div className="login-inp">
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" type="Email" placeholder="Your Email" />
                    <div className="input-group mb-3">
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password" placeholder="Password" />
                        <div className="input-group-append">
                            {/* <span className="input-group-text" id="basic-addon2"><i class="fa-solid fa-eye"></i></span> */}
                        </div>
                    </div>
                </div>
                <div className="form-group my-2">
                    <input type="checkbox" id="css" />
                    <label className='mx-2' htmlFor="css">Remember Me </label>
                </div>

                <div className="log-bt">
                    <button type="submit">
                        {loading && <span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>}
                        Login
                    </button>
                </div>
                <div className="log-btn">
                    <p>Don't have an account?</p>
                    <Link to='/register'>Register</Link>
                </div>
            </form>
        </div>
    </div>

}

export default LoginScreen