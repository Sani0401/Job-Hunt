import React, { useState } from "react";
import "../Styles/AddJob.css";
import Button from "react-bootstrap/Button";
import Instance from '../config/Instance'
import URL from '../config/apiURL'
function AddJob() {
  const [companyName, setCompanyName] = useState(null);
  const [logoURL, setLogoURL] = useState(null);
  const [role, setRole] = useState(null);
  const [descriptiom, setDescription] = useState(null);
  const [requirements, setRequirements] = useState(null);
  const [compensations, setCompensations] = useState(null);
  const [applyLink, setApplyLink] = useState(null);

  const handleJobData = async () => {
    const jobData = {
      companyName: companyName,
      logoURL: logoURL,
      role: role,
      description: descriptiom,
      requirements: requirements,
      compensations: compensations,
      applyLink: applyLink,
    };
    console.log(jobData);
    try{
      const addData = await Instance.post(URL.addData, jobData);
      console.log(addData);
    }
    catch(error){
console.error("error adding data", error)
    }
    
  };

  return (
    <div className="mainAddJobContainer">
      <div className="addjobs__Container">
        <h5>Add Job Details</h5>
        <div className="division" />

        <input
          placeholder="Add Company Name"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
        <input
          placeholder="Add Logo URL"
          onChange={(e) => {
            setLogoURL(e.target.value);
          }}
        />
        <input
          placeholder="Add Role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          placeholder="Add Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          placeholder="Add Requirements"
          onChange={(e) => {
            setRequirements(e.target.value);
          }}
        />
        <input
          placeholder="Add Compensations"
          onChange={(e) => {
            setCompensations(e.target.value);
          }}
        />
        <input
          placeholder="Add Apply Link"
          onChange={(e) => {
            setApplyLink(e.target.value);
          }}
        />

        <Button
          variant="outline-primary"
          className="formSubmit"
          onClick={handleJobData}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddJob;
