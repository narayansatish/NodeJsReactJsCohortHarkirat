const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, Course ,User} = require( "../db");;
const { default: mongoose } = require("mongoose");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  let user = await User.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  console.log(courseId);

  let x =await User.updateOne({
      username: username
  }, {
      $push: {
          purchasedCourses: courseId
      }
  })
  console.log(x);

  res.json({
      message: "Purchase complete!"
  })
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  let { username } = req.headers;
  let user = User.findOne({ username: username });
  console.log(username);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(202).json({ courses: courses });
});

module.exports = router;
