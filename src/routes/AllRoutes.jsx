import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
