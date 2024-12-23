import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

const ViewApplications = (props) => {
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
  };
  return (
    <div className="w-9/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under review</option>
                    <option>Accept</option>
                    <option>reject</option>
                  </select>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Ongoing</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ViewApplications.propTypes = {};

export default ViewApplications;
