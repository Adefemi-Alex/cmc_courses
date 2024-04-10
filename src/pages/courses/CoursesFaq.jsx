import React from "react";
import { data } from "../../faqdata";
import { IoIosArrowForward } from "react-icons/io";
const CoursesFaq = () => {
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
          {data.slice(0, 4).map(({ id, question, answer, open }) => {
            return (
              <div
                className="faq-each bg-white text-black w-[896px] 
                max-w-[80%] h-auto p-11 rounded-2xl"
                key={id}
                onClick={() => {
                  open = !open;
                  console.log(open);
                }}
              >
                <div className="question-section flex justify-between ">
                  <h2>{question}</h2>
                  <div className="arrow p-2 background3 text-white rounded-full">
                    <IoIosArrowForward size={25} className="cursor-pointer" />
                  </div>
                </div>
                <p
                  className={`mt-4 text-[#6F6C90] line-clamp-2 h-0
                  ${open ? "h-full" : "h-full"}`}
                >
                  {answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursesFaq;
