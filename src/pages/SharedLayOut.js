import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Navbar from "../components/Navbar/Index";
import SideBar from "../components/SideBar/SideBar";

const SharedLayOut = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Navbar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        toggleSideBar={toggleSideBar}
      />

      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default SharedLayOut;
