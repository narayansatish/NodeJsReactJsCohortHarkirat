const fs = require("fs");

 

const filePath = "./example.txt";

 

fs.readFile(filePath, "utf8", (err, data) => {

  if (err) {

    console.error("Error reading the file:", err);

    return;

  }

 

  console.log(data);

});