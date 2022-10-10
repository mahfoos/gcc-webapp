import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Navbar from "../components/Navbar/Index";

const SharedLayOut = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default SharedLayOut;
