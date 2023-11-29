import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userIcon } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //whenever component unmounts we will unsubscribe from onAuthStateChanged
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    //Toggle gpt search
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    //  console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-48 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="font-bold text-xl px-8 py-2 m-1 border border-white rounded hover:bg-gray-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="text-white font-bold px-8 py-2 m-auto md:m-1 border border-white rounded hover:bg-gray-800"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="hidden md:block">
            <img
              className="w-14 h-14 p-2 m-2"
              src={userIcon}
              alt="profile-icon"
            />
          </div>
          <button
            onClick={handleSignOut}
            className="text-white font-bold px-2 m-auto md:m-1"
          >
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
