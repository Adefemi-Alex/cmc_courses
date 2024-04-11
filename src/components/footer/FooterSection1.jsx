import React from "react";
import { FaChevronRight } from "react-icons/fa";
import person1 from "../../assets/images/Testimonial1.png";
import person2 from "../../assets/images/Testimonial2.png";
import person3 from "../../assets/images/Testimonial3.png";
import nextPerson from "../../assets/images/TestimonialNext.png";
import logo4 from "../../assets/images/logo4.png";

const FooterSection1 = () => {
  return (
    <>
      <div className="block justify-around items-left ml-20 w-full pt-20">
        {/* <div className="w-1/2 gap-5"> */}
        <div>
          <h1 className="text-5xl font-semibold text-white">
            What People are Saying About{" "}
            <span className="text-span">ExpertSkillz</span>
          </h1>
        </div>
        <div className="flex relative pt-10">
          <span className="text-span text-[200px] absolute bottom-0 -left-5">
            “
          </span>
          <p className=" text-base font-bold text-white mt-10 mb-8 mr-40">
            ExpertSkillz has been a total game-changer for me in the online
            world! Their first course which is their flagship course on
            Affiliate Marketing “CMC” is top-notch. With the trainings I got on
            CMC, I have seen massive results in no time even as a newbie!
            Another thing is, the mentorship on CMC is super beginner-friendly.
          </p>
          <span className="text-span text-[200px] rotate-180 absolute right-44 top-14">
            “
          </span>
        </div>
        <p className=" text-lg font-semibold text-white">- Adejumo Eniola</p>
        <div className="flex gap-3 ">
          <img src={person1} alt="card image" className=" w-20 h-20 sm:w-50" />
          <img src={person2} alt="card image" className="w-20 h-20 sm:w-50" />
          <img src={person3} alt="card image" className="w-20 h-20 sm:w-50" />
          <img
            src={nextPerson}
            alt="card image"
            className="w-20 h-20 sm:w-50"
          />
        </div>
        {/* Email section */}
        <div className="flex flex-col gap-3 justify-around items-center mt-20">
          <div className="w-60 -ml-96 mt-5">
            <img src={logo4} alt="logo" />
          </div>
          <div className="text-white -ml-[460px]">
            <p>Join Our Newsletter</p>
          </div>
          <div className="-ml-[290px]">
            <input
              type="text"
              placeholder="Enter your email here"
              className="border-2 border-white text-white rounded-full pl-5 pr-28 py-3 bg-transparent"
            />
            <button type="submit" className="absolute text-white text-fontSize2 cursor-pointer border border-background3 background3 rounded-full p-3 -ml-[51px] mt-0.5">
              <FaChevronRight />
            </button>

          </div>
          <div className="mt-20 -ml-[250px] text-white">
            <p>Copyright © 2024 ExpertSkillz. All right reserved.</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FooterSection1;
