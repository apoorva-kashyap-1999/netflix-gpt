import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";


const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, displayName , photoURL } = user;
  //       dispatch(addUser({ uid, email, displayName , photoURL}));
  //       navigate('/browse')
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate('/')
  //     }
  //   });
  // }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
