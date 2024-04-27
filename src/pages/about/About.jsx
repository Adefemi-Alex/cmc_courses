import React from "react";
import "./About.css";
import back from "../../assets/images/back.png";
import AboutSection1 from "../../components/about/About1";
import AboutSection2 from "../../components/about/OurMission";
import OurValues from "../../components/about/OurValues";
import AboutSection3 from "../../components/about/OurVisions";
import Testimonials from "../home/Testimonial";
import AskQuestions from "../../components/main/Questions";

const About = () => {
  return (
    <>
      <section className="py-10" style={{ backgroundImage: `url(${back})` }}>
        <div className=" w-full items-center justify-center text-center">
          <h1 className="text-lg">About Us</h1>
          <span className="text-span text-fontSize1 sm:text-fontSize3">
            Everything You Need To Know About ExpertSkillz
          </span>
        </div>
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <OurValues />
        <div className="w-full items-center justify-center text-center mb-12 ">
          <h1 className="text-fontSize1 sm:text-fontSize2">Testimonials</h1>
          <p className="text-fontSize3 sm:text-fontSize4 sm:mx-1 font-semibold">
            Join Thousands of Satisfied Learners Who Have <br /> Achieved
            Success With ExpertSkillz.
          </p>
          <p className="pt-7 text-fontSize3 sm:text-fontSize4 sm:mx-1 font-semibold">
            Hear What Our Users Have To Say About Us:
          </p>
        </div>
        <Testimonials />
        <AskQuestions />
      </section>
    </>
  );
};

export default About;
