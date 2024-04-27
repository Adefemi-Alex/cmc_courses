import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector3.png";
import background from "../../assets/images/background.png";
import { data } from "./HomeFaqsData";

const HomeFaqs = () => {
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));
  const [moreInfo, setMoreInfo] = useState(Array(data.length).fill(false));

  const toggleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  const toggleInfo = (index) => {
    moreInfo[index] = !moreInfo[index];
    setMoreInfo([...moreInfo]);
  };

  return (
    <>
      <div className="-mt-20 z-0 w-full">
        <div className="flex justify-between mb-2">
          <div className="ml-30 mt-40  w-full h-full">
            <img
              src={ChooseLine}
              alt="line"
              className="ml-[57%] mt-[6px] w-[200px] h-full object-cover"
            />
          </div>
          <div className="w-[650px]">
            <img src={background} alt="line" className="w-full object-cover" />
          </div>
        </div>
        <div className="flex justify-center items-center -mt-60">
          <h1 className="ml-8 text-4xl lg:text-5xl xl:text-6xl relative">
            Frequently Asked{" "}
            <span className="relative inline-block w-[190px]">
              Questions
              <img
                src={vector}
                alt="line"
                className="absolute top-2/3 transform -translate-y-1/2 right-2 z-0 h-[75px] w-[400px]"
              />
            </span>
          </h1>
        </div>
        <div className="faq-outer px-14">
          <div
            className="faq-inner  bg-[#F7F7FB] mt-24 py-16 px-8 flex justify-center items-center 
        flex-col space-y-8"
          >
            {data.slice(0, 4).map(({ id, question, answer }, index) => (
              <div className="faq-each bg-white text-black w-[896px] max-w-[80%] h-auto p-11 rounded-2xl">
                <div
                  className="question-section flex justify-between items-center"
                  key={id}
                  onClick={() => toggleOpen(index)}
                >
                  <h2>{question}</h2>
                  <div
                    className={`arrow p-2  text-[#33FFA8] shadow-lg rounded-full transition-all duration-500 ease-in-out   ${
                      openStates[index]
                        ? "rotate-90 background3 text-white"
                        : ""
                    }`}
                  >
                    <IoIosArrowForward size={25} className="cursor-pointer" />
                  </div>
                </div>
                <div
                  className={`mt-4 transition-all duration-500 ease-in-out  ${
                    openStates[index] ? "opacity-1 h-full" : "h-0 opacity-0"
                  }`}
                >
                  <p
                    className={` text-[#6F6C90] ${
                      moreInfo[index] ? "line-clamp-none" : "line-clamp-2"
                    }  
               `}
                  >
                    {answer}
                  </p>
                  {/* <span
                  className="cursor-pointer"
                  onClick={() => {
                    toggleInfo(index);
                  }}
                >
                  {moreInfo[index] ? "See less" : "See more"}
                </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <NavLink to="/faqs">
            <button className="background3 hover:background text-black w-[200px] font-bold py-2 px-4 rounded-full">
              See More
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeFaqs;
