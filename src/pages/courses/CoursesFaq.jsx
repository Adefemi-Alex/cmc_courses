import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { data } from ".././faqs/faqdata";
const CoursesFaq = () => {
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
      <div className="faq pt-44 pb-10 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          Frequently Asked Questions (FAQs):
        </h1>

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
                    openStates[index] ? "rotate-90 background3 text-white" : ""
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
                  className={` text-[#6F6C90] `}
                  // ${
                  //   moreInfo[index] ? "line-clamp-none" : "line-clamp-2"
                  // }
                >
                  {answer}
                </p>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    toggleInfo(index);
                  }}
                >
                  {/* {moreInfo[index] ? "See less" : "See more"} */}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <NavLink to="/faqs">
            <button className="background3 hover:background text-black w-[200px] font-bold py-2 px-4 rounded-full">
              See More
            </button>
          </NavLink>
        </div>
        {/* <Link to="/faqs">
            <p className="text-black font-bold text-lg background4 rounded-3xl border-[1px] border-solid border-black px-8 py-2">
              See more
            </p>
          </Link> */}
      </div>
    </>
  );
};

export default CoursesFaq;
