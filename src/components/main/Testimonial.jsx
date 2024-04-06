import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import homeBg from "../../assets/images/homebg2.jpg";
import Features from "./Features";
import Courses from "./Courses";
import Reviews from "./Reviews";

function Testimonial() {
  return (
    <>
      <figure className="relative h-[300px]">
        <img src={homeBg} alt="contact background" className="h-full w-full" />
        <div
          className="bg-backgroundRgba h-[100%] w-full top-0 absolute 
    flex items-center justify-center text-center p-11 flex-col"
        >
          <h2 className="text-lightBlue text-fontSize1 font-semibold sm:font-[500] sm:text-fontSize2">
            Need assistance or have any inquiries? Dont hestitate to reach out.
          </h2>
          <p className="text-white text-fontSize2 sm:text-fontSize3">
            We Love hearing from your
          </p>
          <Link
            to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
            className="bg-lightBlue p-[10px] rounded-md mt-2
        py-[10px] px-[30px] text-white hover:font-semibold
        hover:bg-lightpurple"
          >
            Enroll Now
          </Link>
        </div>
      </figure>

      <Reviews />
      <Features />
      <Courses />
    </>
  );
}

export default Testimonial;
