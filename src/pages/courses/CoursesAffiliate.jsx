import React from "react";
import affliateImg from "../../assets/images/Affiliate_image.jfif";
const CoursesAffiliate = () => {
  return (
    <>
      <section className="affiliate py-14 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          affliated courses
        </h1>
        <div className="affiliate-container flex items-center">
          <div className="affiliate-inner  w-[680px] relative rounded-b-2xl before:absolute before:rounded-b-2xl before:w-full before:h-full  before:filter before:backdrop-blur-sm before:top-0 ">
            <div className="terminal bg-[#EAEAEA] w-full h-8 flex items-center space-x-4 rounded-t-2xl">
              <div className="bg-red-600 w-4 h-4 rounded-full ml-4"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-600 w-5 h-4 rounded-full"></div>
            </div>
            <div className=" rounded-b-2xl">
              <div className="image-section ">
                {/* #EAEAEA    for terminal*/}
                <div
                  className="shadow-2xl  rounded-lg bg-white 
          "
                >
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
                      <div className="text-black  background3 rounded-2xl border-black px-8 py-2">
                        Start Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="word-section ml-28">
            <div className="word-inner flex flex-col justify-center  space-y-8">
              <h2 className="text-[#33FFA8] font-semibold text-fontSize1">
                CMC
              </h2>

              <p className="">
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
