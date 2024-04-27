import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../pages/about/About.css";

import person1 from "../../assets/images/Testimonial1.png";
import person2 from "../../assets/images/Testimonial2.png";
import person3 from "../../assets/images/Testimonial3.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";
import about1 from "../../assets/images/decorative_images/decorativeImage2.svg";
import about2 from "../../assets/images/decorative_images/decorativeImage3.svg";
import prevImage from "../../assets/images/leftArrow.png";
import nextImage from "../../assets/images/rightArrow.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialsData = [
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person1,
    },
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person2,
    },
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const sliderRef = React.useRef(null);

  const goToPrevSlide = () => {
    console.log("Previous slide clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    console.log("Next slide clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section>
      <div className="items-center justify-center relative py-10">
        <img
          src={about2}
          alt="Card Image"
          className="absolute top-20 left-32 -z-50 sm:w-50 sm:top-0 sm:left-16"
        />
        <img
          src={about1}
          alt="Card Image"
          className="absolute top-10 left-20 -z-50 sm:w-50 sm:-top-5 sm:left-5"
        />
        <Slider {...settings} initialSlide={currentSlide} ref={sliderRef}>
          {testimonialsData.map((affliate, index) => (
            <div key={index}>
              <div className="relative sm:my-10 mx-20 sm:mx-2 my-10">
                <div className="bg-white flex gap-3 justify-center items-center text-center mx-20 px-20 sm:m-5 sm:p-5 relative rounded-3xl">
                  <img
                    src={affliate.personImage}
                    alt="card image"
                    className="sm:w-50"
                  />
                  <div className="flex flex-col text-left">
                    <h2 className="pt-10 text-fontSize2 font-bold">
                      {affliate.name}
                    </h2>
                    <div className="flex pb-10 pt-3">
                      <p className="text-fontSize3 text-base w-full">
                        {affliate.quote}
                        <br></br>
                        <br></br>
                      </p>
                      <span className="text-span text-[200px] absolute right-24 -bottom-7 rotate-180">
                        “
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center">
          <div className="absolute  -translate-y-1/2 left-[500px] cursor-pointer w-16">
            <img src={prevImage} alt="Prev" onClick={goToPrevSlide} />
          </div>
          <div className="absolute -translate-y-1/2 right-[500px] cursor-pointer w-16">
            <img src={nextImage} alt="Next" onClick={goToNextSlide} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
