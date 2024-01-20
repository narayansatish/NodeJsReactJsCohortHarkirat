// Middleware for handling auth
const { Admin } =require( "../db");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let { username, password } = req.headers;
  console.log("hi"+username +password)
  let x={ username: username, password: password }
  let value = await Admin.findOne(x);
  console.log("Value",x);
  if (value) {
    next();
  } else {
    res.status(403).send("This Admin Profile does not exist. SignUp first.");
  }
}

module.exports = adminMiddleware;
