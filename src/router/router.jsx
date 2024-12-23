import React from "react";
import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLoyout from "../layout/MainLoyout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/JobDetails.jsx/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyAppliactions from "../pages/MyApplications/MyAppliactions";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLoyout></MainLoyout>,
    errorElement: <h2>This page not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-server-zeta.vercel.app/jobs/${params.id}`),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyAppliactions></MyAppliactions>
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://job-server-zeta.vercel.app/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

router.propTypes = {};

export default router;
