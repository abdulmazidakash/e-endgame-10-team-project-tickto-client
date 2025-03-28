import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import JoinUs from "../pages/join-us/JoinUs";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/terms-and-condition" element={<TermsAndConditions/>} />
      </Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  );
};

export default PublicRoutes;
