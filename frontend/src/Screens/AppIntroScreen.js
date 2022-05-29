import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Faq from '../Components/Faq'
import TestimonialCarousel from '../Components/TestimonialCarousel'
import { Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const AppIntroScreen = () => {
    const { title } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const getProducts = async () => {
        const { data } = await axios.post(`/api/tools/find/${title}`)
        data ? setProduct(data) : navigate('/404')
        setLoading(false)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getProducts()
    }, [])


    return (

        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {loading ?
                <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                :
                <div>
                    <section className="banner_two">
                        <div className="container banner_container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="banner_text">
                                        <h3 className='app-intro-h3'>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <div className="rating_section d-flex align-items-baseline">

                                            <div className="star_section">
                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                            </div>
                                            <h5 className="mb-0">5.0</h5>
                                        </div>
                                    </div>

                                </div>

                                <div className="banner_content_image">
                                    <img src={product.logo} alt=" app intro" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="app_about_section">
                        <div className="container">
                            <div className="row">
                                <div className="download_btn m-auto text-center">
                                    <a href={product.downloadLink} title="download">Download an App</a>
                                </div>
                            </div>

                        </div>

                        <div className="app_intro_custom_container">
                            <div className="row">
                                <div className="app_about_bottom_section d-flex align-items-center justify-content-between">
                                    <div className="about_text_part">
                                        <h3 className='app-intro-h3'>About the App</h3>
                                        <p>{product.about}</p>
                                    </div>
                                    <div className="about_image_part">
                                        <img src={product.aboutImage} alt="about" className="img-fluid" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about_section_two">
                        <div className="app_intro_custom_container_two">
                            <div className="row">
                                <div className="row">
                                    <div className="app_about_bottom_section d-flex align-items-center justify-content-between">
                                        <div className="about_image_part">
                                            <img src={product.goalImage} alt="about" className="img-fluid" />
                                        </div>
                                        <div className="about_text_part">
                                            <h3 className='app-intro-h3'>What's our main goal?</h3>
                                            <p>{product.goal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="testmonial">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading_text text-center">
                                        <h3 className='app-intro-h3'>Testimonials</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <TestimonialCarousel testimonials={product.testimonials} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="faq_section">

                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading_text text-center">
                                        <h3 className='app-intro-h3'>FAQs</h3>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    {product.faq.map((faq, index) =>
                                        <Faq key={index} number={index} question={faq.question} answer={faq.answer} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="app_intro_feature">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading_text text-center">
                                        <h3 className='app-intro-h3'>Why Akool Marketplace</h3>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="feature_cards">
                                    {
                                        product.features && product.features.map((feature, index) =>
                                            <div className={"feature_card d-flex align-items-start m-2"}>
                                                <div className="image_section">
                                                    <img src="/images/app_intro_feature.png" alt="feature" />
                                                </div>
                                                <div className="text_section">
                                                    <h3 className='app-intro-h3'>{feature.title}</h3>
                                                    <p>{feature.description}</p>
                                                </div>
                                            </div>)
                                    }

                                </div>

                            </div>
                        </div>
                    </section>

                    <section id="cta_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading_text text-center">
                                        <h3 className='app-intro-h3'>CTA Section</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <a href="true">Download an App</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta_top_shape">
                        </div>
                    </section>
                </div>}
        </div>
    )
}


export default AppIntroScreen