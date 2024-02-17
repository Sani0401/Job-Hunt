const jobs = require('../models/JobsModel')
async function addJob(data){
    const {applyLink,companyName,compensations,description,logoURL,requirements,role} = data;
console.log("This is adding data",data);

    try{
        const job =  await jobs.create({
            CompanyName:companyName,
            role:role,
            description:description,
            requirements:requirements,
            compensations:compensations,
            applyLink:applyLink,
            logoUrl:logoURL
        })
        console.log(job);
        if( job){
return job._id;
        }
    }
    catch(error){
        console.error("Error Adding Data: ", error)
        return -1;
    }
}

module.exports = addJob;

