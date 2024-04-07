import React from "react";
import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector2 from "../../assets/images/Vector2.png";
import background from "../../assets/images/background.png";
import HomeImg2 from "../../assets/images/person2.png";

const AboutUs = () => {
  return (
    <>
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
              className="w-[980px] h-[500px] object-fit"
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
    </>
  );
};

export default AboutUs;
