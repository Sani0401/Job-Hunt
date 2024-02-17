import React from "react";
import HeaderBar from "../Components/HeaderBar";
import "../Styles/SignUp.css";
import companieslogo from "../Images/companies-logo.png";
import jobIcon from "../Images/Job-icon.png";
import wallet from "../Images/wallet.png";
import company from "../Images/badge.png";
import verified from "../Images/verified.png";
import whatsapp from "../Images/whatsapp.png";
import Linkedin from "../Images/Linkedin.png";
import instagram from "../Images/instagram.png";
import Button from 'react-bootstrap/Button';
import SignUpComponent from "../Components/SignUpComponent";
import Images from "../Constants/Images";

function Login() {
  return (
    <>
      <HeaderBar />
      <div className="signUp_MainContainer">
        <div className="signUp_imagesIntro">
          <div className="signUp_title-header">
            <h4 className="signUp_title">Find your dream job!</h4>
            <label className="signUp_label">Trusted by 300000+ students</label>
          </div>

          <div className="signUp_Images">
            <img src={companieslogo} className="signUp_image" alt="companies logo" />
          </div>
          <h4 className="signUp_question">Why choose us?</h4>
          <div className="signUp_dataContainer">
            <div className="signUp_firstRow">
              <div className="signUp_jobsCount">
                <img src={jobIcon} className="signUp_jobIcon" alt="job icon" />
                <div>
                  <h4 className="signUp_count">7000+</h4>
                  <label className="signUp_jobs">Jobs</label>
                </div>
              </div>
             
              <div className="signUp_jobsCount">
                <img src={wallet} className="signUp_jobIcon" alt="wallet icon" />
                <div>
                  <h4 className="signUp_count">18K+</h4>
                  <label className="signUp_jobs">Avg. Stipend</label>
                </div>
              </div>
            </div>
          
            <div className="signUp_secondRow">
              <div className="signUp_jobsCount">
                <img src={company} className="signUp_jobIcon" alt="company icon" />
                <div>
                  <h4 className="signUp_count">6000+</h4>
                  <label className="signUp_jobs">Companies</label>
                </div>
              </div>
             
              <div className="signUp_jobsCount">
                <img src={verified} className="signUp_jobIcon" alt="verified icon" />
                <div>
                  <h4 className="signUp_count">100%</h4>
                  <label className="signUp_jobs">Verified Jobs</label>
                </div>
              </div>
            </div>
          </div>

          <div className="signUp_Socials"> 
            <img src={instagram} alt="instagram icon"/>  
            <img src={Linkedin} alt="Linkedin icon"/> 
            <img src={whatsapp} alt="whatsapp icon"/> 
          </div>

          <div className="signUp_closing"> 
            <p className="signUp_copyright">© Cuvette 2024    | </p> 
            <p className="signUp_terms">Terms & Conditions</p>
          </div>
        </div>

        <div className="signUp_loginInput">
          
          <SignUpComponent/>
        </div>
      </div>
    </>
  );
}

export default Login;
