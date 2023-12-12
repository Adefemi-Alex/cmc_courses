import React from 'react'
import loadindImg from '../assets/images/loaiding.gif'
import { createPortal } from 'react-dom'

function Loader() {
 return createPortal(
  <div className=' bg-backgroundRgba w-[100%] h-[100vh] z-[9] fixed top-0'>
   <div className='top-[50%] left-[50%] z-[999] fixed translate-x-[-50%] translate-y-[-50%]'>
    <img src={loadindImg} alt='Loader' className='w-[100px]' />
   </div>
  </div>,
  document.getElementById('loader')
 )
}

export default Loader
