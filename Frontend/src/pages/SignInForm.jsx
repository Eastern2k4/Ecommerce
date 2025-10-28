import React from "react";
import { Link } from "react-router-dom";
import button from "../assets/images/button.svg";
import eyeOff from "../assets/images/eye-off.svg";
import infoIcon from "../assets/images/i.svg";
import phoneIcon from "../assets/images/ic-round-phone.svg";
import logoImage from "../assets/images/image-55.png";
import dividerLine from "../assets/images/line-2.svg";
import googleIcon from "../assets/images/logos-google-icon.svg";
import dropdownIcon from "../assets/images/svg.svg";
export default function SignInForm() {
  return (
    <main className="min-h-screen bg-blue-600 border-2 border-solid border-[#ced4da]">
      <section className="relative w-full max-w-[1391px] mx-auto bg-gray-50">
        <header className="flex items-center justify-between h-20 px-20 bg-[#e2e2e2] border-b border-[#0e0909] shadow-sm">
          <div className="flex items-center space-x-32 w-full max-w-[1280px]">
          <Link to="/home">
            <h1 className="text-2xl font-normal text-black font-inter cursor-pointer">
              TechNest
            </h1>
          </Link>
            <nav className="flex items-center space-x-24 text-base text-[#111827] font-inter">
              <div className="flex items-center space-x-1">
                <button className="text-center">Catalog</button>
                <img src={dropdownIcon} alt="Dropdown" className="w-3 h-3" />
              </div>
              <span>Phone</span>
              <span>Laptop</span>
              <span>Screen</span>
              <span>Headphone</span>
            </nav>
            <div className="flex items-center space-x-6">
              <img src={button} alt="Search" className="w-[18px] h-7" />
              <button className="text-xl text-[#666666]">🛒</button>
              <img src={infoIcon} alt="Info" className="w-4 h-[21px]" />
            </div>
            <button className="bg-[#404757] text-white text-sm rounded-lg px-4 py-2">
              Sign In
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-24 px-12 py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[60px] font-extrabold text-black leading-[92px] font-lato">
              Welcome Back
            </h2>
            <p className="text-[30px] text-[#00000099] font-lato mt-2">
              Login in to your account
            </p>
            <img
              src={logoImage}
              alt="TechNest Logo"
              className="w-[623px] mt-4 object-cover"
            />
            {/*<img
              src={firstTimeHereSignup}
              alt="First time here? Signup"
              className="w-[237px] mt-16"
            />*/}
            <p className="mt-6 text-center text-[18px] text-[#00000099]">
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>

          </div>

          <form className="w-full max-w-[507px] space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-black font-semibold text-lg mb-2"
              >
                Email
              </label>
              <div className="bg-[#0000000d] rounded-[15px] px-8 py-5">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-[24px] text-[#00000099] font-lato outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-black font-semibold text-lg mb-2"
              >
                Password
              </label>
              <div className="flex items-center bg-[#0000000d] rounded-[15px] px-8 py-5">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent text-[24px] text-[#00000099] font-lato outline-none"
                />
                <img src={eyeOff} alt="Toggle visibility" className="w-9 h-9" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-[#828282] text-[24px] font-medium font-lato py-5 rounded-[15px]"
            >
              Sign in
            </button>

            <div className="flex items-center justify-between">
              <img src={dividerLine} alt="Divider" className="w-[229px] h-px" />
              <span className="text-[#00000099] text-[21px] font-lato">Or</span>
              <img src={dividerLine} alt="Divider" className="w-[229px] h-px" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-6 border border-[#0000004c] rounded-[15px] px-20 py-6"
            >
              <img src={googleIcon} alt="Google" className="w-9 h-9" />
              <span className="text-[24px] text-black font-medium font-lato">
                Sign in with Google
              </span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-6 bg-gray-200 rounded-[15px] px-20 py-6"
            >
              <img src={phoneIcon} alt="Phone" className="w-[42px] h-[42px]" />
              <span className="text-[24px] text-black font-medium font-lato">
                Sign inh with Phone Number
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};