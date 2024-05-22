import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { useContext, useState } from "react";

import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
 
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      console.log(result.user)
      toast('User has created successfully')
      updateUserProfile(data.name, data.photo)
      .then(()=>{
        navigate("/")
      })
      .catch(error=>{
        console.log(error.message)
      })
      reset()
    })
  };

  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-10/12 border shadow-2xl my-10">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
          <p className="text-center">
            Go back to{" "}
            <Link to="/" className="text-blue-600 underline">
              Home
            </Link>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center font-bold p-2">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
               
              />
              {errors.name && <p className="text-red-500">Please enter your name.</p>}
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                
              />
              {errors.name && <p className="text-red-500">Email is required.</p>}
            </div>
            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photo")}
                type="text"
                placeholder="url"
                className="input input-bordered"
                
              />
              
            </div>
            {/* password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true,
                   minLength: 6 ,
                   pattern:/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                  })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be at least 6 characters </p>
              )}
              {errors.password?.type === "pattern" && (<p className="text-red-500">Password must have one Uppercase, one Lowercase, one number and one special character.</p>)}
             
              <span
                className="text-2xl absolute top-12 right-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline />
                )}
              </span>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn bg-yellow-600"
              />
            </div>
          </form>
          <div className="text-center">
            <p>
              Already registered?{" "}
              <Link to="/login" className="text-yellow-600 underline">
                Go to log in
              </Link>
            </p>
            <p>or register with</p>
            <p>----</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
