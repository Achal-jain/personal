const mongoose = require("mongoose")
const { find } = require("../models/collegeModel")
const CollegeModel = require("../models/collegeModel")
const InternModel = require("../models/internModel")

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
        if(Object.keys(req.query).length == 0) return res.status(400).send({status : false, msg : "Add college name to find"})
        let cname = req.query.collegeName
        let cId = await CollegeModel.findOne({name : cname}).select({_id : 1})
        if(!cId) return res.status(404).send({status : false, msg : "Sorry, no college with particular name exists"})
        cId = cId._id.toString()
        let part1 = await CollegeModel.findOne({name : cname}).select({_id : 0, name : 1, fullName : 1, logoLink : 1})
        let part2 = await InternModel.find({collegeId : cId}).select({name : 1, email : 1, mobile : 1})
        let temp = part1.toJSON()
        temp["interests"] = [...part2]

        return res.status(200).send({status : true, data : temp})

    }
    catch(err){
        return res.status(500).send({status : false, msg : err.message})
    }
}

module.exports.getColleges = getColleges
module.exports.createCollege = createCollege