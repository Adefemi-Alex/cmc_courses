import React from "react";
import back from "../../assets/images/back.png";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaBookAtlas } from "react-icons/fa6";
import { BiListCheck } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
const CoursesChoice = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${back})` }}>
        {/* {" "} */}

        <div className="choices-container pt-44 pb-10 px-10 ">
          <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
            Why Choose ExpertSkillz
          </h1>
          <div className="courses-inner flex justify-center space-x-12 pt-12 font-semibold text-center">
            <div className="each-course w-[360px] h-[259px] shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-32 background3">
                <HiOutlineUsers size={34} className="" />
              </div>

              <p>
                Experienced
                <br /> Instructors
              </p>
            </div>
            <div className="each-course w-[360px] h-[259px] shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-32 background3">
                <LuBookOpenCheck size={34} className="" />
              </div>

              <p>
                Practical and hands-
                <br />
                learning approach
              </p>
            </div>
            <div className="each-course w-[360px] h-[259px] shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-32  background3">
                <FaBookAtlas size={34} className="" />
              </div>

              <p>
                Comprehensive course
                <br />
                materials
              </p>
            </div>
          </div>

          <div className="courses-inner flex justify-center space-x-12 pt-12 font-semibold text-center">
            <div className="each-course w-[360px] h-[259px] shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-32 background3">
                <BiListCheck size={34} className="" />
              </div>

              <p>
                Flexibility in
                <br /> learning options
              </p>
            </div>
            <div className="each-course w-[360px] h-[259px] shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-32 background3">
                <BsPersonCheck size={34} className="" />
              </div>

              <p>
                Success stories
                <br />
                from past students
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesChoice;
