import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import TopApps from '../Components/TopApps';
import ThreeDimensionalApps from '../Components/ThreeDimensionalApps';
import CommerceApps from '../Components/CommerceApps';
import MoreApps from '../Components/MoreApps';
import Helmet from 'react-helmet';

const CommerceScreen = () =>
    <div>
        <Helmet>
            <title>Akool</title>
        </Helmet>
        <Navbar />
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text_section">
                            <h3>Commerce</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                                <span>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                            </p>
                            <a href='true' title="buy button">Start Building Today</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image_section">
                            <div className="image text-center">
                                <img src="/images/banner_content.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a href='#use_case_section' className="go_to_bottom_icon">
                <img src="/images/go_to_bottom.png" alt="" />
            </a>
        </section>

        <section id="use_case_section">
            <img src="/images/use_case_banenr.png" alt="" className="uae_banner_image" />
            <div className="container use_case_section_container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="heading_text text-center">
                            <h3>Use Case</h3>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 px-0 px-col-false col-md-6 mb-md-2">
                        <div className="use_case_card pb-38">
                            <div className="image_section">
                                <img src="/images/use_case_card.png" alt="" />
                            </div>
                            <div className="text_section">
                                <h3>3D Object
                                    Creation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-md-2">
                        <div className="use_case_card">
                            <div className="image_section">
                                <img src="/images/use_case_card.png" alt="" />
                            </div>
                            <div className="text_section single_text">
                                <h3>Storage</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 px-0 px-col-false col-md-6 mb-md-2">
                        <div className="use_case_card pb-38">
                            <div className="image_section">
                                <img src="/images/use_case_card.png" alt="" />
                            </div>
                            <div className="text_section">
                                <h3>Content
                                    Manage</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-md-2">
                        <div className="use_case_card">
                            <div className="image_section">
                                <img src="/images/use_case_card.png" alt="" />
                            </div>
                            <div className="text_section single_text">
                                <h3>Deploy</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid use_case_section_container px-0">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video_image_section">
                            <img src="/images/video_bg.png" alt="video bg" className="w-100" />
                            <div className="video_icon ">
                                <div className="icon_inner">
                                    <a title="play" className="venobox" data-vbtype="iframe"
                                        href="https://www.youtube.com/watch?v=L_eyhzcFJ9Q">
                                        <i className="fa fa-play" aria-hidden="true" style={{ color: "black" }}></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="use_case_text_section">
                            <h3>Storage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.

                                <span>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.

                                </span>
                                <span className="last_span">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum

                                </span>
                            </p>

                            <a href='true' title="explore">Explore</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* feature part start  */}
        <section id="feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="heading_text text-center">
                            <h3>Features</h3>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="feature_cards">
                        <div className="feature_card d-flex align-items-start">
                            <div className="image_section">
                                <img src="/images/feature_card_image.png" alt="feature" />
                            </div>
                            <div className="text_section">
                                <h3>Feature 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="feature_card d-flex align-items-start ml-22">
                            <div className="image_section">
                                <img src="/images/feature_card_image.png" alt="feature" />
                            </div>
                            <div className="text_section">
                                <h3>Feature 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="feature_card d-flex align-items-start ml-22">
                            <div className="image_section">
                                <img src="/images/feature_card_image.png" alt="feature" />
                            </div>
                            <div className="text_section">
                                <h3>Feature 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        {/*  feature part end  */}

        <TopApps />

        <ThreeDimensionalApps whiteCarousel={true} />

        {/* Commerce Assets Editing Apps start  */}
        <CommerceApps />

        {/* Commerce Assets Editing Apps End  */}
        <MoreApps />

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
                                <div className="image_section w-100">
                                    <img src="/images/young-beautiful-woman-casual-outfit-isolated-studio.png"
                                        alt="lady pic" />
                                </div>
                                <div className="text_section">
                                    <h3 className="mb-0">Jane Johnson</h3>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        <span className="d-block">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                            id est laborum.
                                        </span>
                                    </p>
                                    <h5 className="mb-0">August 5th, 2021</h5>
                                </div>
                            </div>
                            <div className="customer_stories_slider_card d-flex">
                                <div className="image_section w-100">
                                    <img src="/images/young-beautiful-woman-casual-outfit-isolated-studio.png"
                                        alt="lady pic" />
                                </div>
                                <div className="text_section">
                                    <h3 className="mb-0">Jane Johnson</h3>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        <span className="d-block">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                            id est laborum.
                                        </span>
                                    </p>
                                    <h5 className="mb-0">August 5th, 2021</h5>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>


            </div>
        </section>
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_content_section">
                            <div className="footer_logo">
                                <a href='true'>
                                    <img src="/images/footer_logo.png" alt="footer logo" />
                                </a>
                            </div>
                            <div className="footer_nav_section">
                                <div className="footer_page_links">
                                    <ul className="first_list">
                                        <li><a href='true'>Products</a></li>
                                        <li><a href='true'>Company</a></li>
                                        <li><a href='true'>Privacy Policy</a></li>
                                    </ul>
                                    <ul className="last_list">
                                        <li><a href='true'>Solution</a></li>
                                        <li><a href='true'>Pricing</a></li>
                                        <li><a href='true'>Terms of Services</a></li>
                                    </ul>
                                </div>
                                <div className="footer_register_btn">
                                    <Link to='register'>Register</Link>
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
                        <div className="social_links">
                            <ul>
                                <li>
                                    <a href='true' title="Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='true' title="Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>

                                    </a>
                                </li>
                                <li>
                                    <a href='true' title="Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>

                                    </a>
                                </li>
                                <li>
                                    <a href='true' title="Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright_text">
                            <p>© 2021 by Akool Ltd. All rights reserved.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>

export default CommerceScreen