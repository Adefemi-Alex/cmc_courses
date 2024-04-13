import React from "react";
import AffliateButton from "./AffliateButton";

const HowItWorks = () => {
  return (
    <>
      <section className="mt-5 mb-20">
        <div className="w-full items-center justify-center text-center">
          <h1 className="text-fontSize1 sm:text-fontSize2">
            Here’s How it Works
          </h1>
          <p className="text-fontSize3 sm:text-fontSize4 sm:mx-1 mx-20 text-center">
            Becoming an affiliate under ExpertSkillz is straightforward and
            <br />
            doesn’t require any additional or hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-28 sm:gap-10 justify-between my-10 sm:m-10 mx-28">
          <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
            <div className="rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
              <span className="text-span text-lg">1</span>
            </div>
            <p className="my-3">Become an Affliate</p>
            <p className="text-gray-500 text-sm">
              Sign Up as an affiliate on the affiliate registration page with no
              sign-up fee.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
            <div className="rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
              <span className="text-span text-lg">2</span>
            </div>
            <p className="my-3">Promote a Product</p>
            <p className="text-gray-500 text-sm">
              Select a top digital product, copy your affiliate link, and access
              promotional materials.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
            <div className="rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
              <span className="text-span text-lg">3</span>
            </div>
            <p className="my-3">Get Paid</p>
            <p className="text-gray-500 text-sm">
              Earn 50% commissions for every sale you generate and receive
              payments every Sunday.
            </p>
          </div>
        </div>
        <AffliateButton/>
      </section>
    </>
  );
};

export default HowItWorks;
