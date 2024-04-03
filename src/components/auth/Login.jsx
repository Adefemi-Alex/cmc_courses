import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signinBg from '../../assets/images/login1.png'
import googleLogo from '../../assets/images/google.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'
import Loader from '../../components/main/Loader'

function Login() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [IsLoading, setIsLoading] = useState(false)

 const navigate = useNavigate()

 const signinUser = (e) => {
  e.preventDefault()
  setIsLoading(true)
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    // const user = userCredential.user

    toast.success('Login Successful', 'Hey welcome back!')
    setIsLoading(false)
    navigate('/')
   })
   .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    toast.error(errorCode, errorMessage)
    setIsLoading(false)
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
     <h3 className='text-center font-bold text-gray-700'>Sign In</h3>
     <form className='gap-3 leading-10 w-full' onSubmit={signinUser}>
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

      <button
       type='submit'
       className='justify-center justify-items-center bg-lightBlue 
       rounded-lg text-white w-full my-5 transition ease-in-out
        delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe]
         duration-[0.3s] '>
       Sign In
      </button>
      <div className=''>
       <Link
        to='/reset'
        className='text-red-600 transition-all delay-[0.3s] hover:font-[600]
        hover:text-red-700'>
        Forget Password
       </Link>
      </div>
      <p className='text-center'>-- or --</p>
     </form>
     <button
      className='bg-gray-700 text-white py-2 gap-2 
     items-center justify-center rounded-lg w-full flex 
     mb-2 transition ease-in-out delay-150 hover:-translate-y-1
      hover:scale-105 hover:bg-gray-500 duration-300 '>
      Signin
      <img src={googleLogo} alt='signin with google' width={60} />
     </button>
     <div>
      <span>Don't have an account</span>
      <Link
       to='/signup'
       className='text-blue-600 hover:font-[500] pl-2 
       hover:text-lightBlue transition-all hover:delay[-0.3s]'>
       Sign Up
      </Link>
     </div>
    </div>
    <div className='flex-1 sm:hidden'>
     <img src={signinBg} alt='form backgorund' />
    </div>
   </section>
  </>
 )
}

export default Login
