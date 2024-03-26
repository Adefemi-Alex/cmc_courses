import React from "react";
// Import Swiper React components
// Import Swiper styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import "./Home.css";
// react icons

import { NavLink } from "react-router-dom";
import ChooseLine from "../assets/images/ChooseLine.png";
import HomeCurve from "../assets/images/HomeCurve.png";
import HomeImg from "../assets/images/HomeImg.png";
import HomeLine from "../assets/images/HomeLine.png";
import vector from "../assets/images/Vector2.png";
import back from "../assets/images/back.png";
import background from "../assets/images/background.png";
import CardCarousel from "../components/CardCarousel";

function Home() {
  return (
    <>
      {/* Head */}
      <div
        className="font-nunito h-full w-full justify-center items-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="relative flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[470px]">
          <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full">
            <div>
              <h1 className="font-nunito font-bold text-5xl md:text-5xl xl:text-6xl leading-tight">
                Discover limitless learning and earning possibilities
                <span className="text-span"> Online</span>
              </h1>
            </div>
            <div>
              <img
                src={HomeLine}
                alt="line"
                className="w-[350px] h-[40px] ml-8 mt-8"
              />
            </div>
            <div>
              <p className="ml-8 mt-10">
                Unleash Your Potential: Discover and cultivate your skills for
                financial growth with ExpertSkillz.
              </p>
            </div>
            <div className="flex items-center ml-40">
              {/* Get Started */}
              <NavLink to="/getstarted">
                <button className="background2 hover:background text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </NavLink>
              <div className="">
                <img
                  src={HomeCurve}
                  alt="curve"
                  className="w-[950px] h-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 md:mx-0 ml-0 md:ml-2 xl:ml-4">
            <img
              src={HomeImg}
              alt="person"
              className="w-[800px] h-[650px] object-cover"
            />
          </div>
        </div>
        {/* Why choose us */}
        <div className="mt-4 z-0 ">
          {/* Arrow and the spiral background image section */}
          <div className="flex justify-between mb-0">
            <div className="ml-30 mt-40  w-full h-full">
              <img
                src={ChooseLine}
                alt="line"
                className="ml-[57%] mt-[6px] w-[200px] h-full object-cover"
              />
            </div>
            {/* Centered image */}
            <div className="w-[650px]">
              <img
                src={background}
                alt="line"
                className="w-full object-cover"
              />
            </div>
          </div>
          {/* Header section */}
          <div className="flex justify-center items-center -mt-60">
            <h1 className="ml-10 text-4xl lg:text-5xl xl:text-6xl relative">
              Why Choose{" "}
              <span className="relative inline-block w-20">
                Us?
                <img
                  src={vector}
                  alt="line"
                  className="absolute top-1/3 transform -translate-y-1/2 right-2 z-0 h-15 w-[100px]"
                />
              </span>
            </h1>
          </div>
          <p className="mt-7 flex justify-center items-center ml-10">
            Experience boundless opportunities at your fingertips
            with ExpertSkillz.
          </p>
          <CardCarousel />
        </div>
      </div>
    </>
  );
}

export default Home;
