import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = (props) => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="w-10/12 mx-auto">
        <HotJobs></HotJobs>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
