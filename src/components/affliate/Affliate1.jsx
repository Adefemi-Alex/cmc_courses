import React from "react";
import affliateimg from "../../assets/images/affliate/affliate.png";
import decor from "../../assets/images/decorative_images/decorativeImage.svg";
import AffliateButton from "./AffliateButton";

const Affliate1 = () => {
  return (
    <>
      <section>
        <div className="flex sm:flex-col items-center justify-between px-20 py-20 sm:p-3">
          <div className="flex-1 mx-10 sm:m-3">
            <h2 className="text-fontSize2 sm:text-fontSize4 text-black font-bold mb-5">
              Join Our Affiliate Program
            </h2>
            <p className="text-gray-500 text-base sm:text-sm">
              Work from home with your smartphone as an affiliate for our
              platform and receive weekly payments. Whether you’re a beginner
              learning from our platform or an experienced affiliate, we ensure
              to provide the best opportunities for working and earning. Don’t
              waste time; register as an affiliate now.
            </p>
            <AffliateButton/>
          </div>
          <div className="relative flex-1 mx-10 sm:my-10">
            <img
              src={decor}
              alt="Card Image"
              className="absolute -top-11 -right-1 -z-50 sm:w-50 sm:-right-8"
            />
            <img
              src={affliateimg}
              alt="Card Image"
              className="z-50 mx-10 sm:m-0"
            />
            <img
              src={decor}
              alt="Card Image"
              className="absolute -bottom-10 -left-8 -z-50 sm:w-50"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Affliate1;
