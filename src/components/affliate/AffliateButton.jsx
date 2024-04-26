import React from "react";

const AffliateButton = ({text, divclassName}) => {
  return (
    <>
      <div className={divclassName}>
        <p className="text-black  background3 rounded-full border border-solid border-black px-8 py-3 font-bold text-center">
          {text}
        </p>
      </div>
    </>
  );
};

export default AffliateButton;
