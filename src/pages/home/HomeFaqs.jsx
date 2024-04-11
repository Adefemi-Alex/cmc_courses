import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector3.png";
import background from "../../assets/images/background.png";
import SingleQuestion from "../faqs/SingleQuestion";
import { data } from "./HomeFaqsData";

const HomeFaqs = () => {
  const [questions, setquestions] = useState(data);
  const [expanded, setExpanded] = useState(false);
  const dataToDisplay = expanded ? questions : questions.slice(0, 4);

  return (
    <>
      {/* Faqs */}
      <div
        className="-mt-20 z-0 w-full"
      >
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
        {/* Questions and Answers */}
        <div className="pt-20 px-40">
          {dataToDisplay.map((question) => (
            <SingleQuestion
              question={question.question}
              answer={question.answer}
              id={question.id}
              key={question.id}
            />
          ))}
        </div>

        {/* Faqs Button */}
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
