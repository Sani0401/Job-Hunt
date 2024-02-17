const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    CompanyName:{type:String, required:true},
    role:{type:String, required:true},
    description:{type:String, required:true},
    requirements: {type:String, required:true},
    compensations:{type:String, required:true},
    applyLink:{type:String, required:true},
    logoUrl:{type:String, required:true}
})

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;