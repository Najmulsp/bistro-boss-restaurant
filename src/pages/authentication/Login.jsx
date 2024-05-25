import { useContext, useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {
  const { login, googleLogin} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  // get state from privet route where user wanted to go and after log in send there
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  // if privet route is given as it here also will be as it
  // const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  const captchaRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // log in
    login(email, password)
    .then((result) => {
      console.log(result.user);
      // if (result.user.verifyEmail) {
      //   alert("Login successful!");
      //   // Redirect to your dashboard or home page
      // } else {
      //   alert("Please verify your email before logging in.");
      //       logout()
      //    navigate("/login")
      // }
      toast("You have successfully logged in");
      navigate(from, { replace: true });
    });
  };

  //
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      console.log(result.user);
      const userInfo= {
        name: result.user?.displayName,
        email: result.user?.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data)
        toast("You have successfully logged in");
      navigate(from, { replace: true });
      })
      
    });
  };

  const handleValidate = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
      toast("Wow! captcha has matched, go ahead");
    } else {
      setDisabled(true);
      toast.error("captcha does not matched, try again");
    }
  };
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row w-10/12 border shadow-2xl">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
          <p className="text-center dark:text-black">
            Go back to{" "}
            <Link to="/" className="text-yellow-600 underline">
              Home
            </Link>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center text-yellow-600 font-bold p-2">Log in</h1>
          <button
            onClick={() =>
              handleGoogleLogin()
            }
            aria-label="Login with Google"
            type="button"
            className="flex  mt-4 items-center justify-center w-9/12 mx-auto py-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-yellow-600 bg-opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
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
              {/* forgot password */}
              <ForgotPassword></ForgotPassword>
            </div>
            <div className="form-control relative">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                name="captcha"
                type="text"
                ref={captchaRef}
                placeholder="type the captcha above"
                className=" input input-bordered"
                required
              />
              <button
                onClick={handleValidate}
                className="absolute top-20 right-5 btn btn-xs btn-info"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className="btn bg-yellow-600"
              />
            </div>
          </form>

          <div className="text-center">
            <p className="dark:text-black">
              New here?{" "}
              <Link
                to="/register"
                className="text-yellow-600 font-bold underline"
              >
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
