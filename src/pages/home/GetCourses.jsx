import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector3.png";
import background from "../../assets/images/background.png";
import { recommended_Courses_Data } from "../courses/CoursesCard";

const GetCourses = () => {
  const [switcher1, setSwitch1] = useState(0);
  const [switcher2, setSwitch2] = useState(0);

  const generateSwitch = (setSwitch, switcher) => {
    return Array.from({ length: 3 }).map((_, index) => {
      return (
        <div
          key={index}
          className={` ${
            index == switcher ? " w-10 background3" : "w-3"
          }  h-3 bg-[#D9D9D9] cursor-pointer rounded-full transition-all duration-700`}
          onClick={() => {
            setSwitch(index);
          }}
        ></div>
      );
    });
  };
  return (
    <>
      {/* Get Courses */}

      <div className="-mt-20 z-0 w-full">
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
        <div className="flex justify-center items-center -mt-60">
          <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
            Get{" "}
            <span className="relative inline-block w-[170px]">
              Courses
              <img
                src={vector}
                alt="line"
                className="absolute top-1/3 transform -translate-y-1/2 right-3 z-0 h-[70px] w-[400px]"
              />
            </span>
          </h1>
        </div>

        <h2 className="text-2xl mt-7 flex justify-center items-center">
          Explore Our Popular Classes
        </h2>
        <p className="mt-7 flex justify-center items-center mx-60">
          Unlock the path to success with our exceptional done for you
          blueprints. Explore a diverse range of courses covering trending
          online skills and model. Choose the one that best suits your interest
          and financial goals.
        </p>
        <section className="Recommended py-16">
          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14  ">
            {recommended_Courses_Data.map(
              ({ image, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-2xl rounded-lg bg-white transition-all duration-700 cursor-pointer hover:scale-[1.05] ${
                      index == switcher1 ? "background3" : "bg-white"
                    }`}
                    onClick={() => {
                      setSwitch1(index);
                    }}
                  >
                    <div className="py-6 px-2">
                      <div className="w-full h-full">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-auto rounded-lg  hover:mb-3 transition-all object-cover"
                        />
                      </div>
                      <h3
                        className={`mt-4 mb-2 rounded-lg py-2 px-4 w-fit text-base font-normal
                        ${
                          index == switcher1 ? "bg-white" : "background3"
                        } " bg-white transition-all duration-700`}
                      >
                        {title}
                      </h3>
                      <p className="text-sm text-[#4F4E55] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam mollitia optio delectus libero iste nostrum quos
                        quaerat qui, voluptatibus ea.
                        {/* {description} */}{" "}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="pickers flex justify-center gap-2 mt-10">
            {generateSwitch(setSwitch1, switcher1)}
          </div>
        </section>

        {/* Explore Button */}
        <div className="flex justify-center w-full">
          {/* Get Started */}
          <NavLink to="/courses">
            <button className="background3 hover:background text-black w-[200px] font-bold py-2 px-4 rounded-full">
              Explore
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default GetCourses;
