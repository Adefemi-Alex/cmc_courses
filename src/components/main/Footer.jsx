import React, { useState } from "react";
import { PrivacyAndPlicy, TermsAndCondPopup, Testimonial } from "../../components/main";
import logo4 from "../../assets/images/logo4.png";
import TestimonialCarousel from "../home/TestimonialCard";
import { NavLink } from "react-router-dom";

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
      <div className="font-nunito border border-black footer flex justify-around items-center w-full h-full">
        {/* <div className="flex justify-around items-center"> */}
        <div className="w-[100vh] mt-10">
          {/* Footer about expertskillz */}
          <div className="w-full">
            <h1 className="text-5xl text-white">
              What people are saying about{" "}
              <span className="text-span">ExpertSkillz</span>
            </h1>
          </div>
          <div className="w-full h-[30vh]">{/* <TestimonialCarousel /> */}</div>

          {/* Second section */}
          <div className="w-60">
            <img src={logo4} alt="logo" />
          </div>
          <div className="text-white">
            <p>Join Our Newsletter</p>
          </div>
          <div> </div>
        </div>
        {/* Message us section */}
        <div className="block border border-none rounded-xl sendMessage py-10 px-10 mr-20 mt-20 w-[70vh]">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center text-white">
              <h1 className="text-2xl">Send a Message</h1>
            </div>
            {/* Email box */}
            <div>
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full h-10 bg-white placeholder-gray-200 border border-gray-300 px-3 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            {/* Message Box */}
            <div>
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                className="w-full h-20 bg-white placeholder-gray-200 border border-gray-300 px-3 py-2 rounded-md resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              href="#"
              className="background3 text-white py-2 px-4 rounded hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        <div>
          <h1>Company</h1>

          <p>
            <NavLink to="">Home</NavLink>
          </p>
        </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Footer;

{
  /* <footer className='p-5 bg-gray-900'>
<div className='footer-heading w-1/3 ml-8 md:w-full md:mx-auto'>
 <img src={logo} alt='Logo' className='mb-5 w-[200px]' />
 <p className='pb-5 text-base text-[whitesmoke]'>
  At ExpertSkillz, our mission is clear: to provide accessible and
  comprehensive training in affiliate marketing, equipping individuals with
  the tools they need to succeed online. We believe that anyone can achieve
  financial freedom through expert guidance and the right education.
 </p>
 <ul className='flex items-center gap-5 pb-8 list-none'>
  <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
   <Link to='https://wa.link/9uytp6'>
    <BsWhatsapp size={22} />
   </Link>
  </li>
  <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
   <Link to='/'>
    <BsFacebook size={22} />
   </Link>
  </li>
  <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
   <Link to='http://www.twitter.com/expert_skillz'>
    <BsTwitter size={22} />
   </Link>
  </li>
  <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
   <Link to='http://www.intagram.com/wearexpertskillz'>
    <BsInstagram size={22} />
   </Link>
  </li>
 </ul>
</div>
<div className='container flex justify-around sm:flex-col sm:ml-auto'>
 <div className='footer-box'>
  <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
   Resources
  </h5>
  <li className='flex items-center pb-2'>
   <Link to={Faq} className='text-white'>
    FAQ
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <Link to='/' className='text-white'>
    Blog
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <Link to='/' className='text-white'>
    Newsletter
   </Link>
  </li>
 </div>

 <div className='footer-box gap-5'>
  <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
   Contact Us
  </h5>
  <li className='flex items-center pb-2'>
   <FiPhoneCall className='mr-3 text-lightBlue ' size={20} />
   <Link to='tel:+2349079554814' className='text-white'>
    +2349079554814
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <FiMail className='mr-3 text-lightBlue ' size={20} />
   <Link to='http://www.wearexpertskillz@gmail.com' className='text-white'>
    wearexpertskillz@gmail.com
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <FaLocationArrow className='mr-3 text-lightBlue ' size={20} />
   <Link
    href='https://maps.app.goo.gl/WPLUVRoTUEnK4XB59'
    className='text-white'>
    Lekki Ajah along Epe express way
   </Link>
  </li>
 </div>

 <div className='footer-box'>
  <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
   Company
  </h5>
  <li className='flex items-center pb-2'>
   <Link href='/' className='text-white'>
    About Us
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <Link to='/' className='text-white' onClick={openPrivacyPopup}>
    Pivacy & Policy
   </Link>
  </li>
  <li className='flex items-center pb-2'>
   <Link className='text-white' onClick={openTermsPopup}>
    Terms & Condition
   </Link>
  </li>
 </div>
</div>
<div className='copy-right mt-10 '>
 <p className='text-center text-lightWhite items-center justify-center'>
  Copyright &copy; {year}{' '}
  <span className='text-lightBlue'>ExpertSkillz</span> All rights reserved
 </p>
</div>
</footer> */
}
