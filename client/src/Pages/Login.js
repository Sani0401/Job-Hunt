import React, { useState } from "react";

import HeaderBar from "../Components/HeaderBar";
import "../Styles/Login.css";
import Button from 'react-bootstrap/Button';
import LoginComponent from "../Components/LoginComponent";
import Images from "../Constants/Images";

function Login() {
  
  return (
    <>
      <HeaderBar />
      <div className="MainContainer">
        <div className="imagesIntro">
          <div className="title-header">
            <h4 className="title">Find your dream job!</h4>
            <label className="label">Trusted by 300000+ students</label>
          </div>

          <div className="Images">
            <img src={Images.companieslogo} className="image" />
          </div>
          <h4 className="question">Why choose us?</h4>
          <div className="dataContainer">
            <div className="firstRow">
              <div className="jobsCount">
                <img src={Images.jobIcon} className="jobIcon" />
                <div>
                  <h4 className="count">7000+</h4>
                  <label className="jobs">Jobs</label>
                </div>
              </div>
             
              <div className="jobsCount">
                <img src={Images.wallet} className="jobIcon" />
                <div>
                  <h4 className="count">18K+</h4>
                  <label className="jobs">Avg. Stipend</label>
                </div>
              </div>
            </div>
          
            <div className="secondRow">
              <div className="jobsCount">
                <img src={Images.company} className="jobIcon" />
                <div>
                  <h4 className="count">6000+</h4>
                  <label className="jobs">Companies</label>
                </div>
              </div>
             
              <div className="jobsCount">
                <img src={Images.verified} className="jobIcon" />
                <div>
                  <h4 className="count">100%</h4>
                  <label className="jobs">Verified Jobs</label>
                </div>
              </div>
            </div>
          </div>

<div className="SocialsLogin"> <img src={Images.instagram}/>  <img src={Images.Linkedin}/> <img src={Images.whatsapp}/> </div>

<div className="closing"> 

<p className="copyright">© Cuvette 2024    | </p> <p className="terms">Terms & Conditions</p>
</div>
        </div>

        <div className="loginInput">
        <div className="buttonStarting"> <Button className="Student" >Student</Button> <Button className="admin">Admin</Button></div>
    <LoginComponent/>
        </div>
      </div>
    </>
  );
}

export default Login;
