import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import whatsapp from "../../assets/images/footer/whatsapp.png";
import x from "../../assets/images/footer/x.png";
import "../../index.css";
const FooterSection2 = () => {
  useEffect(() => {
    const handleNavLinkClick = () => {
      window.scrollTo(0, 0);
    };

    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      document.querySelectorAll("a.nav-link").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      {/* Send message second row */}
      <div className="block w-full mt-10 pr-20">
        <div className="rounded-xl sendMessage py-20 px-20">
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
              className="background3 text-black py-2 px-4 rounded hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </div>
        {/* Send message section 2 */}
        <div className="flex justify-between mt-10">
          <div className="text-white">
            <h1 className="text-3xl text-background3 mb-6">Company</h1>
            <NavLink to="/" className="nav-link">
              <p className="mb-6">Home</p>
            </NavLink>
            <NavLink to="/about" className="nav-link">
              <p className="mb-6">About Us</p>
            </NavLink>
            <NavLink to="courses" className="nav-link">
              <p className="mb-6">Our Courses</p>
            </NavLink>
            <NavLink to="/faqs" className="nav-link">
              <p className="mb-6">Faqs</p>
            </NavLink>
            <NavLink to="/affliate" className="nav-link">
              <p className="mb-6">Affliate</p>
            </NavLink>
          </div>
          <div className="text-white">
            <h1 className="text-3xl text-span mb-6">Contact Us</h1>
            <p className="mb-6">wearexpertskillz@gmail.com</p>
            <p className="mb-2">Social Media</p>
            <div className="flex items-center">
              <a href="#">
                <div className="rounded-full border border-white p-2 bg-white">
                  <img src={instagram} alt="Instagram" className="w-6 h-6" />
                </div>
              </a>
              <a href="#">
                <div className="rounded-full border border-white p-2 bg-white ml-2">
                  <img src={facebook} alt="Facebook" className="w-6 h-6" />
                </div>
              </a>
              <a href="#">
                <div className="rounded-full border border-white p-2 bg-white ml-2">
                  <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </div>
              </a>
              <a href="#">
                <div className="rounded-full border border-white p-2 bg-white ml-2">
                  <img src={x} alt="X" className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Terms and policy */}
        <div className="flex justify-end mt-7 text-white">
          <p>Terms and Conditions. Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default FooterSection2;
