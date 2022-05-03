const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
const auth= require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/author", authorController.createAuthor  )
router.post("/loginauthor", authorController.loginauthor)

router.post("/blog",auth.authentication,blogController.createBlog)
router.get("/blog",auth.authentication, blogController.GetData)

router.put("/updateblog/:blogId",auth.authentication,blogController.updateblog)
router.delete("/deleteBlogById/:blogId",auth.authentication,blogController.deleteBlogById)
router.delete("/deleteBlogs",auth.authentication, blogController.deleteBlogs)



module.exports = router;