import bgImg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import { useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";


const Register = () => {
    const captchaRef =useRef(null)
    const [disabled, setDisabled] = useState(true)
        useEffect(()=>{
            loadCaptchaEnginge(6); 
        })

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

    }
    const handleValidate = e =>{
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value) === true){
            setDisabled(false)
            alert("captcha matched")
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen " style={{backgroundImage:`url(${bgImg})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse w-10/12 border shadow-2xl">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm ">
        <h1 className='text-4xl text-center font-bold p-2'>Register</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control relative">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input name='captcha' type="text" ref={captchaRef} placeholder="type the captcha above" className=" input input-bordered" required />
          <button onClick={handleValidate} className='absolute top-20 right-5 btn btn-xs btn-info'>Validate</button>
        </div>
        <div className="form-control mt-6">
            <input disabled={disabled}  type="submit" value="Register" className="btn btn-primary"/>
          
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;