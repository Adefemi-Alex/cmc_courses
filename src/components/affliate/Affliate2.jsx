import React from "react";
import affliateDesignImage from "../../assets/images/affliate/affliate design.png";
import AffliateButton from "./AffliateButton";

const Affliate2 = () => {
  return (
    <>
      <section>
        <div className="flex mx-28 py-10">
          <div className="flex-1">
            <img
              src={affliateDesignImage}
              alt="card image"
              className="sm:w-50"
            />
          </div>
          <div className="flex-1 flex-col py-20 space-y-5">
            <h1 className=" text-fontSize1 font-bold">
              Become an ExpertSkillz Affiliate and Start Earning Big!
            </h1>
            <p>
              Don't hesitate! Your affiliate account on ExpertSkillz is ready
              for you to start earning cash.
            </p>

            <p>
              Your opportunity to maximize your income is waiting – activate
              your affiliate account now!
            </p>
            <AffliateButton
              text={"Become an Affiliate"}
              divclassName={"flex items-center justify-center my-2"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Affliate2;
