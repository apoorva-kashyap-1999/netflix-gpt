import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="opacity-90"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="flex flex-col absolute p-16 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 rounded-md">
         <h1 className="text-3xl text-white p-4">{isSignIn? 'Sign In' : 'Sign Up'}</h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 m-4 bg-gray-700 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 m-4 bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4  bg-gray-700 rounded"
        />
        <button className="p-4 m-4 bg-red-600 rounded text-white">
          {isSignIn?'Sign In':'Sign Up'}
        </button>
        <div className="flex justify-between">
          <label className="flex items-center space-x-2 px-4 py-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 rounded" />
            <span className="text-white ">Remember Me</span>
          </label>
          <p className="text-white p-2">Need help?</p>
        </div>
        <div className="flex">
          {isSignIn ? (
            <>
              <span className="p-4 text-xl text-gray-400">
                New to Netflix ?
              </span>
              <h3
                className="text-xl text-white py-4 cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign Up Now.
              </h3>
            </>
          ) : (
            <h3
              className="text-xl text-white p-4 cursor-pointer"
              onClick={toggleSignInForm}
            >
             Already registered? Sign In..
            </h3>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
