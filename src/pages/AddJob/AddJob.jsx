import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const AddJob = (props) => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min: parseInt(min), max: parseInt(max), currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("https://job-portal-27e9b.web.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-9/12 mx-auto">
      <div className="card bg-base-100 w-full shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/*Company title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          {/*Company location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          {/*Job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job type</span>
            </label>
            <select
              defaultValue="pick the type"
              name="job_type"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick the Job type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          {/*Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              defaultValue="pick the field"
              name="job_field"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick the Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
              <option>Doctor</option>
            </select>
          </div>

          {/* salary range */}
          <div className="grid grid-cols-3 gap-5 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="number"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-ghost w-full max-w-xs"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
                <option>RMB</option>
              </select>
            </div>
          </div>
          {/*Company description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Company description"
              name="description"
              required
            ></textarea>
          </div>
          {/*Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company_name"
              placeholder="company name"
              className="input input-bordered"
              required
            />
          </div>
          {/*Job requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="write each Job requirements in a line"
              name="requirements"
              required
            ></textarea>
          </div>
          {/*Job responsibilities  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="write each Job responsibilities in a line"
              name="responsibilities"
              required
            ></textarea>
          </div>
          {/*HR Name*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>
          {/*HR email*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              readOnly
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR email"
              className="input input-bordered"
              required
            />
          </div>
          {/*Company logo*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company logo"
              className="input input-bordered"
              required
            />
          </div>
          {/*deadline*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              // placeholder="Company logo"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddJob.propTypes = {};

export default AddJob;
