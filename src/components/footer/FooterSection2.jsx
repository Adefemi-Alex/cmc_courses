import React from "react";

const FooterSection2 = () => {
  return (
    <>
      {/* Send message second row */}
      <div className="block w-full -mt-20 pr-20">
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
            <h1 className="text-3xl text-background3">Company</h1>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Courses</p>
            <p>Affliate</p>
          </div>
          <div className="text-white">
            <h1 className="text-3xl text-span">Contact Us</h1>
            <p>wearexpertskillz@gmail.com</p>
            <p>Social Media</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection2;
