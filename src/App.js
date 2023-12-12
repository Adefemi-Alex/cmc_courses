import { BrowserRouter, Route, Routes } from 'react-router-dom'
// react toastify notification
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import {
 Navbar,
 Home,
 Footer,
 Login,
 SignUp,
 ForgetPassword,
 Contact,
 About,
 Testimonial,
} from './components'

function App() {
 return (
  <div className='w-full h-auto flex flex-col'>
   <BrowserRouter>
    <ToastContainer />
    <Navbar />
    <main className='mt-[4.5rem] w-full'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/reset' element={<ForgetPassword />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/about' element={<About />} />
     </Routes>
    </main>
    <Footer />
   </BrowserRouter>
  </div>
 )
}

export default App
