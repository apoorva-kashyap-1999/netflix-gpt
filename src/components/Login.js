import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, photoURL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

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
            displayName: name.current.value , photoURL: {photoURL}
          }).then(() => {
            const { uid, email, displayName , photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName , photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
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
      <div className="fixed flex">
        <img
          className="h-screen object-cover  w-screen opacity-90"
          src={BACKGROUND_IMG}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col absolute p-16 bg-black bg-opacity-80 w-10/12 md:w-3/12 my-36 mx-auto right-0 left-0 rounded-md"
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
