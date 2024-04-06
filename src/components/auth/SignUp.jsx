import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupBg from "../../assets/images/signup.png";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import Loader from "../../components/main/Loader";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.warning(
        "Password do not match",
        "Please reenter a new password correctly!",
        "warning"
      );
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // singn up
        const user = userCredential.user;

        console.log(user.displayName);

        toast.success("Registration successful...");
        setIsLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
        setIsLoading(false);
        // ..
      });
  };

  return (
    <>
      {IsLoading && <Loader />}
      <section className="bg-[#CDF8E5]">
        <div className="px-20 items-center justify-center sm:justify-normal sm:mx-auto rounded-2xl w-full h-full">
          <div className="p-20 flex relative">
            <div className="relative w-2/4">
              <div className="absolute inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-2xl rounded-r-none"></div>
              <img
                src={signupBg}
                alt="form background"
                className="object-cover"
              />
            </div>

            <div className="px-40 py-11 shadow-blackShadow w-3/5 sm:mx-6 rounded-2xl absolute right-20 bg-white">
              <h3 className="text-center font-bold text-black text-fontSize2">
                Sign <span className="text-[#33FFA8]">Up</span>
              </h3>
              <form className="leading-10" onSubmit={signupUser}>
                <input
                  type="name"
                  name="name"
                  autoComplete="on"
                  value={name}
                  placeholder="Full Name"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-[#A0A0A0] border-b-2 border-[#EAEAEA]"
                />
                <input
                  type="email"
                  name="email"
                  autoComplete="on"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-[#A0A0A0] border-b-2 border-[#EAEAEA]"
                />
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-[#A0A0A0] border-b-2 border-[#EAEAEA]"
                />
                <select
                  name="Country"
                  id="Country"
                  value="1"
                  className="w-full outline-none text-[#A0A0A0] border-b-2 border-[#EAEAEA]"
                >
                  {" "}
                  <option value="1" disabled>
                    {" "}
                    Country{" "}
                  </option>
                </select>
                <input
                  type="password"
                  name="cPassword"
                  autoComplete="on"
                  value={cPassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setCPassword(e.target.value)}
                  className="w-full outline-none text-[#A0A0A0] border-b-2 border-[#EAEAEA]"
                />
                <div className="flex w-full gap-2">
                  {" "}
                  <input type="checkbox" name="terms" id="terms" />{" "}
                  <p>
                    {" "}
                    I agree with{" "}
                    <span className="text-[#33FFA8]">
                      terms and conditions
                    </span>{" "}
                  </p>
                </div>
                <button
                  type="submit"
                  className="justify-center justify-items-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black w-full my-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                >
                  {" "}
                  Become a Student
                </button>
                <div>
                  <span>Already have an account?</span>
                  <Link
                    to="/login"
                    className="text-[#33FFA8] hover:text-[#18ff78] pl-2 transition-all hover:font-[600] hover:delay-300"
                  >
                    Log In
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

export default SignUp;
