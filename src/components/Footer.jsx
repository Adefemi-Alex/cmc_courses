import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsWhatsapp, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { FaLocationArrow } from 'react-icons/fa'
import logo from '../assets/images/logo3.png'
import { TermsAndCondPopup, PrivacyAndPlicy } from '../components'
import Faq from './Faq'

function Footer() {
 const date = new Date()
 const year = date.getFullYear()

 const [isPopupOpen, setIsPopupOpen] = useState(false)
 const [isPopupPrivacy, setIsPopupPrivacy] = useState(false)

 const openTermsPopup = () => {
  setIsPopupOpen(!isPopupOpen)
 }

 const openPrivacyPopup = () => {
  setIsPopupPrivacy(!isPopupPrivacy)
 }

 if (isPopupOpen) {
  return <TermsAndCondPopup openTermsPopup={openTermsPopup} />
 } else if (isPopupPrivacy) {
  return <PrivacyAndPlicy openPrivacyPopup={openPrivacyPopup} />
 }

 return (
  <>
   <footer className='p-5 bg-gray-900'>
    <div className='footer-heading w-1/3 ml-8 md:w-full md:mx-auto'>
     <img src={logo} alt='Logo' className='mb-5 w-[200px]' />
     <p className='pb-5 text-base text-[whitesmoke]'>
      At ExpertSkillz, our mission is clear: to provide accessible and
      comprehensive training in affiliate marketing, equipping individuals with
      the tools they need to succeed online. We believe that anyone can achieve
      financial freedom through expert guidance and the right education.
     </p>
     <ul className='flex items-center gap-5 pb-8 list-none'>
      <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
       <Link to='https://wa.link/9uytp6'>
        <BsWhatsapp size={22} />
       </Link>
      </li>
      <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
       <Link to='/'>
        <BsFacebook size={22} />
       </Link>
      </li>
      <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
       <Link to='http://www.twitter.com/expert_skillz'>
        <BsTwitter size={22} />
       </Link>
      </li>
      <li className='text-white bg-lightBlue p-2 rounded-[50%]'>
       <Link to='http://www.intagram.com/wearexpertskillz'>
        <BsInstagram size={22} />
       </Link>
      </li>
     </ul>
    </div>
    <div className='container flex justify-around sm:flex-col sm:ml-auto'>
     <div className='footer-box'>
      <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
       Resources
      </h5>
      <li className='flex items-center pb-2'>
       <Link to={Faq} className='text-white'>
        FAQ
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <Link to='/' className='text-white'>
        Blog
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <Link to='/' className='text-white'>
        Newsletter
       </Link>
      </li>
     </div>

     <div className='footer-box gap-5'>
      <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
       Contact Us
      </h5>
      <li className='flex items-center pb-2'>
       <FiPhoneCall className='mr-3 text-lightBlue ' size={20} />
       <Link to='tel:+2349079554814' className='text-white'>
        +2349079554814
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <FiMail className='mr-3 text-lightBlue ' size={20} />
       <Link to='http://www.wearexpertskillz@gmail.com' className='text-white'>
        wearexpertskillz@gmail.com
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <FaLocationArrow className='mr-3 text-lightBlue ' size={20} />
       <Link
        href='https://maps.app.goo.gl/WPLUVRoTUEnK4XB59'
        className='text-white'>
        Lekki Ajah along Epe express way
       </Link>
      </li>
     </div>

     <div className='footer-box'>
      <h5 className='title text-fontSize2 font-medium pb-3 text-lightBlue sm:pt-6'>
       Company
      </h5>
      <li className='flex items-center pb-2'>
       <Link href='/' className='text-white'>
        About Us
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <Link to='/' className='text-white' onClick={openPrivacyPopup}>
        Pivacy & Policy
       </Link>
      </li>
      <li className='flex items-center pb-2'>
       <Link className='text-white' onClick={openTermsPopup}>
        Terms & Condition
       </Link>
      </li>
     </div>
    </div>
    <div className='copy-right mt-10 '>
     <p className='text-center text-lightWhite items-center justify-center'>
      Copyright &copy; {year}{' '}
      <span className='text-lightBlue'>ExpertSkillz</span> All rights reserved
     </p>
    </div>
   </footer>
  </>
 )
}

export default Footer
