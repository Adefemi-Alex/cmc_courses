import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import courseimg1 from "../assets/images/courseimg1.png";
import courseimg2 from "../assets/images/courseimg2.png";
import courseimg3 from "../assets/images/courseimg3.png";

const CoursesCard = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 500 }}
        className="mx-20 my-10 w-200 h-[500px] max-w-screen-lg"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="background3 shadow-lg rounded-lg overflow-hidden">
            <img src={courseimg1} alt="Card Image" className="w-full h-auto" />
            <div className="p-4">
              <h1 className="text-black text-xl font-bold mb-2 bg-white py-2 px-4 rounded">
                Digital Marketing
              </h1>
              <p className="text-gray-700">
                Explore our diverse digital marketing skills and models, such as
                Affiliate Marketing, Freelancing, Copywriting, Amazon KDP
                ,Facebook Advertising and more. In this class you’ll discover
                how to establish a lucrative online income from the comfort of
                your home.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={courseimg2} alt="Card Image" className="w-full h-auto" />
            <div className="p-4">
              <h1 className="text-black text-xl font-bold mb-2 background3 py-2 px-4 rounded">
                Online Investment
              </h1>
              <p className="text-gray-700">
                Discover our range of finance skills, including various
                investment skills like Crypto Trading, Forex Trading, Crypto
                Arbitrage, and more. In this class you’ll learn how to generate
                substantial income through these investment skills, all from the
                comfort of your home.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={courseimg3} alt="Card Image" className="w-full h-auto" />
            <div className="p-4">
              <h1 className="text-black text-xl font-bold mb-2 background3 py-2 px-4 rounded">
                Designing Skills
              </h1>
              <p className="text-gray-700">
                Discover lucrative design opportunities. Explore fields such as
                Graphic design, Product design, UI/UX Design and more. In this
                class, you’ll learn how to master design techniques and monetize
                your skills by offering professional services to companies and
                business owners.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev" onClick={goPrev}></div>
      <div className="swiper-button-next" onClick={goNext}></div>
    </div>
  );
};

export default CoursesCard;



// import React, { useRef } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import courseimg1 from "../assets/images/courseimg1.png";
// import courseimg2 from "../assets/images/courseimg2.png";
// import courseimg3 from "../assets/images/courseimg3.png";

// const CourseCard = () => {
//   return (
//     <div className="relative mx-20 my-10 w-200 h-[500px] max-w-screen-lg">
//       <Carousel
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={5000}
//       >
//         <div>
//           <div className="background3 shadow-lg rounded-lg overflow-hidden">
//             <img src={courseimg1} alt="Card Image" className="w-full h-auto" />
//             <div className="p-4">
//               <h1 className="text-black text-xl font-bold mb-2 bg-white py-2 px-4 rounded">
//                 Digital Marketing
//               </h1>
//               <p className="text-gray-700">
//                 Explore our diverse digital marketing skills and models, such as
//                 Affiliate Marketing, Freelancing, Copywriting, Amazon KDP
//                 ,Facebook Advertising and more. In this class you’ll discover
//                 how to establish a lucrative online income from the comfort of
//                 your home.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img src={courseimg2} alt="Card Image" className="w-full h-auto" />
//             <div className="p-4">
//               <h1 className="text-black text-xl font-bold mb-2 background3 py-2 px-4 rounded">
//                 Online Investment
//               </h1>
//               <p className="text-gray-700">
//                 Discover our range of finance skills, including various
//                 investment skills like Crypto Trading, Forex Trading, Crypto
//                 Arbitrage, and more. In this class you’ll learn how to generate
//                 substantial income through these investment skills, all from the
//                 comfort of your home.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img src={courseimg3} alt="Card Image" className="w-full h-auto" />
//             <div className="p-4">
//               <h1 className="text-black text-xl font-bold mb-2 background3 py-2 px-4 rounded">
//                 Designing Skills
//               </h1>
//               <p className="text-gray-700">
//                 Discover lucrative design opportunities. Explore fields such as
//                 Graphic design, Product design, UI/UX Design and more. In this
//                 class, you’ll learn how to master design techniques and monetize
//                 your skills by offering professional services to companies and
//                 business owners.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default CourseCard;
