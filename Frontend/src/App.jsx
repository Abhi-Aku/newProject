import React from 'react';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Dashbord from './Component/Dashbord';
import NavBar from "./Component/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/signUp",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
        <Login />
        </>
      ),
    },
    {
      path: "/dashbord",
      element: (
        <>
          <Dashbord />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
