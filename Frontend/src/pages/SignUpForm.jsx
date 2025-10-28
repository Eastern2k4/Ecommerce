import React from "react";
import { Link } from "react-router-dom";
//import alreadyAMemberSignIn from "../assets/images/already-a-member-sign-in.svg";
//import button from "../assets/images/button.svg";
import eyeOff from "../assets/images/eye-off.svg";
import i from "../assets/images/i.svg";
//import icRoundPhone from "../assets/images/ic-round-phone.svg";
import image55 from "../assets/images/image-55.png";
import line2 from "../assets/images/line-2.svg";
import logosGoogleIcon from "../assets/images/logos-google-icon.svg";
import svg from "../assets/images/svg.svg";

const SignUpForm = () => {
  return (
    <main className="flex flex-col min-h-screen bg-blue-600 border-2 border-solid border-[#ced4da] overflow-hidden">
      <section className="relative w-full max-w-[1391px] mx-auto bg-gray-50">
        <header className="flex items-center justify-between h-20 px-20 bg-[#e2e2e2] border-b border-[#0e0909] shadow-sm">
          <Link to="/home">
              <h1 className="text-2xl font-normal text-black font-inter cursor-pointer">
                  TechNest
              </h1>
          </Link>
          <nav className="flex items-center gap-10 text-base text-[#111827]">
            <div className="flex items-center gap-1">
              <button className="text-center">Catalog</button>
              <img src={svg} alt="Dropdown" className="w-3 h-3" />
            </div>
            <span>Phone</span>
            <span>Laptop</span>
            <span>Screen</span>
            <span>Headphone</span>
          </nav>
          <div className="flex items-center gap-6">
            <img alt="Search" className="w-[18px] h-7" />
            <button className="text-xl text-[#666666]">🛒</button>
            <img src={i} alt="Info" className="w-4 h-[21px]" />
            {/*<button className="bg-[#404757] text-white text-sm px-4 py-2 rounded-lg">
              Sign In
            </button>*/}
            <p className="mt-6 text-center text-[18px] text-[#00000099]">
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </header>

        <section className="flex flex-col lg:flex-row items-start justify-center gap-20 px-10 py-20">
          <div className="flex flex-col items-center w-full max-w-[623px]">
            <img
              src={image55}
              alt="TechNest Illustration"
              className="w-full h-auto object-cover mb-10"
            />
            <div className="text-center">
              <h2 className="text-[60px] font-extrabold leading-[92px] text-black">
                Create an account
              </h2>
              <p className="text-[30px] text-[#00000099]">
                Let&apos;s create your account
              </p>
            </div>
            {/*<img
              //src={alreadyAMemberSignIn}
              alt="Already a member? Sign in"
              className="mt-10"
            />*/}
            <p className="mt-6 text-center text-[18px] text-[#00000099]">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>

          </div>

          <form className="flex flex-col w-full max-w-[507px] gap-8">
            <div>
              <label
                htmlFor="fullName"
                className="block text-black font-bold text-xl mb-2"
              >
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-8 py-5 bg-[#0000000d] rounded-[15px] text-[#00000099] text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-black font-bold text-xl mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-8 py-5 bg-[#0000000d] rounded-[15px] text-[#00000099] text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-black font-bold text-xl mb-2"
              >
                Password
              </label>
              <div className="flex items-center px-8 py-5 bg-[#0000000d] rounded-[15px]">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent outline-none text-[#00000099] text-lg"
                />
                <img
                  src={eyeOff}
                  alt="Toggle visibility"
                  className="w-6 h-6 ml-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-black text-white text-lg font-medium rounded-[15px]"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-between w-full">
              <img src={line2} alt="line" className="w-[45%] h-px" />
              <span className="text-[#00000099] text-lg">Or</span>
              <img src={line2} alt="line" className="w-[45%] h-px" />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-6 w-full py-5 border border-[#0000004c] rounded-[15px]"
            >
              <img src={logosGoogleIcon} alt="Google" className="w-9 h-9" />
              <span className="text-black text-lg font-medium">
                Sign Up with Google
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-6 w-full py-5 bg-gray-200 rounded-[15px]"
            >
              <img src alt="Phone" className="w-10 h-10" />
              <span className="text-black text-lg font-medium">
                Sign Up with Phone Number
              </span>
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default SignUpForm;