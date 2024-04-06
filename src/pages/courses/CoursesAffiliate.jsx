import React from "react";
import affliateImg from "../../assets/images/Affiliate_image.jfif";
import curve from "../../assets/images/HomeCurve.png";
import { HiUsers } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";
const CoursesAffiliate = () => {
  return (
    <>
      <section className="affiliate py-14 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          affliated courses
        </h1>
        <div className=" mt-24 affiliate-container flex justify-between items-center lg:flex-col xl:flex-row">
          <div className="affiliate-inner  w-[980px] relative rounded-b-2xl before:absolute before:rounded-b-2xl before:w-full before:h-full  before:filter before:backdrop-blur-sm before:top-0 ">
            <div className="terminal bg-[#EAEAEA] w-full h-8 flex items-center space-x-4 rounded-t-2xl">
              <div className="bg-red-600 w-4 h-4 rounded-full ml-4"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-600 w-4 h-4 rounded-full"></div>
            </div>
            <div className=" rounded-b-2xl">
              <div className="image-section ">
                {/* #EAEAEA    for terminal*/}
                <div
                  className="shadow-2xl  rounded-lg bg-white 
          "
                >
                  <div className="py-5 px-6">
                    <div className="w-full h-[200px]">
                      <img
                        src={affliateImg}
                        alt="affiliate image"
                        className="w-full h-full rounded-lg  transition-all object-cover"
                      />
                    </div>
                    <div className="affiliate-info flex space-x-4   items-center justify-between  text-sm font-normal my-8">
                      <div className="">
                        <h4 className="font-bold text-2xl">CMC</h4>
                        <p>Learn Affiliate Marketing with CMC</p>
                      </div>
                      <div className="">
                        <p className="text-black  background3 rounded-2xl border-1 border-solid border-black px-8 py-2">
                          Start Now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AFFILIATE START */}

            <div className="affiliate-inner  w-[630px] absolute top-16 left-12">
              <div className="terminal bg-[#EAEAEA] w-full h-8 flex items-center space-x-4 rounded-t-2xl">
                <div className="bg-red-600 w-4 h-4 rounded-full ml-2"></div>
                <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
                <div className="bg-green-600 w-4 h-4 rounded-full"></div>
              </div>
              <div className=" rounded-b-2xl shadow-2xl  bg-white">
                <div className="image-section ">
                  <div className="  rounded-lg">
                    <div className="py-5 px-9">
                      <div className="w-full h-[200px]">
                        <img
                          src={affliateImg}
                          alt="affiliate image"
                          className="w-full h-full rounded-lg  transition-all object-cover"
                        />
                      </div>
                      <div className="affiliate-info flex space-x-5 w-full items-center justify-between  text-sm font-normal my-8">
                        <div className="">
                          <h4 className="font-bold text-2xl">CMC</h4>
                          <p>Learn Affiliate Marketing with CMC</p>
                        </div>
                        <p className="text-black font-light text-lg background4 rounded-3xl border-[1px] border-solid border-black px-8 py-2">
                          Start Now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-8  -right-8 -z-50 w-[118px] h-[118px] sm:-right-8
               background3 rounded-full p-7"
            ></div>
            <IoMdPlay
              size={34}
              className="absolute top-6 -right-20 rotate-[18.24deg] text-[#0A9393]"
            />
            <div
              className="absolute -top-4  right-[-1.1rem] -z-30 w-[80px] h-[80px] sm:-right-8
                bg-white rounded-full p-7"
              // style={{ backgroundImage: `url(${back})` }}
            ></div>
            <div
              className="absolute -bottom-8  -left-8 -z-50 w-[118px] h-[147px] sm:-left-8
            background3 rounded-xl"
            ></div>
            <div className="user-icon text-[#0DB7B7] absolute top-10 left-5 rounded-full border-[14px] border-[rgba(230,230,230,0.6)]  -rotate-12">
              <div className="inner p-2 rounded-full bg-white ">
                <HiUsers size={35} className="" />
              </div>
            </div>
            <div className="curve absolute w-[300px] -bottom-7 right-[-20rem]">
              <img src={curve} alt="curve" className="w-[100%] rotate-12" />
            </div>

            {/* AFFILIATE END */}
          </div>
          <div className="word-section pl-40">
            <div className="word-inner flex flex-col justify-center  space-y-16">
              <h2 className="text-[#33FFA8] font-semibold text-fontSize1">
                CMC
              </h2>

              <p className="text-lg">
                Introducing CMC as a blueprint to learrn and start affilate
                marketing
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesAffiliate;
