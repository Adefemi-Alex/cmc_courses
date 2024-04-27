import React from "react";
import AffliateButton from "./AffliateButton";

const Affliate3 = () => {
  return (
    <>
      <section className=" bg-gradient-to-b from-black to-[#33FFA8]">
        <div className="flex flex-col justify-start space-y-5 pl-20 py-10 pr-80">
          <h1 className="font-nunito font-bold text-[35px] leading-[54px] w-[700px] text-white">
            Creating a passive income stream has never been simpler.
          </h1>
            <p className=" font-medium text-[20px] leading-[30px] text-white">
              Imagine earning passive income daily by affiliating with
              ExpertSkillz from home, using just your smartphone or laptop.
            </p>
            <p className="font-medium text-[20px] leading-[30px] text-white">
              Unfamiliar with affiliate marketing? No problem! Enroll in our
              training program to learn the ropes. Register below for a head
              start.
            </p>
          <AffliateButton text={"Get Started"} divclassName={"flex my-2"}/>
        </div>
      </section>
    </>
  );
};

export default Affliate3;
