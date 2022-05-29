import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialCarousel = ({ testimonials }) => {
    return (
        <OwlCarousel
            className="slider_section top_selected_apps_slider owl-carousel "
            margin={30} responsiveClassName={true} nav={true} dots={false} autoplay={false}
            navText={[
                `<div><img src="/images/slider_prev_arrow.png" alt="previous"/></div>`,
                `<div><img src="/images/slider_right_arrow.png" alt="next"/></div>`]}
            responsive={{ 0: { items: 1, }, 700: { items: 3, }, }}
        >
            {testimonials.map(testimonial =>

                <div className="testmonial_slider_card" >
                    <div className="image_section">
                        <img src={testimonial.image} alt="test" style={{ width: 'auto' }} />
                    </div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.description}</p>
                    <h5>{testimonial.date}</h5>
                    <div className="star_section">
                        {Array(testimonial.rating).fill(1).map(x => <span><i className="fa fa-star" aria-hidden="true"></i></span>)}
                    </div>
                </div>
            )}

        </OwlCarousel>)
}

export default TestimonialCarousel