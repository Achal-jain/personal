const express = require('express');
const router = express.Router();
const CollegeModel = require("../controllers/college")

router.post("/functionup/colleges", CollegeModel.createCollege)

router.get("/functionup/collegeDetails", CollegeModel.getColleges)









module.exports = router