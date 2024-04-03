import { BrowserRouter, Route, Routes } from "react-router-dom";
// react toastify notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  About,
  Footer,
  ForgetPassword,
  Home,
  Login,
  Navbar,
  SignUp,
} from "./components";
import Courses from "./components/Courses";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <main className="mt-[4.5rem] w-full">
        {/* <main className="w-full"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset" element={<ForgetPassword />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/getstarted" element={<SignUp />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
