import React from 'react';
import aboutimg2 from "../../assets/images/about/about2.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const about_2 = () => {
    return (
        <>
            <section>
                <h1 className="text-fontSize1 text-center">Our Mission</h1>
                <div className='flex sm:flex-col items-center justify-between px-10 py-20 sm:p-3'>
                    <div className='relative flex-1 mx-10 sm:my-10'>
                        <img src={about} alt="Card Image" className="absolute -top-11 -right-1 -z-50 sm:w-50 sm:-right-8" />
                        <img src={aboutimg2} alt="Card Image" className="z-50 mx-10 sm:m-0" />
                        <img src={about} alt="Card Image" className="absolute -bottom-10 -left-8 -z-50 sm:w-50" />
                    </div>

                    <div className='flex-1 mx-10 sm:m-3'>
                        <h2 className='text-fontSize2 sm:text-fontSize4 text-black font-bold mb-5'>
                            Our Mission at ExpertSkillz is Simple yet Impactful
                        </h2>
                        <p className='text-gray-500 text-base sm:text-sm'>
                            Our mission is to empower individuals with the tools and knowledge they need to thrive in the digital economy. Through our platform, we strive to make learning accessible, affordable, and engaging for people around the world.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about_2
