import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import MainLayOut from "./pages/MainLayOut";
import RequestPickUp from "./pages/RequestPickUp";
import Services from "./pages/Services";

import TrackOrder from "./pages/TrackOrder";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="request-pickup" element={<RequestPickUp />} />
          <Route path="track-order" element={<TrackOrder />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
