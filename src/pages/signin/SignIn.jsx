import React, { useContext } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext";
import signInLottieData from '../../assets/signIn.json';
import SocialLogin from "../Home/shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = (props) => {
     const {signInUser} = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     console.log('sign in page:', location);

     const from = location.state || '/';
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);

    //password validation
    //show password validation error
    signInUser(email, password)
      .then((result) => {
        console.log(result.user.email);
        // const user = {email: result.user.email}
        
        // axios.post('https://job-portal-27e9b.web.app/jwt', user, { withCredentials: true})
        // .then(res => {
        //   console.log(res.data);
        // })
        // navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <form onSubmit={handleSignin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <div className="m-4">
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
