const mongoose = require("mongoose")
const CollegeModel = require("../models/collegeModel")

const createCollege = async function(req, res){
    try{
        let data = req.body
        let created = await CollegeModel.create(data)
        return res.status(201).send({status : true, data : created})
    }catch(err){
        return res.status(500).send({status : false, msg : err.message})
    }    
}

const getColleges = async function(req, res){
    try{

    }
    catch(err){
        return res.status(500).send({status : false, msg : err.message})
    }
}


module.exports.createCollege = createCollege