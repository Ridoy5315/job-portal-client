import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://job-server-zeta.vercel.app/job?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div className="w-9/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>
                    <Link to={`/viewApplications/${job._id}`}>View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyPostedJobs.propTypes = {};

export default MyPostedJobs;
