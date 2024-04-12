import React from "react";
import { cards } from "../../components/main/WhyUsData";
import ChooseLine from "../../assets/images/ChooseLine.png";
import background from "../../assets/images/background.png";
import vector2 from "../../assets/images/Vector2.png";

const WhyChooseUs = () => {
  return (
    <>
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
            <img src={background} alt="line" className="w-full object-cover" />
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
          with ExpertSkillz.
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
    </>
  );
};

export default WhyChooseUs;