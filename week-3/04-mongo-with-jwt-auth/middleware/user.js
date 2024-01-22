
const jwt = require("jsonwebtoken");

const jwtPassword = "SitaRam";
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    let list= req.headers.authorization.split(" ");
    
    if(list.length==2){
        let token = list[1];
        jwt.verify(token, jwtPassword, (err, decoded) => {
            if (err) {
                res.status(404).send("Signin Failed");
              // Handle verification failure
            } else {
              next();
              
            }
          });
    }
    else{
        res.status(404).send("Incorrect authorization key");
    }
}

module.exports = userMiddleware;