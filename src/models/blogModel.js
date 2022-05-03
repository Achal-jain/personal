const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema({ 

    title: {
        type: String,
        required: true,
        trim:true
    },
    body: {
        type: String,
        required: true,
        trim:true
    },
    authorId: {
        type: ObjectId,         
        ref: 'Author' 
    },
    tags:[{type: String,
        trim:true
    }],
    category: {
        type: String,
        required: true,
        trim:true
    },
    subcategory:[{ 
        type:String,
        trim:true
    }],

    deletedAt: {
        type:String,
        default:null
      },
    
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type:String,
        default:null
      },
   isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)
