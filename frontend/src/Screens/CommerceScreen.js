import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TopApps from '../Components/TopApps';
import Helmet from 'react-helmet';

const CommerceScreen = () =>
    <div>
        <Helmet>
            <title>Commerce</title>
        </Helmet>
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text_section">
                            <h3>Commerce</h3>
                            <p>
                                Akool video and 3d solutions make your products closer to customers by video face swap and 3d modeling.
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

        <TopApps />

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
    </div>

export default CommerceScreen