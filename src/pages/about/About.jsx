import React from "react";
import "./About.css";

import AboutSection1 from "../../components/about/About1";
import AboutSection2 from "../../components/about/OurMission";
import OurValues from "../../components/about/OurValues";
import AboutSection3 from "../../components/about/OurVisions";
import Testimonials from "../../components/about/Testimonials";
import AskQuestions from "../../components/main/Questions";

const About = () => {
  return (
    <>
      <section className="py-10 gradient-background">
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
        <Testimonials />
        <AskQuestions />
      </section>
    </>
  );
};

export default About;
