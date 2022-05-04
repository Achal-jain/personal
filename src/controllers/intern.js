const mongoose = require('mongoose')
const internModel= require("../models/internModel")
const collegeModel= require("../models/collegeModel")

const isValidObjectId = (ObjectId) => {
    return mongoose.Types.ObjectId.isValid(ObjectId);
};

let validString = /\d/;

const createIntern = async (req, res) => {
  try {
    let {...intern} = req.body; 

    if (Object.keys(intern).length == 0) 
    return res.status(400).send({ status: false, msg: "Data is required to create an Intern" });

    if(!intern.name) return res.status(400).send({ status: false, msg: "Intern name is required" });
    if(!intern.email) return res.status(400).send({ status: false, msg: "Intern Email is required" });
    if(!intern.collegeId) return res.status(400).send({ status: false, msg: "College ID is required" });
    if(!intern.mobile) return res.status(400).send({ status: false, msg: "Intern Mobile Number is required" });
    
    if(validString.test(intern.name))
     return res.status(400).send({ status: false, msg: "Data must not contains numbers"});

    if(!isValidObjectId(intern.collegeId))
     return res.status(404).send({ status: false, msg: "Enter a valid college Id" });
    
    let getCollegeData = await collegeModel.findById(intern.collegeId);
    if(!getCollegeData)
     return res.status(404).send({ status: false, msg: "No such college exist" });

    let showInternData = await internModel.create(intern);
    res.status(201).send({ status: true, data: showInternData });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};


module.exports.createIntern=createIntern