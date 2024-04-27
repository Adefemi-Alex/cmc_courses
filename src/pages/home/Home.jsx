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
      <section className='gradient-background'>
        {/* Head */}
        <div className="mt-0 pb-10 font-nunito z-0 h-full w-full justify-center items-center">
          <div className="relative grid grid-cols-2 sm:grid-cols-1 sm:w-[767px] sm:h-[130vh] md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[570px]">
            <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full">
              <div className="mt-[100px]">
                <h1 className="font-bold text-5xl md:text-5xl xl:text-6xl leading-tight sm:text-center">
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
                <div className="mt-10 sm:-ml-6">
                  <NavLink to="/getstarted">
                    <button className="background3 hover:bg-white mr-10 w-full text-black font-bold py-2 px-4 rounded-full">
                      Get Started
                    </button>
                  </NavLink>
                </div>
                <div className="-mt-10 ml-90 w-full sm:invisible">
                  <img
                    src={HomeCurve}
                    alt="curve"
                    className="w-[950px] h-[180px]"
                  />
                </div>
              </div>
            </div>
            <div className="md:mx-0 ml-0 md:ml-2 xl:ml-4">
              <img src={HomeImg} alt="person" className="w-full h-full" />
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
      </section>
    </>
  );
}

export default Home;
