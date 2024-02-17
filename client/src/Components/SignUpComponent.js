import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/signUpComponent.css";
import Instance from "../config/Instance";
import URL from "../config/apiURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUpComponent() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMobileNumber, setUserMobileNUmber] = useState("");
  const [userType, setUserType] = useState("");
  const [checkbox, setCheckBox] = useState(true);
  const [userData, setUserData] = useState(null);

  const handleClick = async () => {
    
    const newUser = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      userMobileNumber: userMobileNumber,
      userType: userType,
    };
    await setUserData(newUser);
    addData();
  };
  const Failed = () =>
  toast.error("Email already used!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
  });
  const logged = () =>
  toast.success("Account Created Sucessfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const addData = async () => {
    console.log(userData);

    try {
      const response = await Instance.post(URL.signup, userData);
      if( response.status === 200){
        logged();
      }
    } catch (error) {
      if (error.response.status === 409) {
        Failed();
      }
    }
  };
  

  return (
    <>
      <div className="mainSignupComponentContainer">
        <div className="inputMainContainer">
          <div className="signInTextSignIn">
            <h3 className="CreateHeader">CREATE ACCOUNT</h3>
          </div>
          <hr className="horizontalLineSignup" />
          <div className="firstInputCol">
            <div className="firstInput">
              <label>Enter Name</label>
              <input
                placeholder="Enter Name"
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div className="firstInput">
              <label>Enter Email</label>
              <input
                placeholder="Enter Email"
                type="email"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="firstInputCol">
            <div className="firstInput">
              <label>Enter Password</label>
              <input
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>
            <div className="firstInput">
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" type="password" />
            </div>
          </div>

          <div className="mobileNumberInput">
            <div className="test">
              <label>Enter Mobile Number</label>
              <input
                placeholder="Your Mobile Number"
                onChange={(e) => {
                  setUserMobileNUmber(e.target.value);
                }}
              />
            </div>
            <div className="test">
              <label>Enter Account Type</label>
              <select
                className="selectingOptions"
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
              >
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) => {
                setCheckBox(true);
              }}
            />
            <label>
              I accept terms & conditions.{" "}
              <a href="https://cuvette.tech/app/student/terms">
                Terms & Conditions
              </a>
            </label>
          </div>

          <Button className="CreateAccountButton" onClick={handleClick}>
            Create Account{" "}
          </Button>
          <p className="closing">
            Already Have an Account? <a href="/">Login</a>
          </p>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default SignUpComponent;
