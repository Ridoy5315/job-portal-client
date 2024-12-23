import React from "react";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({job}) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    company_logo,
  } = job;
  console.log(requirements);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 items-center">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4>{company}</h4>
          <p className="flex gap-1 items-center">
            {" "}
            <FaLocationDot></FaLocationDot> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p>Hot Jobs</p>
        <div className="flex flex-wrap">
          {requirements?.map((skill) => <p key={skill}>{skill}</p>)}
        </div>
        <div className="card-actions justify-end items-center">
          <p className="flex items-center text-xs">Salary: <FaDollarSign /> {salaryRange.min}- {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
        </div>
      </div>
    </div>
  );
};

HotJobsCard.propTypes = {
  // requirements: PropTypes.array.isRequired,
  // title: PropTypes.string.isRequired
};

export default HotJobsCard;
