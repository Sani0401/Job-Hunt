import React, { useEffect, useState } from "react";
import "../Styles/loginComponent.css";
import Button from "react-bootstrap/Button";
import Instance from "../config/Instance.js";
import URL from "../config/apiURL.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logged, Failed } from "../Constants/helperFunctions.js/toastFunctions.js";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async () => {
    const adminData = {
      email: email,
      password: password,
    };

    try {
      const response = await Instance.post(URL.login, adminData);
      console.log(response);
      if (response.status === 200 && response.data.token) {
        const userToken = response.data.token;
        sessionStorage.setItem("token", userToken);
        console.log("This is the userToken: ", sessionStorage.getItem("token"));
        navigate("/home");
        logged();
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Failed();
    }
  };

  return (
    <div className="MainLoginComponentContainer">
      <div className="mainContainer">
        <div className="signInText">
          <h4>Sign In</h4>
          <a href="/signup"> Create an account</a>
        </div>

        <hr className="horizontalLine" />

        <div className="InputFields">
          <label className="EmailLabel">Enter Email</label>
          <input
            className="EmailInput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="PasswordLabel">Enter Password</label>
          <input
            className="PasswordInput"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <label className="forgotPasswordLabel">Forgot Password?</label>
        <Button className="LoginButton" onClick={handleSubmit}>
          Login
        </Button>

        <hr className="horizontalLine" />
        <div className="footer">
          <p>
            New to Cuvette?{" "}
            <a href="/signUp" className="AnchorTag">
              Create accounts
            </a>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default LoginComponent;
