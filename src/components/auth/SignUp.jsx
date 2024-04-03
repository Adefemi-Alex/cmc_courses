import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signupBg from '../../assets/images/signup1.png'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import Loader from '../../components/main/Loader'

function SignUp() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [cPassword, setCPassword] = useState('')
 const [IsLoading, setIsLoading] = useState(false)

 const navigate = useNavigate()

 const signupUser = (e) => {
  e.preventDefault()

  if (password !== cPassword) {
   toast.warning(
    'Password do not match',
    'Please reenter a new password correctly!',
    'warning'
   )
  }

  setIsLoading(true)

  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // singn up
    const user = userCredential.user

    console.log(user.displayName)

    toast.success('Registration successful...')
    setIsLoading(false)
    navigate('/login')
   })
   .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    toast.error(errorCode, errorMessage)
    setIsLoading(false)
    // ..
   })
 }

 return (
  <>
   {IsLoading && <Loader />}
   <section
    className='flex mx-20 items-center justify-center
   sm:justify-normal sm:mx-auto my-6'>
    <div
     className='flex-col p-5 shadow-blackShadow
      bg-lightWhite rounded-lg flex-1 w-[35rem]
      sm:mx-6 my-5'>
     <h3 className='text-center font-bold text-gray-700'>Sign Up</h3>
     <form className='gap-3 leading-10 w-full' onSubmit={signupUser}>
      <p className='text-black font-[600]'>Email</p>
      <input
       type='email'
       name='email'
       autoComplete='on'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className='w-full pl-5 outline-none text-grays
        border bg-blue-100 border-blackShadow'
      />
      <p className='text-black font-[600]'>Password</p>
      <input
       type='password'
       name='password'
       autoComplete='on'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className='w-full pl-5 outline-none text-grays
        border bg-blue-100 border-blackShadow'
      />
      <p className='text-black font-[600]'>Confirm Password</p>
      <input
       type='password'
       name='cPassword'
       autoComplete='on'
       value={cPassword}
       onChange={(e) => setCPassword(e.target.value)}
       className='w-full pl-5 outline-none text-grays
        border bg-blue-100 border-blackShadow'
      />
      <button
       type='submit'
       className='justify-center justify-items-center bg-lightBlue 
       rounded-lg text-white w-full my-5 transition ease-in-out
        delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe]
         duration-[0.3s] '>
       Sign up
      </button>
     </form>
     <div>
      <span>Already have an account</span>
      <Link
       to='/login'
       className='text-lightBlue hover:text-[#007dfe]
       pl-2 transition-all hover:font-[600] hover:delay-300'>
       Login
      </Link>
     </div>
    </div>
    <div className='flex-1 sm:hidden'>
     <img src={signupBg} alt='form backgorund' />
    </div>
   </section>
  </>
 )
}

export default SignUp
