import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"; // Import Swiper bundle CSS

import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

const CardCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="mx-20 w-full max-w-screen-lg"
    >
      {/* Card 1 */}
      <SwiperSlide>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-90">
          <div className="relative">
            <img
              src={icon1}
              alt="Card Image"
              className="absolute top-0 left-0 w-20 h-32"
            />
          </div>
          <div className="p-4 flex flex-col justify-center h-full">
            <h1 className="text-black text-xl font-bold mt-20 mb-2">
              Quality Training
            </h1>
            <p className="text-gray-700">
              We are committed to delivering high-quality training and
              mentorship.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 2 */}
      <SwiperSlide>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-90">
          <div className="relative">
            <img
              src={icon2}
              alt="Card Image"
              className="absolute top-4 left-4 w-13 h-14"
            />
          </div>
          <div className="p-4 flex flex-col justify-center h-full">
            <h1 className="text-black text-xl font-bold mt-20 mb-2">
              100% Expertise
            </h1>
            <p className="text-gray-700">
              Our team comprises of industry experts with a wealth of
              experience.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 3 */}
      <SwiperSlide>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-90">
          <div className="relative">
            <img
              src={icon3}
              alt="Card Image"
              className="absolute top-4 left-4 w-13 h-14"
            />
          </div>
          <div className="p-4 flex flex-col justify-center h-full">
            <h1 className="text-black text-xl font-bold mt-20 mb-2">
              Success Dedication
            </h1>
            <p className="text-gray-700">
              We are invested in your success from day one till you achieve your
              goal.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 4 */}
      <SwiperSlide>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-90">
          <div className="relative">
            <img
              src={icon4}
              alt="Card Image"
              className="absolute top-4 left-4 w-13 h-14"
            />
          </div>
          <div className="p-4 flex flex-col justify-center h-full">
            <h1 className="text-black text-xl font-bold mt-20 mb-2">
              Continuous Support
            </h1>
            <p className="text-gray-700">
              Our dedication doesn't end with a course; we are here for you at
              every step.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;
