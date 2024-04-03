import React from 'react';
import illustration from '../../assets/images/questions.png'
import { PiPaperPlaneTilt } from "react-icons/pi";

const Questions = () => {
    return (
        <>
            <section className='mt-20 mb-40'>
                <div className='text-center'>
                    <h1 className='text-fontSize2'>Do you have any question?</h1>
                    <p className='text-fontSize4'>Have questions or need assistance? Contact  us today.</p>
                    <p className='text-fontSize4'>We’re here to help you on your learning journey, so don’t hesitate to reach out!</p>
                </div>
                <div className='flex py-10 px-28 sm:flex-col sm:p-10'>
                    <div className='flex-1'>
                        <img src={illustration} alt='Card Image' className='z-50 mx-10 sm:m-0' />
                    </div>
                    <div className='flex-1'>
                        <div className='block border border-none my-10'>
                            <div className='flex flex-col gap-7'>
                                <div className='flex gap-5'>
                                    <div className='w-full'>
                                        <input type='text' id='fullname' className='w-full h-14 bg-gray-200 placeholder-gray-400 border border-gray-300 px-3 rounded-lg' placeholder='Full Name' />
                                    </div>
                                    <div className='w-full'>
                                        <input type='email' id='email' className='w-full h-14 bg-gray-200 placeholder-gray-400 border border-gray-300 px-3 rounded-lg' placeholder='Email' />
                                    </div>
                                </div>
                                <div>
                                    <textarea id='message' className='w-full h-60 bg-gray-200 placeholder-gray-400 border border-gray-300 px-3 py-2 rounded-lg resize-none' placeholder='Your message...'></textarea>
                                </div>
                                <button href='#' className='background3 text-black text-fontSize3 py-2 px-4 mx-20 rounded-[30px] border border-black flex justify-center items-center gap-3'>Send Message <PiPaperPlaneTilt className=' text-fontSize2' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Questions;
