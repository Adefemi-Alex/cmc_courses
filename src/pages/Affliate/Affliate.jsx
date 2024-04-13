import React from "react";
import Affliate1 from "../../components/affliate/Affliate1";
import HowItWorks from "../../components/affliate/HowItWorks";

const Affliate = () => {
  return (
    <>
      <section className="py-10 gradient-background">
        <div className=" w-full items-center justify-center text-center">
          <h1 className="text-lg">AFFLIATE</h1>
        </div>
        <Affliate1/>
        <HowItWorks/>
      </section>
    </>
  );
};

export default Affliate;
