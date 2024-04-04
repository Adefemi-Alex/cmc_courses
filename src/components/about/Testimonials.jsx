import React from "react";
import "../../pages/about/About.css";

import about from "../../assets/images/about/decorative_images/decorativeImage.svg";
import about1 from "../../assets/images/about/decorative_images/decorativeImage2.svg";
import about2 from "../../assets/images/about/decorative_images/decorativeImage3.svg";
import person from "../../assets/images/Testimonial1.png";

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="w-full items-center justify-center text-center mb-12">
          <h1 className="text-fontSize1 sm:text-fontSize2">Testimonials</h1>
          <span className="text-fontSize3 sm:text-fontSize4 sm:mx-1">
            Join Thousands of Satisfied Learners Who Have Achieved Success With
            ExpertSkillz. Hear What Our Users Have To Say About Us:
          </span>
        </div>
        <div className="items-center justify-center relative py-10">
          <img
            src={about2}
            alt="Card Image"
            className="absolute top-20 left-32 -z-50 sm:w-50 sm:top-0 sm:left-16"
          />
          <img
            src={about1}
            alt="Card Image"
            className="absolute top-10 left-20 -z-50 sm:w-50 sm:-top-5 sm:left-5"
          />
          <div className="relative sm:my-10 mx-60 sm:mx-2 my-10">
            <img
              src={about}
              alt="Card Image"
              className="absolute -top-11 right-0 -z-50 sm:w-50 sm:-right-0"
            />
            <div className="bg-white justify-center items-center text-center mx-20 px-20 sm:m-5 sm:p-5 relative">
              <h2 className="pt-10 text-fontSize2">Adejumo Eniola</h2>
              <div className="flex py-10">
                <span className="text-span text-[200px] absolute left-10 top-0">
                  “
                </span>
                <p className="text-fontSize3 text-base px-10 w-full">
                  ExpertSkillz has been a total game-changer for me in the
                  online world! Their first course which is their flagship
                  course on Affiliate Marketing “CMC” is top-notch. With the
                  trainings I got on CMC, I have seen massive results in no time
                  even as a newbie! Another thing is, the mentorship on CMC is
                  super beginner-friendly. <br></br>
                  <br></br>
                </p>
                <span className="text-span text-[200px] absolute right-10 -bottom-7 rotate-180">
                  “
                </span>
              </div>
              <div className="triangle rotate-180 w-10 h-20"></div>
            </div>
            <img
              src={person}
              alt="card image"
              className="absolute ml-[57vh] mt-[60px]"
            />
            <img
              src={about}
              alt="Card Image"
              className="absolute -bottom-10 left-0 -z-50 sm:w-50"
            />
          </div>
          <img
            src={about1}
            alt="Card Image"
            className="absolute bottom-20 right-32 -z-50 sm:w-50 sm:bottom-0 sm:right-16"
          />
          <img
            src={about2}
            alt="Card Image"
            className="absolute bottom-10 right-20 -z-50 sm:w-50 sm:-bottom-5 sm:right-5"
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
