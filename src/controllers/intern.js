const mongoose = require('mongoose')
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const validateEmail = require('email-validator');


const createIntern = async (req, res) => {
  try {
    let { ...intern } = req.body;

    if (Object.keys(intern).length == 0)
      return res.status(400).send({ status: false, msg: "Data is required to create an Intern" });

    if (!intern.name) return res.status(400).send({ status: false, msg: "Intern name is required" });
    if (!intern.email) return res.status(400).send({ status: false, msg: "Intern Email is required" });
    if (!intern.collegeName) return res.status(400).send({ status: false, msg: "College Name is required" });
    if (!intern.mobile) return res.status(400).send({ status: false, msg: "Intern Mobile Number is required" });

    let cId = await collegeModel.findOne({name : intern.collegeName}).select({_id : 1})
    cId = cId._id.toString()
    intern.collegeId = cId


    let validString = /\d/;
    if (validString.test(intern.name))
      return res.status(400).send({ status: false, msg: "Name must not contains numbers" });

<<<<<<< HEAD
    if(!validateEmail.validate(req.body.email))
     return res.status(400).send({ status: false, msg: "Enter a valid email" })
=======

  
    if (!validateEmail.validate(req.body.email))
      return res.status(400).send({ status: false, msg: "Enter a valid email" })

>>>>>>> 20d04380c3b8b9db79efb4b43e54b5c3100bdfd0

    let showInternData = await internModel.create(intern);
    res.status(201).send({ status: true, data: showInternData });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};


module.exports.createIntern = createIntern