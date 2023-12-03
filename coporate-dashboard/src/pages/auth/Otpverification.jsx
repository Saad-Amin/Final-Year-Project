import React, { useState } from 'react'
import Logo from "../../assets/images/Logoblack.png";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getOTPVerificationfunc } from '../../services/apiInstance';

function Otpverification() {
    //Creating State for email
    const [emailOTP, setEmailOTP] = useState("");
    
    const history = useNavigate();
  
    const setVal = (e) => {
      setEmailOTP(e.target.value);
    };
  
    const handleresetinstruction = async (e) => {
      e.preventDefault();
  
  
      if (emailOTP === "") {
        toast.error("OTP is required!", {
          position: "top-right",
        });
      } else if (emailOTP.length > 4) {
        toast.warning("OTP Should be of 4 Characters", {
          position: "top-right",
        });
      } else {
        try {
          const response = await getOTPVerificationfunc({
            userEmail: localStorage.getItem('Email'),
            hash: localStorage.getItem('hashValueResetPwd'),
            otp: emailOTP
          });
          if(response.status === 200){
            toast.success("OTP Verified Successfully!!");
            setTimeout(() => {
              history('/reset-password');
            }, 5000);
          }
        } catch (error) {
            toast.error(error, {
                position: "top-right",
            })
        }      

      }
    };
  
    return (
      <>
        <section>
          <div className="form_data">
            <img src={Logo} alt="Logo" className="logincontainer" />
            <div className="form_heading my-3">
              <h1>OTP Verification</h1>
              <p className="mx-4 instructiontext">
                Enter the 4 Digit-OTP that you have received on your email.
              </p>
            </div>
            <form>
              <div className="form_input">
                <input
                  type="number"
                  value={emailOTP}
                  onChange={setVal}
                  name="OTP"
                  id="OTP"
                  placeholder="Enter Your OTP Here"
                />
              </div>
              <button className="btn" onClick={handleresetinstruction}>
                Verify OTP
              </button>
            </form>
            <ToastContainer />
          </div>
        </section>
      </>
    );
}

export default Otpverification