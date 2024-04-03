import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatar1 from "../../assets/images/Testimonial1.png";
import avatar2 from "../../assets/images/Testimonial2.png";
import avatar3 from "../../assets/images/Testimonial3.png";

const TestimonialCarousel = () => {
  return (
    <div className="w-full h-[300px]">
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div className="testimonial-item flex flex-col items-center justify-center">
          <div className="testimonial-text text-center text-green-500 text-lg">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla, massa eu lacinia dictum, lectus leo dignissim justo, nec
            sollicitudin justo lorem nec ex."
          </div>
          <div className="testimonial-name text-center">John Doe</div>
          <div className="testimonial-avatar">
            <img
              src={avatar1}
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
        <div className="testimonial-item flex flex-col items-center justify-center">
          <div className="testimonial-text text-center text-green-500 text-lg">
            "Sed eget bibendum nulla. Nulla at posuere urna, quis sodales magna.
            Ut venenatis mauris quis consectetur egestas."
          </div>
          <div className="testimonial-name text-center">Jane Smith</div>
          <div className="testimonial-avatar">
            <img
              src={avatar2}
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
        <div className="testimonial-item flex flex-col items-center justify-center">
          <div className="testimonial-text text-center text-green-500 text-lg">
            "Pellentesque malesuada tincidunt lectus, sed ultricies velit
            vestibulum nec. Fusce hendrerit ante nec interdum tempor."
          </div>
          <div className="testimonial-name text-center">David Johnson</div>
          <div className="testimonial-avatar">
            <img
              src={avatar3}
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
