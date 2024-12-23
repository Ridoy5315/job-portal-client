import React from "react";
import PropTypes from "prop-types";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";
import Footer from "../pages/Home/shared/Footer";

const MainLoyout = (props) => {
  return (
    <div>
      <header className='w-9/12 mx-auto'>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

MainLoyout.propTypes = {};

export default MainLoyout;
