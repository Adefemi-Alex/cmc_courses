import React from "react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import "./Home.css";
// react icons

import ChooseLine from "../assets/images/ChooseLine.png";
import HomeCurve from "../assets/images/HomeCurve.png";
import HomeImg from "../assets/images/HomeImg.png";
import HomeLine from "../assets/images/HomeLine.png";
import background from "../assets/images/background.png";

function Home() {
  return (
    <>
      {/* Head */}
      <div className="home background2 h-screen flex justify-center items-center">
        <div className="flex justify-between md:justify-center xl:justify-between w-full max-w-screen-lg h-full">
          <div className="mx-12 mt-20 md:mx-0 md:mr-2 xl:mr-4 max-w-xl w-full">
            <div>
              <h1 className="font-nunito font-bold text-5xl md:text-5xl xl:text-6xl leading-tight">
                Discover limitless learning and earning possibilities
                <span className="text-span"> Online</span>
              </h1>
            </div>
            <div>
              <img
                src={HomeLine}
                alt="line"
                className="w-[350px] h-[40px] ml-8 mt-8"
              />
            </div>
            <div>
              <p className="ml-8 mt-10">
                Unleash Your Potential: Discover and cultivate your skills for
                financial growth with ExpertSkillz.
              </p>
            </div>
            <div className="flex items-center ml-40">
              <div className="flex items-center justify-center mt-20 w-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
              <div className="">
                <img
                  src={HomeCurve}
                  alt="curve"
                  className="w-[950px] h-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="mx-9 mt-4 md:mx-0 ml-0 md:ml-2 xl:ml-4">
            <img
              src={HomeImg}
              alt="person"
              className="w-[800px] h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Why choose us */}
      {/* Background image */}
      <div
        className="w-full h-full background2"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "446px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundOrigin: "margin-box",
        }}
      >
        {/* Centered image */}
        <div className="">
          <img
            src={ChooseLine}
            alt="line"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

// <>
//   <div className="home background h-[575px]">
//     <Swiper
//       pagination={{ clickable: true }}
//       modules={[Pagination, Autoplay]}
//       autoplay={{ delay: 5000 }}
//     >
//       <SwiperSlide className="h-[500px] sm:h-[60vh]">
//         <div className="swiper-slide">
//           {/* <img src={homeBg} alt='home' className='w-full h-[100%]' /> */}
//           <div
//             className="absolute bg-backgroundRgba w-full h-full leading-8
//    flex justify-center flex-col items-center p-3"
//           >
//             <h1
//               className="text-fontSize1 sm:text-2xl
//     sm:mt-[50px] text-white font-extrabold text-center"
//             >
//               Master Online Success With ExpertSkillz
//             </h1>
//             <p className="mb-3 p-2 text-slate-200 font-semibold">
//               Unlock the Power of Digital Marketing, Boost Your Income, and
//               Achieve Your Dreams. Learn from the Best to Be the Best.
//             </p>
//             <Link
//               to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
//               className="bg-white text-black p-[10px] rounded-md
//     py-[10px] px-[30px] hover:bg-lightpurple hover:font-semibold"
//             >
//               Join Us Now
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide className="h-[500px] sm:h-[60vh]">
//         <div className="swiper-slide">
//           {/* <img src={homeBg1} alt='home' className='w-full h-[100%]' /> */}
//           <div
//             className="absolute bg-backgroundRgba w-full h-full leading-8
//    flex justify-center flex-col items-center p-3"
//           >
//             <h1 className="text-white text-fontSize1 sm:text-2xl font-extrabold leading-10 text-center">
//               The No 1 Platform To Learn How To Build An Income Source
//               Online
//             </h1>
//             <p className="mb-3 text-slate-200 font-semibold md:mt-5">
//               Start earning your first with affiliate marketing
//             </p>
//             <Link
//               to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
//               className="bg-white text-black p-[10px] rounded-md
//     py-[10px] px-[30px]  hover:bg-lightpurple hover:font-semibold"
//             >
//               Join Us Now
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide className="h-[500px] sm:h-[60vh]">
//         <div className="swiper-slide">
//           {/* <img src={homeBg2} alt='home' className='w-full h-[100%]' /> */}
//           <div
//             className="absolute bg-backgroundRgba w-full h-full leading-8
//    flex justify-center flex-col items-center p-3"
//           >
//             <h1 className="text-white text-fontSize1 sm:text-2xl font-extrabold leading-10 text-center">
//               Learn How To Build A 6-7Figure Income Source Online
//             </h1>
//             <p className="mb-3 text-slate-200 font-semibold">
//               Step-by-step guide to earning profitable figures from
//               affiliate marketing for complete beginners
//             </p>
//             <Link
//               to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
//               className="bg-white text-black py-[10px] px-[30px] rounded-md  hover:bg-lightpurple hover:font-semibold"
//             >
//               Join Us Now
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   </div>

//   <Features />
//   <Faq />
// </>
