import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { UseDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser,removeUser } from "../utils/store/userSlice";
const Body = () => {
  const dispatch = useDispatch();

  const creRoute = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={creRoute} />
    </div>
  );
};

export default Body;
