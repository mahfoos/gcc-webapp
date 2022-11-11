import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Header from "../components/Header/Index";
import Navbar from "../components/Navbar/Index";
import OverLay from "../components/OverLay/Index";
import SideBar from "../components/SideBar/SideBar";
const MainLayOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Header />
      <Navbar toggleSideBar={toggleSideBar} isOpen={isOpen} />
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <OverLay isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayOut;
