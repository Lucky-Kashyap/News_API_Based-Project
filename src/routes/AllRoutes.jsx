import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Business from "../components/Business";
import Entertainment from "../components/Entertainment";
import Search from "../pages/Search";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="business" element={<Business />}></Route>
        <Route path="entertainment" element={<Entertainment />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
