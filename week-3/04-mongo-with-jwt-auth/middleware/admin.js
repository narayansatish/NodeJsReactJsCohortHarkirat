// Middleware for handling auth

const jwt = require("jsonwebtoken");

const jwtPassword = "SitaRam";
function adminMiddleware(req, res, next) {

   
    let list= req.headers.authorization.split(" ");
    
    if(list.length==2){
        let token = list[1];
        jwt.verify(token, jwtPassword, (err, decoded) => {
            if (err) {
                res.status(404).send("Signin Failed");
              
            } else {
              next();
              
            }
          });
    }
    else{
        res.status(404).send("Incorrect authorization key");
    }

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;