import React, { useState } from "react";
import PropTypes from "prop-types";
import useJobs from "../../hooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";
import { h1 } from "motion/react-client";
import { BiSearch } from "react-icons/bi";

const AllJob = (props) => {
  const [sort, setSort] = useState(false);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [search, setSearch] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  if (loading) {
    return <h1>Job loading</h1>;
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted by salary" : "Sort By Salary"}
        </button>
        <BiSearch></BiSearch>
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input w-full max-w-2xl"
          placeholder="Search Job By Location"
        />

        <div className="space-y-3">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            placeholder="Min Salary"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            placeholder="Max Salary"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

AllJob.propTypes = {};

export default AllJob;
