import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //if null sign in/sign up
    //create a new user --> sign in/sign up
    if (!isSignIn) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " --> " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Logged in user : " + user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " --> " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute flex">
        <img
          className="opacity-90"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col absolute p-16 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 rounded-md"
      >
        <h1 className="text-3xl text-white p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-4 bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="p-4 m-4 bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4  bg-gray-700 rounded"
        />
        <p className="px-16 text-red-700 text-xl text-bold">{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-600 rounded text-white"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-wrap justify-between">
          <label className="flex items-center space-x-2 px-4 py-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 rounded" />
            <span className="text-white ">Remember Me</span>
          </label>
          <p className="text-white p-2">Need help?</p>
        </div>
        <div className="flex flex-wrap">
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
