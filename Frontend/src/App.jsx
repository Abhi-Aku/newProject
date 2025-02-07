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
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/signUp",
      element: (
        <>
          <NavBar />
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/dashbord",
      element: (
        <>
          <NavBar />
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
