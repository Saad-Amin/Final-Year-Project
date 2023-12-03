import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/images/Logoblack.png";
import Dashboard from "../Dashboard";
import ForgotPassword from "./ForgotPassword";
import "./login.scss";
import BASEURI from "../../services/helper";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    userEmail: "",
    userPassword: "",
  });

  const history = useNavigate();

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

  const loginuser = async (e) => {
    e.preventDefault();

    const { userEmail, userPassword } = inpval;

    if (userEmail === "") {
      toast.error("Email is required!", {
        position: "top-right",
      });
    } else if (!userEmail.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-right",
      });
    } else if (userPassword === "") {
      toast.error("password is required!", {
        position: "top-right",
      });
    } else if (userPassword.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-right",
      });
    } else {
      const data = await fetch(`${BASEURI}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          userPassword,
        }),
      });

      const res = await data.json();
      if (res.data.userIsAdmin === true) {
        localStorage.setItem("usersdatatoken", res.data.token);
        history("/dashboard");
        setInpval({ ...inpval, userEmail: "", userPassword: "" });
      } else {
        toast.error("You don't have Admin Rights", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <img src={Logo} alt="Logo" className="logincontainer" />
          <div className="form_heading my-3">
            <h1 style={{
                color: "#F14D39",
                fontWeight: "bolder",
              }}>Cooperate Login</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                name="userEmail"
                id="userEmail"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="userPassword">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="userPassword"
                  id="userPassword"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? (
                    <AiFillEyeInvisible size={24} />
                  ) : (
                    <AiFillEye size={24} />
                  )}
                </div>
              </div>
            </div>
            <div className="forgotpassword-text">
              <Link to="/forgot-password" component={<ForgotPassword />}>
                Forgot Password?
              </Link>
            </div>
            <button className="btn" onClick={loginuser}>
              <Link to="/dashboard" component={<Dashboard />} />
              Login
            </button>
          </form>
          <button className="btn-signup" onClick={() => {
              history('/signup')
          }}>
              Sign Up
            </button>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Login;