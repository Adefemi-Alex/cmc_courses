import { signInWithEmailAndPassword } from "firebase/auth";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import facebookLogo from "../../assets/images/facebook.png";
import googleLogo from "../../assets/images/google.png";
import signupBg from "../../assets/images/signup.png";
import Loader from "../../components/main/Loader";
import { auth } from "../firebase/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signinUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user
        toast.success("Login Successful", "Hey welcome back!");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className="bg-[#CDF8E5]">
        <div className="px-20 items-center justify-center sm:justify-normal sm:mx-auto rounded-2xl w-full h-full">
          <div className="p-20 flex relative">
            <div className="relative w-3/4">
              <div className="absolute inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-2xl rounded-r-none"></div>
              <img
                src={signupBg}
                alt="form background"
                className="object-cover"
              />
            </div>

            <div className="px-28 py-[86px] shadow-blackShadow w-3/5 sm:mx-6 rounded-2xl absolute right-20 bg-white">
              <h3 className="text-center font-bold text-black text-fontSize2">
                Log <span className="text-[#33FFA8]">In</span>
              </h3>
              <form
                className="flex flex-col gap-5 leading-10"
                onSubmit={signinUser}
              >
                <div className="flex justify-between mb-0 mt-7 w-full">
                  {/* Sign in with Google button */}
                  <button className="flex items-center gap-2 w-60 bg-white px-3 py-2 border-[#33FFA8] border-inset border-2 rounded-md text-black shadow-lg">
                    <img
                      src={googleLogo}
                      alt="Google Logo"
                      className="w-12 h-7"
                    />
                    Sign in with Google
                  </button>
                  {/* Sign in with Facebook button */}
                  <button className="flex items-center gap-2 w-60 bg-white px-3 py-2 border-[#33FFA8] border-inset border-2 rounded-md text-black shadow-lg">
                    <img
                      src={facebookLogo}
                      alt="Facebook Logo"
                      className="w-10 h-7"
                    />
                    Sign in with Facebook
                  </button>
                </div>
                {/* Or section */}
                <p className="text-center text-gre`0y">- OR -</p>
                <input
                  type="email"
                  name="email"
                  autoComplete="on"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-grays border-b-2 border-grey"
                />
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-grays border-b-2 border-grey"
                />
                <div className="flex w-full gap-2">
                  <p className="text-[#33FFA8]">Forgot Password?</p>
                </div>
                <button
                  type="submit"
                  className="justify-center justify-items-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black w-full my-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                >
                  {" "}
                  Log In
                </button>
                <div>
                  <span>Don't have an account?</span>
                  <Link
                    to="/getstarted"
                    className="text-[#33FFA8] hover:text-[#18ff78] pl-2 transition-all hover:font-[600] hover:delay-300"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
