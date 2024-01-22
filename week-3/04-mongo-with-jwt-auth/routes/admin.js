const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");

const { Admin, Course , User } = require( "../db");
const router = Router();
const jwt = require("jsonwebtoken");

const jwtPassword = "SitaRam";

// Admin Routes

router.post("/signup", async (req, res) => {
    let { username, password } = req.body;
    await Admin.create({ username: username, password: password });
    console.log({ username: username, password: password })
    res.status(202).send("Admin created successfully.");
  });

  
router.post('/signin',async (req, res) => {

    let {username , password}=req.body;
    let user=await User.findOne({username :username, password:password});
    if(user){
        res.json({ token:  jwt.sign({ username: username, password: password }, jwtPassword)});
    
    }
    else{
        res.status(404).send("Admin User Does Not Exist! Sign Up First")
    }
    // Implement admin signup logic
});
  
  
  router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    let course = await Course.create({
      title: title,
      description: description,
      imageLink: imageLink,
      price: price,
    });
    res
      .status(202)
      .json({ msg: "course created succesfully", courseId: course._id });
  });
  
  router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let allCourses = await Course.find({});
    res.status(202).json({ courses: allCourses });
  });

module.exports = router;