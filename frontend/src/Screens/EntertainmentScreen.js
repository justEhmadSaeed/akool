import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Helmet from 'react-helmet';
import axios from 'axios';
import Carousel from '../Components/Carousel'
import { Spinner } from 'react-bootstrap'


const EntertainmentScreen = () => {

    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    const getApps = async () => {
        const { data } = await axios.get('/api/tools/entertainment')
        setApps(data)
        setLoading(false)
    }

    useEffect(() => {
        getApps()
    }, [])

    return (
        <div>
            <Helmet>
                <title>Entertainment</title>
            </Helmet>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text_section">
                                <h3>Entertainment and Art</h3>
                                <p>
                                    Akool video and 3d solutions provide creative editing tools of face swap, 3d modelling, et al.
                                </p>
                                <a href='true' title="buy button">Start Building Today</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image_section">
                                <div className="image text-center">
                                    <img src="/images/hollywood-sign.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <a href='#use_case_section' className="go_to_bottom_icon">
                    <img src="/images/go_to_bottom.png" alt="" />
                </a>
            </section>

            {/* Top Selected Apps */}
            <section id="top_selected_apps_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading_text_section">
                                <h3 className="mb-0">Top Selected Entertainment Apps</h3>
                                <p className="mb-0">Akool video solutions enpower live video analytics from security camera, webcam,
                                    phone camera, et al. Hardware is optional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {loading ?
                                <div className='w-full d-flex justify-content-center'>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                                :
                                <Carousel data={apps} />
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Stories */}
            <section id="customer_stories_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading_text text-center">
                                <h3>Customer Stories</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <OwlCarousel className="slider_section top_selected_apps_slider" items={1} margin={30}
                                responsiveClass={true} nav={true} dots="false" autoplay={false}
                                navText={[
                                    `<div><img src="/images/slider_prev_white.png" alt="previous"/></div>`,
                                    `<div><img src="/images/slider_next_white.png" alt="next"/></div>`]}>

                                <div className="customer_stories_slider_card d-flex">
                                    <div className="image_section w-100 m-auto" style={{ maxWidth: '28rem' }}>
                                        <img src="/images/s3.jpeg"
                                            alt="lady pic" />
                                    </div>
                                    <div className="text_section">
                                        <h3 className="mb-0">Chi Xu</h3>
                                        <p className='p-0 text-secondary'>CEO, Founder of NReal</p>
                                        <p className="mb-0">"Akool's 3D content creation technology helps us greatly increase MR content quantity and quality."</p>
                                        <h5 className="mb-0">Oct 5th, 2021</h5>
                                    </div>
                                </div>
                                <div className="customer_stories_slider_card d-flex">
                                    <div className="image_section w-100 m-auto" style={{ maxWidth: '28rem' }}>
                                        <img src="/images/s4.png"
                                            alt="lady pic" />
                                    </div>
                                    <div className="text_section">
                                        <h3 className="mb-0">Kevin Zhong</h3>
                                        <p className='p-0 text-secondary'>CEO, Founder of DreamGlass</p>
                                        <p className="mb-0">"Our partnership with Akool on 3D Multimedia center is a great success."</p>
                                        <h5 className="mb-0">June 19th, 2021</h5>
                                    </div>
                                </div>
                                <div className="customer_stories_slider_card d-flex">
                                    <div className="image_section w-100 m-auto" style={{ maxWidth: '28rem' }}>
                                        <img src="/images/s2.png"
                                            alt="lady pic" />
                                    </div>
                                    <div className="text_section">
                                        <h3 className="mb-0">Peng Dou</h3>
                                        <p className='p-0 text-secondary'>Business Development Director of Tencent</p>
                                        <p className="mb-0">"User interactions and sales are tripled after adopting 3D visualizations."</p>
                                        <h5 className="mb-0">February 23rd, 2021</h5>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}

export default EntertainmentScreen