import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/images/Logoblack.png";
import "./login.scss";
// import BASEURI from "../../services/helper";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const [cnpassShow, setCnPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    companyName: "",
    hrName: "",
    dob: "",
    cnic: "",
    email: "",
    password: "",
    confrimPassword: "",
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

    // const role_id = "2";
    const { companyName, hrName, dob, cnic, email, password, confrimPassword } =
      inpval;

    if (companyName === "") {
      toast.error("Company Name is required!", {
        position: "top-right",
      });
    } 
    else if (hrName === "") {
      toast.error("HR Name is required!", {
        position: "top-right",
      });
    }
    else if (dob === "") {
      toast.error("Date of Birth is required!", {
        position: "top-right",
      });
    }
    else if (cnic === "") {
      toast.error("CNIC is required!", {
        position: "top-right",
      });
    }
    else if (email === "") {
      toast.error("Email is required!", {
        position: "top-right",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-right",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-right",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-right",
      });
    } 
    else if (confrimPassword === "") {
      toast.error("confrim Password is required!", {
        position: "top-right",
      });
    } else if (confrimPassword.length < 6) {
      toast.error("confrim Password must be 6 char!", {
        position: "top-right",
      });
    } else if (confrimPassword !== password) {
      toast.error("Password and Confirm Password doesn't match", {
        position: 'top-right'
      })
    }
    else {
      history('/dashboard');
      // const data = await fetch(`${BASEURI}/register`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     role_id,
      //     hrName,
      //     email,
      //     password,
      //     cnic,
      //     companyName,
      //     dob
      //   }),
      // });

      // const res = await data.json();
      // console.log("🚀 ~ file: SignUp.jsx:117 ~ loginuser ~ res:", res)
      
      // if (res.data.userIsAdmin === true) {
      //   localStorage.setItem("usersdatatoken", res.data.token);
      //   history("/dashboard");
      //   setInpval({ ...inpval, userEmail: "", userPassword: "" });
      // } else {
      //   toast.error("You don't have Admin Rights", {
      //     position: "top-right",
      //   });
      // }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <img src={Logo} alt="Logo" className="logincontainer" />
          <div className="form_heading my-3">
            <h1
              style={{
                color: "#F14D39",
                fontWeight: "bolder",
              }}
            >
              Corporate Sign Up
            </h1>
            <p>Let's Begin your amazing journey of finding new talents.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="Text">Company Name</label>
              <input
                type="text"
                value={inpval.companyName}
                onChange={setVal}
                name="companyName"
                id="companyName"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="text">HR Name</label>
              <input
                type="text"
                value={inpval.hrName}
                onChange={setVal}
                name="hrName"
                id="hrName"
                placeholder="Enter Your Name "
              />
            </div>
            <div className="form_input">
              <label htmlFor="text">Date of Birth</label>
              <input
                type="date"
                value={inpval.dob}
                onChange={setVal}
                name="dob"
                id="dob"
                placeholder="Enter Your Name "
              />
            </div>
            <div className="form_input">
              <label htmlFor="text">CNIC</label>
              <input
                type="text"
                value={inpval.cnic}
                onChange={setVal}
                name="cnic"
                id="cnic"
                placeholder="Enter Your CNIC"
              />
            </div>
            <div className="form_input">
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                name="email"
                id="email"
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
                  name="password"
                  id="password"
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
            <div className="form_input">
              <label htmlFor="userPassword">Confrim Password</label>
              <div className="two">
                <input
                  type={!cnpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.confrimPassword}
                  name="confrimPassword"
                  id="confrimPassword"
                  placeholder="Confrim Password"
                />
                <div
                  className="showpass"
                  onClick={() => setCnPassShow(!cnpassShow)}
                >
                  {!cnpassShow ? (
                    <AiFillEyeInvisible size={24} />
                  ) : (
                    <AiFillEye size={24} />
                  )}
                </div>
              </div>
            </div>
            <button className="btn" onClick={loginuser}>
              Sign Up
            </button>
          </form>
          <button
            className="btn-signup"
            onClick={() => {
              history("/");
            }}
          >
            Login
          </button>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignUp;
