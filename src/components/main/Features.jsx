import React from 'react'
import expertSkillzImg from '../../assets/images/ExpertSkillz2.PNG'
import expertSkillzImg2 from '../../assets/images/expertsSkillz4.jpg'
import { FaCheckCircle, FaToolbox, FaTrophy, FaHandshake } from 'react-icons/fa'

function Features() {
 return (
  <>
   <div className='mx-3 my-10'>
    <div className='flex justify-center md:flex-col-reverse space-y-3 gap-10'>
     <div className=' flex-1 md:w-full'>
      <img src={expertSkillzImg2} alt='Why choosing us' className='w-full' />
     </div>

     <div className=' flex-[0.8] md:w-full md:mt-3'>
      <div className='heading'>
       <h2 className='font-bold text-2xl md:text-[1.2rem] md:text-center md:mb-3'>
        Great Learning Classroom at ExpertSkillz
       </h2>
      </div>
      <p className='text-gray-500 text-base'>
       ExpertSkillz provides an excellent learning platform where you can engage
       in various activities. In this dynamic learning environment, you can
       access weekly live classes hosted by your coaches, engage in real-time
       chat with both your coach and fellow students, and much more. It's an
       interactive space designed to enhance your learning experience.
      </p>
     </div>
    </div>
   </div>

   <div className='mx-3 mt-10'>
    <div className='flex space-x-10 items-center md:flex-col'>
     <div className='flex-1 space-y-5 w-full'>
      <div className='heading justify-center flex-wrap'>
       <h2 className='font-bold md:text-center text-4xl md:text-fontSize2'>
        Why Choose ExpertSkillz?
       </h2>
      </div>
      <div>
       <h2 className='flex items-center text-fontSize2 font-semibold text-lightBlue'>
        <FaCheckCircle className='mr-2' />
        Quality
       </h2>
       <p className='text-gray-500 font-medium'>
        We are committed to delivering high-quality training and mentorship
       </p>
      </div>
      <div>
       <h2 className='flex items-center text-fontSize2 font-semibold text-lightBlue'>
        <FaToolbox className='mr-2' />
        Expertise
       </h2>
       <p className='text-gray-500 font-medium'>
        Our team comprises industry experts with a wealth of experience
       </p>
      </div>

      <div>
       <h2 className='flex items-center text-fontSize2 font-semibold text-lightBlue'>
        <FaTrophy className='mr-2' />
        Commitment to Success
       </h2>
       <p className='text-gray-500 font-medium'>
        We are invested in your success from day one
       </p>
      </div>

      <div>
       <h2 className='flex items-center text-fontSize2 font-semibold text-lightBlue'>
        <FaHandshake className='mr-2' />
        Continuous Support
       </h2>
       <p className='text-gray-500 font-medium'>
        Our dedication doesn't end with a course; we are here for you at
        everystep
       </p>
      </div>
     </div>

     <div className='flex-1 md:w-full mx-2'>
      <img src={expertSkillzImg} alt='Why choosing us' className='w-full' />
     </div>
    </div>
   </div>
  </>
 )
}

export default Features
