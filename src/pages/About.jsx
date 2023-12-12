import React from 'react'
import { Link } from 'react-router-dom'
import homeBg from '../assets/images/homebg2.jpg'

const About = () => {
 return (
  <>
   <figure className='relative h-[300px]'>
    <img src={homeBg} alt='contact background' className='h-full w-full' />
    <div
     className='bg-backgroundRgba h-[100%] w-full top-0 absolute 
    flex items-center justify-center text-center p-11 flex-col'>
     <h2 className='text-white text-fontSize1 mb-4 font-bold sm:font-[500] sm:text-fontSize2'>
      Who We Are?
     </h2>
     <p className='text-blue-600 text-fontSize2 sm:text-fontSize3'></p>
     <Link
      to='https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc'
      className='bg-lightBlue py-[10px] px-[30px] rounded-md  hover:bg-lightpurple text-white hover:font-semibold'>
      Join Us Now
     </Link>
    </div>
   </figure>

   <section className='py-3 bg-gray-100'>
    <div className='flex gap-10 mb-5 items-center px-5 md:flex-col'>
     <div className='flex-1'>
      <h2 className='text-fontSize2 text-black font-bold md:text-center'>
       Introduction
      </h2>
      <p className='text-gray-500 text-base'>
       Welcome to ExpertSkillz, your gateway to mastering the art of affiliate
       marketing and achieving online success. At ExpertSkillz, we're dedicated
       to empowering individuals with the knowledge and skills they need to
       thrive in the digital world.
      </p>
     </div>

     <div className='flex-1'>
      <h2 className='text-fontSize2 font-bold md:text-center'>Our Mission</h2>
      <p className='text-gray-500 text-base'>
       At ExpertSkillz, our mission is clear: to provide accessible and
       comprehensive training in affiliate marketing, equipping individuals with
       the tools they need to succeed online. We believe that anyone can achieve
       financial freedom through expert guidance and the right education.
      </p>
     </div>
    </div>

    {/* teams */}
    <div className='flex gap-10 mb-5 items-center px-5 md:flex-col'>
     <div className='flex-1'>
      <h2 className='text-fontSize2 font-bold md:text-center'>Our Team</h2>
      <p className='text-gray-500 text-base'>
       Our team is a blend of seasoned experts with a track record of success in
       affiliate marketing. Each member is handpicked for their extensive
       knowledge and commitment to helping others succeed. Together, we're
       dedicated to your growth and prosperity.
      </p>
     </div>

     <div className='flex-1'>
      <h2 className='text-fontSize2 font-bold md:text-center'>Join Us</h2>
      <p className='text-gray-500 text-base'>
       Ready to embark on your journey to online success? Join ExpertSkillz and
       unlock your potential. Experience the power of CMC, personalized
       mentorship, and a thriving community. Your success story begins here.
       Join Now.
      </p>
     </div>
    </div>
   </section>
  </>
 )
}

export default About
