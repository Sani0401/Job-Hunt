import React from "react";
import "../Styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="mainAboutUsCOntainer">
      <div className="partOne">
        <h5 className="aboutusTitle">About Us</h5>
        <h5 className="aboutUsQuestion">Why Job Hunt?</h5>
        <p>
          At Job Hunt, we're committed to revolutionizing the job search
          experience for both candidates and companies alike. Our platform
          offers unparalleled access to a diverse range of job opportunities
          from leading companies across industries.
        </p>
        <p>
          With user-friendly navigation and powerful search tools, we empower
          job seekers to find their ideal roles with ease. What sets us apart is
          our dedication to fostering meaningful connections between talent and
          employers, ensuring that every match is a step towards mutual success.
          Join us on this journey as we redefine the future of recruitment and
          unlock endless possibilities for your career growth.
        </p>
       
      </div>
      <div className="partTwo">
        <img src="https://www.citigroup.com/rcs/v1/siteIds/citigpa/asset/634dc42106d3960462e2f51a.jpg" className="AboutUsImage"/>
      </div>
    </div>
  );
}

export default AboutUs;
