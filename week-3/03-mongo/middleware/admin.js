// Middleware for handling auth
import { admin } from "..index.js";
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let { username, password } = req.headers;
  let value = await admin.findOne({ username: username, password: password });
  if (value) {
    next();
  } else {
    res.status(403).send("This Admin Profile does not exist. SignUp first.");
  }
}

module.exports = adminMiddleware;
