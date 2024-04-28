import React from "react";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector3.png";
import background from "../../assets/images/background.png";

const HowItWorks = () => {
  return (
    <>
      {/* How it works */}
      <div className="z-0 w-full bg-white">
        {/* Arrow and the spiral background image section */}
        <div className="flex justify-between mb-2">
          <div className="ml-30 mt-3  w-full h-full">
            <img
              src={ChooseLine}
              alt="line"
              className="ml-[57%] w-[200px] h-full object-cover"
            />
          </div>
          {/* Centered image */}
          <div className="w-[650px]">
            <img
              src={background}
              alt="line"
              className="w-full -mt-10 z-0 object-cover"
            />
          </div>
        </div>
        {/* Header section */}
        <div className="flex justify-center items-center -mt-80">
          <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
            Here's How It{" "}
            <span className="relative inline-block w-[130px]">
              Works
              <img
                src={vector}
                alt="line"
                className="absolute top-1/3 transform -translate-y-1/2 right-3 z-0 h-[70px] w-[400px]"
              />
            </span>
          </h1>
        </div>

        <h2 className="text-2xl mt-7 flex justify-center items-center">
          With ExpertSkillz, It's Easy To Learn and Earn
        </h2>
        <p className="mt-7 flex justify-center items-center mx-60">
          Stop struggling alone,Learning and succeding online hasn't been easy
          for many. With ExpertSkillz, it's easier than you think.
        </p>
        {/* Values */}
        <section>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-28 sm:gap-10 justify-between my-20 sm:m-10 mx-28">
            <div className="bg-white rounded-lg p-5 drop-shadow-[0_5px_3px_rgba(51,255,168,1)] w-[320px]">
              <div className="rounded-lg bg-white drop-shadow-[0_1px_5px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
                <span className="text-span text-lg">1</span>
              </div>
              <p className="my-3">Choose a Course</p>
              <p className="text-gray-500 text-sm">
                Choose from our variety of courses to start learning.{" "}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 drop-shadow-[0_5px_3px_rgba(51,255,168,1)] w-[320px]">
              <div className="rounded-lg bg-white drop-shadow-[0_1px_5px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
                <span className="text-span text-lg">2</span>
              </div>
              <p className="my-3">Get Started and Pay</p>
              <p className="text-gray-500 text-sm">
                Get started effortlessly and complete your payment securely.{" "}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 drop-shadow-[0_5px_3px_rgba(51,255,168,1)] w-[320px]">
              <div className="rounded-lg bg-white drop-shadow-[0_1px_5px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
                <span className="text-span text-lg">3</span>
              </div>
              <p className="my-3">Learn and Earn</p>
              <p className="text-gray-500 text-sm">
                Learn valuable skills and start earning from your expertise.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorks;
