import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import './Home.css'
import homeBg from '../assets/images/homebg.jpg'
import homeBg1 from '../assets/images/homebg1.jpg'
import homeBg2 from '../assets/images/homebg2.jpg'
// react icons

import { Link } from 'react-router-dom'
import Features from '../components/Features'
import Faq from './../components/Faq'

function Home() {
 return (
  <>
   <div className='home'>
    <Swiper
     pagination={{ clickable: true }}
     modules={[Pagination, Autoplay]}
     autoplay={{ delay: 5000 }}>
     <SwiperSlide className='h-[500px] sm:h-[60vh]'>
      <div className='swiper-slide'>
       <img src={homeBg} alt='home' className='w-full h-[100%]' />
       <div
        className='absolute bg-backgroundRgba w-full h-full leading-8
       flex justify-center flex-col items-center p-3'>
        <h1
         className='text-fontSize1 sm:text-2xl
        sm:mt-[50px] text-lightBlue font-extrabold text-center'>
         Master Online Success With ExpertSkillz
        </h1>
        <p className='mb-3 p-2 text-slate-200 font-semibold'>
         Unlock the Power of Digital Marketing, Boost Your Income, and Achieve
         Your Dreams. Learn from the Best to Be the Best.
        </p>
        <Link
         to='https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc'
         className='bg-lightBlue p-[10px] rounded-md
        py-[10px] px-[30px] hover:bg-lightpurple hover:font-semibold'>
         Join Us Now
        </Link>
       </div>
      </div>
     </SwiperSlide>

     <SwiperSlide className='h-[500px] sm:h-[60vh]'>
      <div className='swiper-slide'>
       <img src={homeBg1} alt='home' className='w-full h-[100%]' />
       <div
        className='absolute bg-backgroundRgba w-full h-full leading-8
       flex justify-center flex-col items-center p-3'>
        <h1 className='text-lightBlue text-fontSize1 sm:text-2xl font-extrabold leading-10 text-center'>
         The No 1 Platform To Learn How To Build An Income Source Online
        </h1>
        <p className='mb-3 text-slate-200 font-semibold md:mt-5'>
         Start earning your first with affiliate marketing
        </p>
        <Link
         to='https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc'
         className='bg-lightBlue p-[10px] rounded-md
        py-[10px] px-[30px]  hover:bg-lightpurple hover:font-semibold'>
         Join Us Now
        </Link>
       </div>
      </div>
     </SwiperSlide>

     <SwiperSlide className='h-[500px] sm:h-[60vh]'>
      <div className='swiper-slide'>
       <img src={homeBg2} alt='home' className='w-full h-[100%]' />
       <div
        className='absolute bg-backgroundRgba w-full h-full leading-8
       flex justify-center flex-col items-center p-3'>
        <h1 className='text-lightBlue text-fontSize1 sm:text-2xl font-extrabold leading-10 text-center'>
         Learn How To Build A 6-7Figure Income Source Online
        </h1>
        <p className='mb-3 text-slate-200 font-semibold'>
         Step-by-step guide to earning profitable figures from affiliate
         marketing for complete beginners
        </p>
        <Link
         to='https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc'
         className='bg-lightBlue py-[10px] px-[30px] rounded-md  hover:bg-lightpurple hover:font-semibold'>
         Join Us Now
        </Link>
       </div>
      </div>
     </SwiperSlide>
    </Swiper>
   </div>

   <Features />
   <Faq />
  </>
 )
}

export default Home
