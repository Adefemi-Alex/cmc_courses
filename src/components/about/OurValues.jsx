import React from 'react';

const values = () => {
    return (
        <>
            <section>
                <div className='w-full items-center justify-center text-center'>
                    <h1 className="text-fontSize1 sm:text-fontSize2">Our Values</h1>
                    <span className='text-fontSize2 sm:text-fontSize4 sm:mx-1'>At ExpertSkillz, our values guide everything we do. These values include:</span>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-2 gap-28 sm:gap-10 justify-between my-20 sm:m-10 mx-28'>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>1</span>
                        </div>
                        <p className='my-3'>Integrity</p>
                        <p className='text-gray-500 text-sm'>We conduct ourselves with honesty, transparency and respect for all.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>2</span>
                        </div>
                        <p className='my-3'>Innovation</p>
                        <p className='text-gray-500 text-sm'>We embrace creativity and strive to stay ahead of the curve in technology and education.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>3</span>
                        </div>
                        <p className='my-3'>Inclusivity</p>
                        <p className='text-gray-500 text-sm'>We welcome diversity and believe that everyone deserves equal opportunities to learn and grow.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>4</span>
                        </div>
                        <p className='my-3'>Excellence</p>
                        <p className='text-gray-500 text-sm'>We are committed to delivering excellence in all aspects of our platform and services.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>5</span>
                        </div>
                        <p className='my-3'>Customer-Centricity</p>
                        <p className='text-gray-500 text-sm'>We prioritize the needs and satisfaction of our users above all else.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 drop-shadow-[0_10px_10px_rgba(51,255,168,1)]">
                        <div className='rounded-lg bg-white drop-shadow-[0_10px_10px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center'>
                            <span className='text-span text-lg'>6</span>
                        </div>
                        <p className='my-3'>Community</p>
                        <p className='text-gray-500 text-sm'>We foster a sense of belonging, collaboration, and support for learners to connect and grow.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default values;
