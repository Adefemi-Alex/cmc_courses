import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
 FaEnvelope,
 FaFacebook,
 FaInstagram,
 FaLocationArrow,
 FaPhoneAlt,
 FaTwitter,
 FaWhatsapp,
} from 'react-icons/fa'
import contactBg from '../assets/images/homebg1.jpg'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'

import { toast } from 'react-toastify'

const Contact = () => {
 const form = useRef()
 const [IsLoading, setIsLoading] = useState(false)

 const sendEmail = (e) => {
  e.preventDefault()

  setIsLoading(true)
  emailjs
   .sendForm(
    'service_tucqj6r',
    'template_guijnto',
    form.current,
    'efnEqvkPFPdo5XjWL'
   )
   .then(
    (result) => {
     toast.success('Message was sent successfully')
     setIsLoading(false)
    },
    (error) => {
     toast.error(error.text)
     setIsLoading(false)
    }
   )
 }

 return (
  <>
   {IsLoading && <Loader />}
   <figure className='relative h-[500px] sm:h-[60vh]'>
    <img src={contactBg} alt='contact background' className='h-full w-full' />
    <div
     className='bg-backgroundRgba h-[100%] w-full top-0 absolute 
    flex items-center justify-center text-center p-11 flex-col tracking-wider'>
     <h2
      className='text-lightBlue text-fontSize2 mb-4 font-bold sm:font-[500] 
     capitalize sm:text-fontSize2'>
      If you have any questions or would like to get in touch with us,<br></br>{' '}
      please feel free to contact us
     </h2>
     <p className='text-white text-fontSize2 sm:text-fontSize3 capitalize'>
      We Love hearing from your
     </p>
     <Link
      to='https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc'
      className='bg-lightBlue p-[10px] rounded-md
        py-[10px] px-[30px]  hover:bg-lightpurple hover:font-semibold'>
      Join Us Now
     </Link>
    </div>
   </figure>

   <section className='contact py-10 px-[5%] bg-gray-100'>
    <div className='max-width text-center relative mb-10 mt-5'>
     <h2 className='title text-fontSize1 text-lightBlue font-semibold text-center'>
      Contact Us
     </h2>
     <hr className='border-none bg-lightpurple w-14 h-2 mt-8 absolute left-[50%] top-[5px] translate-x-[-50%]' />
    </div>
    <div
     className='contact-content flex justify-between py-[13px] gap-10 md:flex-wrap
    '>
     <div className='column left basis-[45% self-start sm:basis-[100%] md:hidden'>
      <h4 className='text text-fontSize3 font-[600] text-lightBlue'>
       Your response are always valued
      </h4>
      <p className='text-gray-600 font-medium w-[80%]'>
       We will be so glad to hear from you. feel free to ask question. and get
       ready to make money online.
      </p>
      <div className='icons leading-8'>
       <div className='row flex items-center gap-5'>
        <FaLocationArrow className='text-lightBlue text-2xl' />
        <div className='info'>
         <h4 className='head text-fontSize3 font-semibold  text-gray-950'>
          Location
         </h4>
         <div className='sub-title text-gray-500 font-medium'>
          Lekki Lagos, Nigeria
         </div>
        </div>
       </div>

       <div className='row flex items-center gap-5'>
        <FaPhoneAlt className='text-lightBlue text-2xl' />
        <div className='info'>
         <h4 className='head text-fontSize3 font-semibold  text-gray-950'>
          Phone
         </h4>
         <div className='sub-title text-gray-500 font-medium'>
          +2349079554814
         </div>
        </div>
       </div>

       <div className='row flex items-center gap-5'>
        <FaEnvelope className='text-lightBlue text-2xl' />
        <div className='info'>
         <h4 className='head text-fontSize3 text-gray-950 font-semibold'>
          Email
         </h4>
         <div className='sub-title text-gray-500 font-medium'>
          wearexpertskillz@gmail.com
         </div>
        </div>
       </div>

       <div className='social-links sm:mt-3'>
        <h4 className='font-semibold text-fontSize3'>Follow us</h4>
        <div className='flex gap-3'>
         <Link
          className='text-white bg-lightBlue p-2 rounded-[50%]'
          to='https://web.facebook.com/profile.php?id=61554737001770'>
          <FaFacebook />
         </Link>
         <Link
          to='http://www.twitter.com/expert_skillz'
          className='text-white bg-lightBlue p-2 rounded-[50%]'>
          <FaTwitter />
         </Link>
         <Link
          to='http://www.intagram.com/wearexpertskillz'
          className='text-white bg-lightBlue p-2 rounded-[50%]'>
          <FaInstagram />
         </Link>
         <Link
          to='https://wa.link/9uytp6'
          className='text-white bg-lightBlue p-2 rounded-[50%]'>
          <FaWhatsapp />
         </Link>
        </div>
       </div>
      </div>
     </div>
     <div className='column right basis-[45%] sm:basis-[100%]'>
      <div className='text text-lightBlue font-bold text-fontSize2'>
       Send Us A Message
      </div>
      <p className='text-gray-500 mb-5 font-medium'>
       We promise to get back as soon as possible we can
      </p>
      <form ref={form} onSubmit={sendEmail} className='leading-8'>
       <div className=' flex flex-col mb-4'>
        <label className='text-fontSize3 font-semibold  text-gray-950'>
         Name
        </label>
        <input
         type='text'
         name='user_name'
         className=' border border-gray-500 bg-white
         outline-none pl-5 h-10 rounded-[5px] w-full text-gray-500 font-medium'
        />
       </div>
       <div className='flex flex-col mb-4'>
        <label className='text-fontSize3 font-semibold  text-gray-950'>
         Email
        </label>
        <input
         type='email'
         name='user_email'
         className=' border border-gray-500 font-medium
         outline-none pl-5 h-10 rounded-[5px] w-full'
        />
       </div>
       <div className='flex flex-col mb-4'>
        <label className='text-fontSize3 font-semibold  text-gray-950'>
         Message
        </label>
        <textarea
         name='message'
         className='resize-none w-full border-gray-500
        border outline-none pl-5 font-medium'
        />
       </div>
       <button
        type='submit'
        value='Send'
        className='bg-lightBlue px-8 py-2 flex
       text-white rounded items-center text-[17px] 
       hover:bg-lightpurple hover:font-semibold transition-all'>
        Submit <FaLocationArrow className='ml-3' />
       </button>
      </form>
     </div>
    </div>
   </section>
  </>
 )
}

export default Contact
