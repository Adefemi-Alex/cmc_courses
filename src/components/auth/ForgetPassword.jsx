import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import forgetIMg from '../../assets/images/forget.png'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'
import Loader from './../Loader'

const ForgetPassword = () => {
 const [email, setEmail] = useState('')
 const [loading, setIsLoading] = useState(false)

 const resetPassword = (e) => {
  e.preventDefault()
  setIsLoading(true)

  sendPasswordResetEmail(auth, email)
   .then(() => {
    toast.success('check your mail for a reset link', 'success')
    setIsLoading(false)
   })
   .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
   })
 }

 return (
  <>
   {loading && <Loader />}
   <section
    className='flex mx-20 items-center justify-center
   sm:justify-normal sm:mx-auto my-6'>
    <div
     className='flex-col p-5 shadow-blackShadow
      bg-lightWhite rounded-lg flex-1 w-[35rem]
      sm:mx-6 my-5'>
     <h3 className='text-center font-bold text-lightBlue text-fontSize1'>
      Reset Password
     </h3>
     <form className='gap-3 leading-10 w-full' onSubmit={resetPassword}>
      <p className='text-lightpurple text-fontSize2 font-[600]'>Email</p>
      <input
       type='email'
       name='email'
       autoComplete='on'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className='w-full pl-5 outline-none text-grays
        border bg-blue-100 border-blackShadow'
      />
      <button
       type='submit'
       className='justify-center justify-items-center bg-lightBlue 
       rounded-lg text-white w-full my-5 transition ease-in-out
        hover:bg-[#007dfe]
         duration-[0.3s] '>
       Reset Password
      </button>
     </form>

     <div className='flex justify-between'>
      <Link
       to='/login'
       className='text-lightpurple transition-all hover:font-[600]
      '>
       Login
      </Link>

      <Link
       to='/signup'
       className='text-lightpurple transition-all hover:font-[600]
        '>
       Sign Up
      </Link>
     </div>
    </div>
    <div className='flex-1 sm:hidden'>
     <img src={forgetIMg} alt='form backgorund' />
    </div>
   </section>
  </>
 )
}

export default ForgetPassword
