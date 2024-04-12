import React, { useState } from "react";
import { recommended_Courses_Data, popular_Courses_Data } from "./CoursesCard";
// import back from "../../assets/images/back.png";
const FeaturedCourses = () => {
  const [switcher, setSwitch] = useState(0);

  const generateSwitch = (setSwitch, switcher) => {
    return Array.from({ length: 3 }).map((_, index) => {
      return (
        <div
          key={index}
          className={` ${
            index === switcher ? " w-10 background3" : "w-3"
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
      <div className="py-4 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          featured courses
        </h1>

        {/* Recommended Courses Section */}
        <section className="Recommended pt-16">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            recommended courses
          </h1>

          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14  ">
            {recommended_Courses_Data.map(
              ({ image, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-2xl rounded-lg bg-white transition-all duration-700 cursor-pointer hover:scale-[1.05]"
                  >
                    <div className="">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-auto  hover:mb-3 transition-all object-cover"
                      />
                    </div>
                    <div className="inner py-3 pl-6">
                      <h3 className="mt-4 mb-2 background3 rounded-lg py-2 px-4 w-fit text-base font-normal">
                        {title}
                      </h3>
                      <p className="text-sm text-[#11F1F1] font-normal mt-3">
                        Upcoming
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Popular courses Section */}
        <section className="Popular pt-16">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            popular courses
          </h1>

          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14  ">
            {popular_Courses_Data.map(
              ({ image, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-2xl rounded-lg bg-white transition-all duration-700 cursor-pointer hover:scale-[1.05] ${
                      index === switcher ? "background3" : "bg-white"
                    }`}
                    onClick={() => {
                      setSwitch(index);
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
                          index === switcher ? "bg-white" : "background3"
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
            {generateSwitch(setSwitch, switcher)}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedCourses;
