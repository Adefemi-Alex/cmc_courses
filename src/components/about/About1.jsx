import React from 'react';
import aboutimg1 from "../../assets/images/about/about1.png";
import about from "../../assets/images/about/about.svg";

const about_1 = () => {
    return (
        <>
            <section>
                <div className='flex sm:flex-col items-center justify-between px-10 py-20 sm:p-3'>
                    <div className='flex-1 mx-10 sm:m-3'>
                        <h2 className='text-fontSize2 sm:text-fontSize4 text-black font-bold mb-5'>
                            High Quality Trainings and Guidance to Achieve Great Results with Your Online Skill
                        </h2>
                        <p className='text-gray-500 text-base sm:text-sm'>
                            Welcome to ExpertSkillz, your premier destination for top-notch online training and resources. Explore our platform to discover a wide range of courses and learning opportunities designed to help you unlock your full potential. Our premium training and tailored guidance empower you to succeed regardless of your prior experience.
                        </p>
                    </div>

                    <div className='relative flex-1 mx-10 sm:my-10'>
                        <img src={about} alt="Card Image" className="absolute -top-11 -right-1 -z-50 sm:w-50 sm:-right-8" />
                        <img src={aboutimg1} alt="Card Image" className="z-50 mx-10 sm:m-0" />
                        <img src={about} alt="Card Image" className="absolute -bottom-10 -left-8 -z-50 sm:w-50" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default about_1
