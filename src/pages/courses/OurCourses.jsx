import { useState } from "react";
import { popular_Courses_Data } from "./CoursesCard";
import back from "../../assets/images/back.png";
import courseimg1 from "../../assets/images/OurCoursesImg.jfif";
import { IoStar } from "react-icons/io5";
import person1 from "../../assets/images/Testimonial1.png";
import person2 from "../../assets/images/Testimonial2.png";

const OurCourses = () => {
  const reviewsData = [
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person1,
    },
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person2,
    },
  ];

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
      <section
        className="hero bg-cover bg-center object-cover h-[500px] w-full relative z-10 flex justify-end items-end"
        style={{ backgroundImage: `url(${courseimg1})` }}
      >
        <div className="inner w-[24rem] h-[250px] p-4 pb-0 object-cover bg-white mr-32 rounded-t-lg ">
          <img
            src={courseimg1}
            alt="course image"
            className="  rounded-t-lg h-full w-full"
          />
        </div>
      </section>

      <section
        className="font-nunito z-0 h-full w-full pt-10  bg-cover "
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="affiliate container flex justify-between px-7 pt-8">
          <div className="affiliate-marketing w-1/2">
            <div className="marketing px-7 ">
              <h1 className="text-black text-center capitalize text-fontSize2 sm:text-fontSize3">
                Affiliate Marketing
              </h1>
              <p className="tracking-wider text-sm pt-7 px-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                animi est culpa recusandae nisi accusantium similique veniam eos
                eum ad rerum ratione dignissimos officia quas iusto modi
                voluptates, illo vero, sequi asperiores minima et beatae aut
                placeat? Aliquid, modi perspiciatis?
              </p>
            </div>
            <div
              className="reviews  z-0 px-7 py-2 bg-cover "
              style={{ backgroundImage: `url(${back})` }}
            >
              {reviewsData.map(({ name, quote, personImage }, index) => {
                return (
                  <div
                    className={`each-speaker  py-4  w-fit                  
                     ${
                       index == reviewsData.length - 1
                         ? "border-t-2 border-[#696984]"
                         : ""
                     }`}
                    key={index}
                  >
                    <div className="person flex  space-x-2 ">
                      <div className="image-con w-[100px] h-[100px]">
                        <img src={personImage} alt={name} className="w-full " />
                      </div>
                      <div className="name pt-3">
                        <p>{name}</p>
                        <div className="stars flex space-x-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <IoStar
                              key={index}
                              id={`Star ${index + 1}`}
                              style={{ color: "orange" }}
                              size={18}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="message text-sm line-clamp-3 pt-4 tracking-wide">
                      <p>{quote}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* PRICING SECTION  */}
          <div className="pricing flex justify-center flex-col space-y-7 w-1/2 pl-14">
            <div className="prices flex justify-start items-center space-x-8">
              <p className="font-bold text-2xl">$49.65</p>
              <p className="text-gray-400 line-through ">$99.99</p>
              <p className="text-gray-400">50% Off</p>
            </div>

            <button
              href="#"
              className="background3 text-center text-black text-md py-2 px-4 mr-6 rounded-md border border-black flex justify-center items-center gap-3"
            >
              Start Now
            </button>
            <hr className="text-gray-300" />
            <div className="objectives">
              <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
                Key Learning Objectives
              </h1>
              <ol
                className=" text-sm list-inside list-decimal space-y-3 pr-5"
                type="1"
              >
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iste, expedita.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iste, expedita.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iste, expedita.
                </li>
              </ol>
            </div>
            <hr className="text-gray-300" />
            <div className="who">
              <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
                Who is this Course for?
              </h1>
              <p className="pt-5 pr-5 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                nemo facilis non nulla odio cumque tenetur. Doloremque ducimus
                vero rem!
              </p>
            </div>

            <h1 className="text-black text-fontSize2 sm:text-fontSize3">
              Share this Course
            </h1>
          </div>
        </div>

        <section className="Popular py-16 px-10">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            Recommended for you
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
      </section>
    </>
  );
};

export default OurCourses;
