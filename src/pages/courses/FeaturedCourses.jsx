import React, { useState } from "react";
import { recommended_Courses_Data, popular_Courses_Data } from "./CoursesCard";
const FeaturedCourses = () => {
  const [switcher1, setSwitch1] = useState(0);
  const [switcher2, setSwitch2] = useState(0);

  const generateSwitch = (setSwitch, switcher) => {
    return Array.from({ length: 3 }).map((_, index) => {
      return (
        <div
          key={index}
          className={` ${
            index == switcher ? " w-10 background3" : "w-3"
          } w-3 h-3 bg-[#D9D9D9] rounded-full transition-all duration-700`}
          onClick={() => {
            setSwitch(index);
          }}
        ></div>
      );
    });
  };
  return (
    <>
      <div className="py-14 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          featured courses
        </h1>

        {/* Recommended Courses Section */}
        <section className="Recommended py-16">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            recommended courses
          </h1>

          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14  ">
            {recommended_Courses_Data.map(
              ({ image, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-2xl rounded-lg bg-white ${
                      index == switcher1 ? "background3" : "bg-white"
                    }`}
                  >
                    <div className="py-6 px-2">
                      <div className="w-full h-full">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-auto rounded-lg hover:scale-[1.05] hover:mb-3 transition-all object-cover"
                        />
                      </div>
                      <h3
                        className={`mt-4 mb-2 rounded-lg py-2 px-4 w-fit text-base font-normal
                        ${
                          index == switcher1 ? "bg-white" : "background3"
                        } " bg-white`}
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

        {/* Popular courses Section */}
        <section className="Popular py-16">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            popular courses
          </h1>

          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14  ">
            {popular_Courses_Data.map(
              ({ image, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-2xl rounded-lg bg-white ${
                      index == switcher2 ? "background3" : "bg-white"
                    }`}
                  >
                    <div className="py-6 px-2">
                      <div className="w-full h-full">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-auto rounded-lg hover:scale-[1.05] hover:mb-3 transition-all object-cover"
                        />
                      </div>
                      <h3
                        className={`mt-4 mb-2 rounded-lg py-2 px-4 w-fit text-base font-normal
                        ${
                          index == switcher2 ? "bg-white" : "background3"
                        } " bg-white`}
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
            {generateSwitch(setSwitch2, switcher2)}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedCourses;
