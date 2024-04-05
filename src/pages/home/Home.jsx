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
import ChooseLine from "../../assets/images/ChooseLine.png";
import HomeCurve from "../../assets/images/HomeCurve.png";
import HomeImg from "../../assets/images/HomeImg.png";
import HomeLine from "../../assets/images/HomeLine.png";
import vector2 from "../../assets/images/Vector2.png";
import vector from "../../assets/images/Vector3.png";
import back from "../../assets/images/back.png";
import background from "../../assets/images/background.png";
import HomeImg2 from "../../assets/images/person2.png";
import { cards } from "../../components/main/WhyUsData";
import HomeTestimonial from "./HomeTestimonial";

function Home() {
  return (
    <>
      {/* Head */}
      <div
        className="mt-0 mb-40 font-nunito z-0 h-full w-full justify-center items-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="relative flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[570px]">
          <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full z-0">
            <div className="mt-[100px]">
              <h1 className="font-bold text-5xl md:text-5xl xl:text-6xl leading-tight">
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
              <div className="mt-10">
                <NavLink to="/getstarted">
                  <button className="background3 hover:bg-white mr-10 w-full text-black font-bold py-2 px-4 rounded-full">
                    Get Started
                  </button>
                </NavLink>
              </div>
              <div className="-mt-10 ml-90 w-full">
                <img
                  src={HomeCurve}
                  alt="curve"
                  className="w-[950px] h-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="md:mx-0 ml-0 md:ml-2 xl:ml-4">
            <img
              src={HomeImg}
              alt="person"
              className="w-[800px] h-[650px] object-fit"
            />
          </div>
        </div>

        {/* Why choose us */}
        <div className="-mt-20 z-0 ">
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
                  src={vector2}
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
          {/* Card Section */}
          <div className="grid grid-cols-4 gap-4 mx-20 my-10">
            {cards.map((cards, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={cards.image}
                    alt="Card Image"
                    className="absolute top-4 left-4 w-13 h-14"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center h-full">
                  <h1 className="text-black text-xl font-bold mt-20 mb-2">
                    {cards.title}
                  </h1>
                  <p className="text-gray-700">{cards.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Us section */}

        <div
          className="-mt-14"
          // style={{ backgroundImage: `url(${back})` }}
        >
          {/* Arrow and the spiral background image section */}
          <div className="flex justify-between mb-0">
            <div className="ml-30 mt-40  w-full h-full">
              <img
                src={ChooseLine}
                alt="line"
                className="ml-[57%] mt-[6px] w-[200px] h-full object-fit"
              />
            </div>
            {/* Centered image */}
            <div className="w-[650px] h-full">
              <img src={background} alt="line" className="w-full object-fit" />
            </div>
          </div>

          {/* About Header section */}

          <div className="flex justify-center items-center -mt-60 w-full h-full">
            {/* <div className="ml-10 text-4xl lg:text-5xl xl:text-6xl"> */}
            <h1 className="ml-10 text-4xl lg:text-5xl xl:text-6xl relative">
              About{" "}
              <span className="relative inline-block w-20">
                Us?
                <img
                  src={vector2}
                  alt="line"
                  className="absolute top-1/3 transform -translate-y-1/2 right-2 z-0 h-15 w-[100px]"
                />
              </span>
            </h1>
            {/* </div> */}
          </div>
          {/* About us body */}
          <div className="relative flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[470px]">
            <div className="mt-4 md:mx-0 ml-8 md:ml-2 xl:ml-4">
              <img
                src={HomeImg2}
                alt="person"
                className="w-[680px] h-[500px] object-fit"
              />
            </div>
            <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full">
              <div className="mt-40">
                <h1 className="font-nunito font-bold text-4xl md:text-4xl xl:text-5xl leading-tight">
                  High-Quality Trainings and Guidance to Achieve Great Results
                  with Your Online Skill.
                </h1>
              </div>
              <div>
                <p className="mt-10">
                  Our premium training and tailored guidance empower you to
                  succeed regardless of your prior experience.
                </p>
              </div>
              <div className="flex items-left mt-10">
                {/* Get Started */}
                <NavLink to="/getstarted">
                  <button className="background3 hover:background text-black font-bold py-2 px-4 rounded-full">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Get Courses */}

        <div className="-mt-20 z-0 w-full">
          {/* Arrow and the spiral background image section */}
          <div className="flex justify-between mb-2">
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
            <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
              Get{" "}
              <span className="relative inline-block w-[170px]">
                Courses
                <img
                  src={vector}
                  alt="line"
                  className="absolute top-1/3 transform -translate-y-1/2 right-3 z-0 h-[70px] w-[400px]"
                />
              </span>
            </h1>
          </div>

          <h2 className="text-2xl mt-7 flex justify-center items-center">
            Explore Our Popular Classes
          </h2>
          <p className="mt-7 flex justify-center items-center mx-60">
            Unlock the path to success with our exceptional done for you
            blueprints. Explore a diverse range of courses covering trending
            online skills and model. Choose the one that best suits your
            interest and financial goals.
          </p>
          {/* Card Section */}
          {/* <CoursesCard /> */}

          {/* Explore Button */}
          <div className="flex justify-center w-full">
            {/* Get Started */}
            <NavLink to="/getstarted">
              <button className="background3 hover:background text-black w-[200px] font-bold py-2 px-4 rounded-full">
                Explore
              </button>
            </NavLink>
          </div>
        </div>

        {/* Students Remark */}

        <div className="-mt-40 z-0 w-full">
          {/* Arrow and the spiral background image section */}
          <div className="flex justify-between mb-2">
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
          <div className="flex justify-center items-center -mt-[190px]">
            <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
              What{" "}
              <span className="relative inline-block ml-3 -mr-3 w-[180px]">
                Students
                <img
                  src={vector}
                  alt="line"
                  className="absolute top-1/3 transform -translate-y-1/2 right-4 z-0 h-[80px] w-[190px]"
                />
              </span>
              Say About Us
            </h1>
          </div>
          <HomeTestimonial/>
        </div>

        {/* Learn and Earn section */}

        <div className="relative flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[570px]">
          <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full z-0">
            <div className="mt-[150px]">
              <h1 className="font-bold text-5xl md:text-5xl xl:text-6xl leading-tight">
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
              <div className="mt-10">
                <NavLink to="/getstarted">
                  <button className="background3 hover:bg-white mr-10 w-full text-black font-bold py-2 px-4 rounded-full">
                    Get Started
                  </button>
                </NavLink>
              </div>
              <div className="-mt-10 ml-90 w-full">
                <img
                  src={HomeCurve}
                  alt="curve"
                  className="w-[950px] h-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="md:mx-0 ml-0 md:ml-2 xl:ml-4">
            <img
              src={HomeImg}
              alt="person"
              className="w-[800px] h-[650px] object-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
