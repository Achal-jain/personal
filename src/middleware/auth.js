const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const Blog = require('../models/blogModel');

// const isValidObjectId = (ObjectId) => {
//   return mongoose.Types.ObjectId.isValid(ObjectId);
// };

const authentication = (req, res, next) => {
  try{
    let token = req.headers["x-Api-key"]; 
    token = req.headers["x-api-key"];
    
    if (!token) {
      return res.status(403).send({ status: false, msg: "Token must be present" });
    }

    let decodedToken = jwt.verify(token, "Blog-creator"); //verifying token with secret key
    if (!decodedToken)
     return res.status(403).send({ status: false, msg: "Invalid authentication token in request" });
    
     req.authorId=decodedToken.authorId;
    next()
}

  catch (err){
    res.status(500).send({status: false, msg: err.message});
}
}
  module.exports.authentication = authentication; 