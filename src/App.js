import React from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayOut from "./pages/SharedLayOut";

const Service = () => {
  return <div>Service</div>;
};

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route index element={<h1>asd</h1>} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
