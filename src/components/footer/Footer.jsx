import React, { useState } from "react";
import { PrivacyAndPlicy, TermsAndCondPopup } from "../main";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupPrivacy, setIsPopupPrivacy] = useState(false);

  const openTermsPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const openPrivacyPopup = () => {
    setIsPopupPrivacy(!isPopupPrivacy);
  };

  if (isPopupOpen) {
    return <TermsAndCondPopup openTermsPopup={openTermsPopup} />;
  } else if (isPopupPrivacy) {
    return <PrivacyAndPlicy openPrivacyPopup={openPrivacyPopup} />;
  }

  return (
    <>
      <section>
        <div className="font-nunito footer grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-around items-center w-full h-full">
          <FooterSection1 />
          <FooterSection2 />
        </div>
      </section>
    </>
  );
}

export default Footer;
