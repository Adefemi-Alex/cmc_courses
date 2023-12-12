import React from 'react'
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import studentPic from '../assets/images/student1.jpg'
import studentPic1 from '../assets/images/student2.jpg'
import studentPic2 from '../assets/images/student3.jpg'
import studentPic3 from '../assets/images/student4.jpg'
import studentPic4 from '../assets/images/student7.jpg'
import studentPic5 from '../assets/images/student6.jpg'
import studentPic6 from '../assets/images/student9.jpg'
import studentPic7 from '../assets/images/student10.jpg'

function Reviews() {
 return (
  <>
   {/* reviews section starts  */}

   <div className='my-8 mx-5'>
    <div className='text-center mb-5'>
     <h4 className='text-lightBlue font-semibold ml-6'>Testimonials</h4>
     <h1
      className='text-gray-950 text-fontSize1 font-extrabold
     md:text-fontSize3'>
      What Our Students Say about us
     </h1>
    </div>

    <Swiper
     slidesPerView={3}
     spaceBetween={30}
     pagination={{
      clickable: true,
     }}
     breakpoints={{
      320: {
       slidesPerView: 1,
       spaceBetween: 20,
      },
      768: {
       slidesPerView: 2,
       spaceBetween: 40,
      },
      1024: {
       slidesPerView: 3,
       spaceBetween: 50,
      },
     }}
     modules={[Pagination, Autoplay, Navigation]}
     autoplay={{ delay: 5000 }}
     className='mySwiper'>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         The Complete Affiliate Mastery Course from <b>Expertskillz</b> has
         helped I and thousands of individuals learn how to succeed in Affiliate
         Marketing in a short period of time. With this course, I've learnt how
         to make money online in just few days. It's an incredible course that
         will surely yield good result if you give it a trial.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Popoola Hikimat
          </h3>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         <b>ExpertSkillz</b> has been a total game-changer for me in the online
         world! Their first course which is their flagship course on making
         money online <b>“CMC”</b> is top-notch. With the trainings I got on
         CMC, I have seen massive results in no time even as a newbie doing
         digital marketing! Another thing is, the mentorship on <b>CMC</b> is
         super beginner-friendly. Highly recommend them!
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic1}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Adejumo Eniola
          </h3>
          <p className='text-gray-500 font-semibold'>Affiliate Marketer</p>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         <b>Expertskillz</b> provided incredible help with <b>CMC.</b> The
         course is exceptional, and I've made millions despite economic
         challenges. Give it a try for a transformative online money-making
         experience.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic2}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Aigbe Gift
          </h3>
          <p className='text-gray-500 font-semibold'>Affiliate Marketer</p>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         I have been a victim of online scam over the years. But after I was
         introduced to <b>CMC on ExpertSkillz</b> everything changed. In a short
         time, I've gained valuable affiliate marketing skills and massive
         results under Coach Ayomide Wakeel guidance on <b>CMC.</b>
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic3}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Rachael ogwo Matthew
          </h3>
          <p className='text-gray-500 font-semibold'>Affiliate Marketer</p>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         The Complete Affiliate Mastery Course <b>(CMC) by ExpertSkillz</b> is a
         must-have for anyone interested in affiliate marketing. I learned
         everything I needed to know about affiliate marketing, and the results
         I saw were phenomenal. The course was well-organized and easy to
         follow, and the support I received was top-notch. I can't recommend
         this course enough! It’s just the best.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic6}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Egwu Chioma glory
          </h3>
          <p className='text-gray-500 font-semibold'>Affiliate Marketer</p>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadown h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         <b>CMC</b> is not just a course, it’s a full mentorship program under
         <b> ExpertSkillz</b> which is an online training academy that train
         individuals on how to setup and start different online business model
         which affiliate marketing is one of. And paying for <b>CMC</b> is the
         best opportunity I ever took. Thanks boss Ayomide, I really appreciate.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic5}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Richard ndubuisi
          </h3>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         <b>ExpertSkillz</b>, have really changed a lot of our perspectives
         about online opportunities. I was introduced to <b>ExpertSkillz</b> by
         my amiable coach Ayomide Wakeel. And Alhamdulillah i never regretted
         taking the decision of getting trained under the <b>ExpertSkillz</b>{' '}
         academy learning how to make money online.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic4}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Lawal Sufiyan
          </h3>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className='content bg-slate-100 p-5 rounded-[5px] shadow-boxshadow h-[450px] space-y-4'>
       <div className='flex items-center my-3 mx-2 gap-16'>
        <FaQuoteLeft className='text-lightBlue' size={40} />
        <div className='flex text-lightBlue ml-10 float-right text-end items-end text-2xl'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalfAlt />
        </div>
       </div>
       <div>
        <p className='text-gray-500'>
         <b> Expertstillz</b> course <b>CMC</b> has being a great experience for
         me with the help of my mentor, Ayomide Wakeel. It was after paying for
         this program I believe that legitimate online opportunities exist. Just
         give it a try and see massive results. Thank you Ayomide Wakeel for
         creating not just a course, but a program like <b>CMC</b>.
        </p>
        <div className='user flex items-center gap-4 mt-5'>
         <img
          src={studentPic7}
          alt='user'
          className='w-[5rem] h-[5rem] rounded-full object-center'
         />
         <div>
          <h3 className='text-gray-950 capitalize text-fontSize3 font-bold'>
           Akinwunmi Ayomiposi Maria
          </h3>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
    </Swiper>
   </div>
  </>
 )
}

export default Reviews
