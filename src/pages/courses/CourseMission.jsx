import React from "react";
import missionBg from "../../assets/images/photo-1530893609608-32a9af3aa95c.jpeg";
// import aboutimg1 from "../../assets/images/about/about1.png";
import about from "../../assets/images/about/about.svg";
const CourseMission = () => {
  return (
    <>
      <section className="mission-container py-20">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          our missions
        </h1>

        <div>
          <div className="flex sm:flex-col justify-between px-10 py-20 sm:p-3 tracking-wide">
            <div className="flex-1 mx-10 sm:m-3 py-5">
              <h2 className=" text-fontSize1 sm:text-fontSize3 text-[rgb(50,42,155)] font-bold mb-5 ">
                Everything you can do in physical classes,
                <span className="text-[#2afbbc]">
                  you can do with Expertskillz
                </span>
              </h2>
              <p className="text-gray-400 text-fontSize2 sm:text-sm font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. maiores
                animi dicta quidem quod rerum ex facilis ullam dolor labore, ea
                debitis incidunt quia ipsa vitae sapiente, iure sequi beatae?
              </p>
            </div>

            <div className="relative flex-1 mx-10 sm:my-10">
              <img
                src={about}
                alt="Card Image"
                className="absolute -top-11 -left-1 -z-50 sm:w-50 sm:-right-8"
              />
              <img
                src={missionBg}
                alt="Card Image"
                className="z-50 mx-10 sm:m-0"
              />
              <img
                src={about}
                alt="Card Image"
                className="absolute -bottom-10 -right-8 -z-50 sm:w-50"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseMission;
