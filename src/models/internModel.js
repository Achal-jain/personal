const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({ 
     
      name: {
         type:String,
         requried:true,
         trim:true
    }, 
     email: {
        type:String,
        trim:true,
        lowercase:true,
        unique:true, 
        required:'Email Address is Required'
    },
      mobile: {
          type:Number,
          required:true,
           unique:true
    },
      collegeId: {
           type:ObjectId, 
           ref:'College'
    }, 
      isDeleted:{
         type:Boolean, 
         default: false
        }
    
}, { timestamps: true })

module.exports = mongoose.model('Intern', internSchema)