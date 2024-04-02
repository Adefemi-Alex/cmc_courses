import React from 'react';
import about from "../../assets/images/about/about.svg";

const Testimonials = () => {
    return (
        <>
            <section>
                <div className='w-full items-center justify-center text-center mb-12'>
                    <h1 className="text-fontSize1 sm:text-fontSize2">Testimonials</h1>
                    <span className='text-fontSize3 sm:text-fontSize4 sm:mx-1'>Join Thousands of Satisfied Learners Who Have Achieved Success With ExpertSkillz. Hear What Our Users Have To Say About Us:</span>
                </div>
                <div className='w-full items-center justify-center'>
                    <div className='relative sm:my-10 mx-40'>
                        <img src={about} alt="Card Image" className="absolute -top-11 -right-1 -z-50 sm:w-50 sm:-right-8" />
                        <div className="bg-white justify-center items-center text-center mx-20 px-20">
                            <h2>Adejumo Eniola</h2>
                            <span className='text-span text-[200px]'>“</span>
                            <p className='text-fontSize3 text-base relative'>
                                ExpertSkillz has been a total game-changer for me in the online world!
                                Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch.
                                With the trainings I got on CMC, I have seen massive results in no time even as a newbie!
                                Another thing is, the mentorship on CMC is super beginner-friendly. <br></br><br></br>
                            </p>
                            <span className='text-span text-[200px]'>“</span>
                        </div>
                        <img src={about} alt="Card Image" className="absolute -bottom-10 -left-8 -z-50 sm:w-50" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
