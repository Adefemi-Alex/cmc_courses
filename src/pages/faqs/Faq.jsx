import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import back from "../../assets/images/back.png";
import { data } from "./faqdata";

const Faq = () => {
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));
  const [moreInfo, setMoreInfo] = useState(Array(data.length).fill(false));
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setFilteredQuestions(data.slice(0, 4));
  }, []);

  const toggleOpen = (index) => {
    const newOpenStates = Array(data.length).fill(false);
    newOpenStates[index] = true;
    setOpenStates(newOpenStates);
  };
  const toggleInfo = (index) => {
    moreInfo[index] = !moreInfo[index];
    setMoreInfo([...moreInfo]);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowDropdown(query !== "");
    const filtered = data.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  const handleShowMore = () => {
    setFilteredQuestions(data);
    setExpanded(true);
  };

  const handleShowLess = () => {
    setFilteredQuestions(data.slice(0, 4));
    setExpanded(false);
  };

  const handleClickQuestion = (question) => {
    setSearchQuery(question);
    const index = data.findIndex((faq) => faq.question === question);
    if (index !== -1) {
      const newOpenStates = Array(data.length).fill(false);
      newOpenStates[index] = true;
      setOpenStates(newOpenStates);
    }
    setShowDropdown(false);
  };

  return (
    <div className="p-5" style={{ backgroundImage: `url(${back})` }}>
      <section className="w-full items-center justify-center text-center">
        <h1 className="text-lg">FAQs</h1>
        <span className="text-span text-fontSize1 sm:text-fontSize3">
          Ask us anything
        </span>
        <h1 className="text-lg">
          Have any questions? We're here to assist you
        </h1>
      </section>

      <div className="relative mx-auto mt-4 w-64">
        <input
          type="text"
          placeholder="Search FAQs"
          value={searchQuery}
          onChange={handleInputChange}
          className="p-2 pl-10 border border-gray-300 rounded-xl w-full"
        />
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {showDropdown && (
          <div className="absolute z-10 bg-white w-full border border-gray-300 rounded-md mt-1">
            {filteredQuestions.map((faq, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleClickQuestion(faq.question)}
              >
                {faq.question}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="faq-inner mt-24 py-16 px-8 flex justify-center items-center flex-col space-y-8">
        {filteredQuestions.map(({ id, question, answer }, index) => (
          <div className="faq-each bg-white text-black w-[896px] max-w-[80%] h-auto p-11 rounded-2xl">
            <div
              className="question-section flex justify-between items-center"
              key={id}
              onClick={() => toggleOpen(index)}
            >
              <h2>{question}</h2>
              <div
                className={`arrow p-2 text-[#33FFA8] shadow-lg rounded-full transition-all duration-500 ease-in-out ${
                  openStates[index] ? "rotate-90 background3 text-white" : ""
                }`}
              >
                <IoIosArrowForward size={25} className="cursor-pointer" />
              </div>
            </div>
            <div
              className={`mt-4 transition-all duration-500 ease-in-out ${
                openStates[index] ? "opacity-1 h-full" : "h-0 opacity-0"
              }`}
            >
              <p
                className={`text-[#6F6C90] ${
                  moreInfo[index] ? "line-clamp-none" : "line-clamp-2"
                } `}
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

      {!expanded ? (
        <button
          onClick={handleShowMore}
          className="background3 px-5 transition-all hover:font-semibold py-2 ml-52 text-white rounded-lg"
        >
          Show More
        </button>
      ) : (
        <button
          onClick={handleShowLess}
          className="background3 px-5 transition-all hover:font-semibold py-2 ml-52 text-white rounded-lg"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default Faq;
