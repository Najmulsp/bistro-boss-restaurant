import { useContext, useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {login} = useContext(AuthContext);
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
    .then(result =>{
      console.log(result.user)
      toast('You have successfully logged in')
    })
  };
  const handleValidate = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
      toast('Wow! captcha has matched, go ahead')
    } else {
      setDisabled(true);
      toast.error('captcha does not matched, try again')
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
          <p className="text-center">
              Go back to{" "}
              <Link to="/" className="text-yellow-600 underline">
                Home
              </Link>
            </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <h1 className="text-4xl text-center font-bold p-2">Log in</h1>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
            <p>
              New here?{" "}
              <Link to="/register" className="text-yellow-600 font-bold underline">
                Create a New Account
              </Link>
            </p>
            <p>or</p>
            <p>
              -----------
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
