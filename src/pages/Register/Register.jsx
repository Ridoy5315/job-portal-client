import React, { useContext } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import registrationLottieData from '../../assets/register.json';
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../Home/shared/SocialLogin";
const Register = (props) => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;

    console.log(email, password)

    //password validation
    //show password validation error
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message);
    })
    form.reset();

  }
  return (
     <div className="hero bg-base-200 min-h-screen">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="text-center lg:text-left">
         <Lottie animationData={registrationLottieData}></Lottie>
       </div>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="text-5xl font-bold">Register now!</h1>
         <form onSubmit={handleRegister} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" placeholder="email" name="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" placeholder="password" name="password" className="input input-bordered" required />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Register</button>
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

Register.propTypes = {};

export default Register;
