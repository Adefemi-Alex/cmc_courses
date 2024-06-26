import React from "react";
import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import HomeImg3 from "../../assets/images/HomeImg3.png";
import vector2 from "../../assets/images/Vector2.png";
import background from "../../assets/images/background.png";

const HomeAffliate = () => {
  return (
    <>
      {/* Learn and Earn Affliate section */}

      <div
        className="-mt-14"
        // style={{ backgroundImage: `url(${back})` }}
      >
        {/* Arrow and the spiral background image section */}
        <div className="flex justify-between mb-0">
          <div className="ml-30 mt-40  w-full h-full">
            <img
              src={ChooseLine}
              alt="line"
              className="ml-[57%] mt-[6px] w-[200px] h-full object-fit"
            />
          </div>
          {/* Centered image */}
          <div className="w-[650px] h-full">
            <img src={background} alt="line" className="w-full object-fit" />
          </div>
        </div>

        {/* About Header section */}

        <div className="flex justify-center items-center -mt-60 w-full h-full">
          {/* <div className="ml-10 text-4xl lg:text-5xl xl:text-6xl"> */}
          <h1 className="ml-10 text-4xl lg:text-5xl xl:text-6xl relative">
            Learn{" "}
            <span className="relative inline-block w-20">
              Earn
              <img
                src={vector2}
                alt="line"
                className="absolute top-1/3 transform -translate-y-1/2 right-2 z-0 h-15 w-[100px]"
              />
            </span>
          </h1>
          {/* </div> */}
        </div>
        {/* Learn and Earn body */}
        <div className="relative flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-[470px]">
          <div className="mx-12 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full">
            <div className="mt-36">
              <h1 className="font-nunito font-bold text-5xl md:text-5xl xl:text-6xl leading-tight">
                Don’t Just Learn, Earn. Build Your Online Income With{" "}
                <span className="text-span">ExpertSkillz.</span>
              </h1>
            </div>
            <div>
              <p className="mt-10">
                Our platform not only provides learning opportunities, but with
                the affiliate marketing blueprints we offer in our training, we
                also provide you with opportunity to partner with us as an
                affiliate, earning commissions every single week, all from the
                comfort of your home
              </p>
            </div>
            <div className="flex items-left mt-10">
              {/* Get Started */}
              <NavLink to="/affliate">
                <button className="background3 hover:background text-black font-bold py-2 px-4 rounded-full">
                  Become an Affliate
                </button>
              </NavLink>
            </div>
          </div>
          <div className="mt-4 md:mx-0 ml-8 md:ml-2 xl:ml-4">
            <img
              src={HomeImg3}
              alt="person"
              className="w-[980px] h-[500px] object-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAffliate;
