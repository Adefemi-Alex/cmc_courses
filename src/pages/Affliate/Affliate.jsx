import React from "react";
import Affliate1 from "../../components/affliate/Affliate1";
import HowItWorks from "../../components/affliate/HowItWorks";
import TopAffliates from "../../components/affliate/TopAffliates";
import Affliate2 from "../../components/affliate/Affliate2";
import Affliate3 from "../../components/affliate/Affliate3";
import AffiliateFaq from "../../components/affliate/AffiliateFaq";

const Affliate = () => {
  return (
    <>
      <section className="py-10 gradient-background">
        <div className=" w-full items-center justify-center text-center">
          <h1 className="text-lg">AFFLIATE</h1>
        </div>
        <Affliate1 />
        <HowItWorks />
        <Affliate3 />
        <TopAffliates />
        <Affliate2 />
        <AffiliateFaq />
      </section>
    </>
  );
};

export default Affliate;
