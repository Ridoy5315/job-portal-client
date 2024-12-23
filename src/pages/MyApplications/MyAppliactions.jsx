import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const MyAppliactions = (props) => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosInstance();
  useEffect(() => {
    // fetch(`https://job-server-zeta.vercel.app/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });
    // axios.get(`https://job-server-zeta.vercel.app/job-application?email=${user.email}`, {withCredentials: true})
    // .then(res => {
    //   console.log(res.data)
    //   setJobs(res.data)
    // })
    axiosSecure.get(`/job-application?email=${user.email}`)
    .then(res => {
      console.log(res.data)
      setJobs(res.data)
    })
  }, [user.email]);
  return (
    <div>
      <p>{jobs.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyAppliactions.propTypes = {};

export default MyAppliactions;
