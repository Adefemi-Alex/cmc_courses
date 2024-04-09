import React from "react";
import { NavLink } from "react-router-dom";
import HomeCurve from "../../assets/images/HomeCurve.png";
import HomeImg from "../../assets/images/HomeImg.png";
import HomeLine from "../../assets/images/HomeLine.png";
import back from "../../assets/images/back.png";
import AboutUs from "./AboutUs";
import GetCourses from "./GetCourses";
import HomeAffliate from "./HomeAffliate";
import HomeFaqs from "./HomeFaqs";
import HowItWorks from "./HowItWorks";
import StudentsRemark from "./StudentsRemark";
import WhyChooseUs from "./WhyChooseUs";

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
              className="w-[800px] h-[500px] object-fit"
            />
          </div>
        </div>
        <WhyChooseUs />
        <AboutUs />
        <GetCourses />
        <StudentsRemark />
        <HomeAffliate />
        <HowItWorks />
        <HomeFaqs />
      </div>
    </>
  );
}

export default Home;
