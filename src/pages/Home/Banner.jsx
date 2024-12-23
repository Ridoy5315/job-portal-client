import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react"
import { easeOut } from "motion";
import job1 from '../../assets/job1.jpg';
import job2 from '../../assets/job2.jpg';
const Banner = (props) => {
  return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={job1}
            animate={{y: [0, 50, 0]}}
            transition={{duration: 10, repeat: Infinity}}
            className="max-w-sm w-60 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={job2}
            animate={{x: [100, 150, 100]}}
            transition={{duration: 10, delay: 5, repeat: Infinity}}
            className="max-w-sm w-60 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1 
            animate={{x: 50}}
            transition={{duration: 5, delay: 1, ease: easeOut, repeat: Infinity}}
          className="text-5xl font-bold">Latest <motion.span 
            transition={{duration: 2, repeat: Infinity}}
            animate={{color: ['#ff7051', '#beff51', '#51fcff']}}
          >Job</motion.span> News Here!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
