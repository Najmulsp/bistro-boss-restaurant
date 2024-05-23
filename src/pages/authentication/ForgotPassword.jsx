import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const {forgotPassword} = useAuth()
    const [email, setEmail] = useState('')


    const handleForgotPassword = () =>{
        forgotPassword(email)
        .then(() =>{
            toast('We have sent you an email, Please check')
        })
        .catch(error=>console.log(error.message))
    }

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <label className="label">
                <a onClick={() => document.getElementById("my_modal_1").showModal()} className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
         
          <input 
          type="email"
           onChange={(e)=>setEmail(e.target.value)}
            placeholder="Give your email"
            className="p-2 border rounded-l-xl"
            />
          <button onClick={handleForgotPassword} className="border p-2 rounded-r-xl bg-yellow-600">Submit</button>
         
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ForgotPassword;
