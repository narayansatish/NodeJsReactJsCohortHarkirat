const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/courseApp");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});
const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});
const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});



const Admin =mongoose.models.Admin ||  mongoose.model("Admin", AdminSchema);
const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
