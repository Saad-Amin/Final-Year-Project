import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/images/Logoblack.png";
import { ToastContainer, toast } from "react-toastify";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { getResetPasswordfunc } from "../../services/apiInstance";

function ResetPassword() {
  const [passShow, setPassShow] = useState(false);
  const [cnpassShow, setCnPassShow] = useState(false);

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    password: "",
    cnpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const handleupdatepassword = async (e) => {
    e.preventDefault();

    const { password, cnpassword }  = inpval;

    if (password === "") {
      toast.error("password is required!", {
        position: "top-right",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-right",
      });
    } else if (cnpassword === "") {
      toast.error("Confirm password is required!", {
        position: "top-right"
      })
    } else if (password !== cnpassword) {
      toast.error("Password doesn't match!", {
        position: "top-right"
      });
    } else {
      try {
        const userEmail = localStorage.getItem('Email');
        const response = await getResetPasswordfunc({
          userEmail: userEmail,
          userPassword: password,
        });
        if (response.status === 200) {
          toast.success("Password Updated Successfully!!");
          setTimeout(() => {
            history('/');
          }, 5000);
        }
      } catch (error) {
        toast.error(error.message); 
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <img src={Logo} alt="Logo" className="logincontainer"/>
          <div className="form_heading my-3">
            <h1>Reset Password</h1>
            <p className="mx-4 instructiontext">Enter the email associated with your account and we'll send an email
            with instruction to reset the password.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="cnpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={!cnpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.cnpassword}
                  name="cnpassword"
                  id="cnpassword"
                  placeholder="Enter Your Confirm Password"
                />
                <div
                  className="showpass"
                  onClick={() => setCnPassShow(!cnpassShow)}
                >
                  {!cnpassShow ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleupdatepassword}>
              Update Password
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
