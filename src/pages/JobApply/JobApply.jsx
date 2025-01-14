import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = (props) => {
  const { id } = useParams();

  const { user } = useAuth();
  // console.log(user);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("https://job-portal-27e9b.web.app/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      form.reset()
  };
  return (
    <div className="w-9/12 mx-auto mt-8">
      <div className="card bg-base-100 w-full shadow-2xl">
        <h1 className="text-5xl text-center m-4 font-bold">Fill up the form</h1>
        <form onSubmit={handleApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="url"
              placeholder="LinkedIn URL"
              name="linkedin"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>

            <input
              type="url"
              placeholder="Github URL"
              name="github"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>

            <input
              type="url"
              placeholder="Resume URL"
              name="resume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

JobApply.propTypes = {};

export default JobApply;
