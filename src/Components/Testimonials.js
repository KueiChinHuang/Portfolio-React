import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <SplideSlide>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>
                <a href={testimonials.website}>{testimonials.user}</a>
              </cite>
            </blockquote>
          </SplideSlide>
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
              <Splide
                options={{
                  type: "loop",
                  autoplay: true,
                  gap: "1rem",
                }}
              >
                {testimonials}
              </Splide>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
