const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const collegeModel = new mongoose.Schema({
    name : {type : String, required : [true, "Pls give a name"]},
    fullName : {type : String, required : true},
    logoLink : {type : String, required : true},
    isDeleted : {type : Boolean, default : false}
}, {timestamps : true})

module.exports = mongoose.model("College", collegeModel)