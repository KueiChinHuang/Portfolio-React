import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>
              <a href={testimonials.website}>{testimonials.user}</a>
            </cite>
          </blockquote>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <Slider autoplay={true} autoplaySpeed={2000} slidesToShow={0.998}>
                {testimonials}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
