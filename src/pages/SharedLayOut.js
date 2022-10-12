import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Navbar from "../components/Navbar/Index";
import OverLay from "../components/OverLay/Index";
import SideBar from "../components/SideBar/SideBar";

const SharedLayOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <Navbar toggleSideBar={toggleSideBar} />
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <OverLay isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default SharedLayOut;
