import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import MainLayOut from "./pages/MainLayOut";
import RequestPickUp from "./pages/RequestPickUp";

import TrackOrder from "./pages/TrackOrder";
import useGaTracker from './useGaTracker'
// import TagManager from 'react-gtm-module';
// import { useEffect } from "react";

const App = () => {
  useGaTracker();
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: process.env.REACT_APP_GA});
  //   }, []);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayOut />} exact component={ MainLayOut }>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="request-pickup" element={<RequestPickUp />} />
          <Route path="track-order" element={<TrackOrder />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
