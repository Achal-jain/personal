const express = require('express');
const router = express.Router();
const CollegeModel = require("../controllers/college")
const InternModel= require("../controllers/intern") 

router.post("/functionup/colleges", CollegeModel.createCollege)

router.get("/functionup/collegeDetails", CollegeModel.getColleges)

router.post("/functionup/interns",InternModel.createIntern)










module.exports = router