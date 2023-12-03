import React, { useState } from "react";
import Logo from "../../assets/images/Logoblack.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./login.scss";
import { getEmailOTPfunc } from "../../services/apiInstance";

function ForgotPassword() {
  //Creating State for email
  const [email, setEmail] = useState("");
  
  const history = useNavigate();

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const handleresetinstruction = async (e) => {
    e.preventDefault();


    if (email === "") {
      toast.error("Email is required!", {
        position: "top-right",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-right",
      });
    } else {
      //Call api for otp
      try {
        const response = await getEmailOTPfunc({
          userEmail: email
        });
        if (response.status === 200) {
          toast.success("Email Sent Successfully!!");
          localStorage.setItem("Email", email);
          localStorage.setItem("hashValueResetPwd", response.data.data);
          setTimeout(() => {
            history('/otp-verification');
          }, 5000);
        }
      } catch (error) {
        toast.error("Invalid Email Address");
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <img src={Logo} alt="Logo" className="logincontainer" />
          <div className="form_heading my-3">
            <h1>Reset Password</h1>
            <p className="mx-4 instructiontext">
              Enter the email associated with your account and we'll send an
              email with instruction to reset the password.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={handleresetinstruction}>
              Send Instructions
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
