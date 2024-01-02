import { User } from "..index.js";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let { username, password } = req.headers;
  let value = await User.findOne({ username: username, password: password });
  if (value) {
    next();
  } else {
    res.status(403).send("This User Profile does not exist. SignUp first.");
  }
}

module.exports = userMiddleware;
