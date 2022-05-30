import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Tool from './Tool'

const Carousel = ({ data = [], white = false, }) => {
    // console.log(white);
    return (
        <OwlCarousel
            className="slider_section top_selected_apps_slider owl-carousel"
            margin={30} responsiveClass={true} nav={true} dots={false} autoplay={false}
            navText={[
                `<div><img src="/images/${white ? 'slider_prev_white.png' : 'slider_prev_arrow.png'}" alt="previous"/></div>`,
                `<div><img src="/images/${white ? 'slider_next_white.png' : 'slider_right_arrow.png'}" alt="next"/></div>`]}
            responsive={{ 0: { items: 1, }, 700: { items: 2, }, 1080: { items: 3 } }}
        >


            {data.map(item =>
                <Tool key={item._id} title={item.title} description={item.description} rating={item.rating} logo={item.logo} launchLink={item.link} />

            )}
            {/* <div className="slider_card first_slider_card">
                <div className="top_section">
                    <div className="image_section">
                        <img src="/images/slider_image.png" alt="slider" />
                    </div>
                    <div className="heart_icon_section">
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="bottom_section">
                    <h3>Akool Marketplace</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat.</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider_card first_slider_card">
                <div className="top_section">
                    <div className="image_section">
                        <img src="/images/slider_image.png" alt="slider" />
                    </div>
                    <div className="heart_icon_section">
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="bottom_section">
                    <h3>Akool Marketplace</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat.</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="slider_card first_slider_card">
                <div className="top_section">
                    <div className="image_section">
                        <img src="/images/slider_image.png" alt="slider" />
                    </div>
                    <div className="heart_icon_section">
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="bottom_section">
                    <h3>Akool Marketplace</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat.</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>

            </div> */}
        </OwlCarousel>)
}

export default Carousel