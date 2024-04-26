import React from "react";
import { NavLink } from "react-router-dom";

const AffliateButton = () => {
  return (
    <>
      <div className="flex items-center justify-center my-2">
        {/* <p className="text-black  background3 rounded-full border border-solid border-black px-8 py-3 font-bold text-center">
          Become an Affliate
        </p> */}

        <NavLink to="/affliatelogin">
          <button className="background3 hover:background text-black font-bold py-2 px-4 rounded-full">
            Become an Affliate
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AffliateButton;
