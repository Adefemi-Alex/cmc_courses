import React from "react";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector3.png";
import background from "../../assets/images/background.png";
import Testimonials from "./Testimonial";

const StudentsRemark = () => {
  return (
    <>
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
            <img src={background} alt="line" className="w-full object-cover" />
          </div>
        </div>
        {/* Header section */}
        <div className="flex justify-center items-center -mt-[190px]">
          <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
            What{" "}
            <span className="relative inline-block  ">
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
        <Testimonials />
      </div>
    </>
  );
};

export default StudentsRemark;
