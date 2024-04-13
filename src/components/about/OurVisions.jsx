import React from 'react';
import aboutimg3 from "../../assets/images/about/about3.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const About_3 = () => {
    return (
        <>
            <section>
                <h1 className="text-fontSize1 text-center">Our Visions</h1>

                <div className='flex sm:flex-col items-center justify-between px-10 py-20 sm:p-3'>
                    <div className='flex-1 mx-10 sm:m-3'>
                        <h2 className='text-fontSize2 text-black font-bold mb-5 sm:text-fontSize4'>
                            Cultivating a Brighter Learning and Earning Future For Everyone
                        </h2>
                        <p className='text-gray-500 text-base sm:text-sm'>
                            At ExpertSkillz, we envision a future where anyone can access the skills they need to succeed, regardless of their background or location. By continuously innovating and adapting to the changing needs of our users, we aim to create a world where learning and earning knows no bounds.
                        </p>
                    </div>

                    <div className='relative flex-1 mx-10 sm:my-10'>
                        <img src={about} alt="Card Image" className="absolute -top-11 -right-1 -z-50 sm:w-50 sm:-right-8" />
                        <img src={aboutimg3} alt="Card Image" className="z-50 mx-10 sm:m-0" />
                        <img src={about} alt="Card Image" className="absolute -bottom-10 -left-8 -z-50 sm:w-50" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_3
