const fs = require("fs");

const filePath = "./inputFile.txt";

function readingFileAsync() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }
      if (data.length == 0) {
        resolve("");
      }
      let cleanedUpData = data[0];
      for (let i = 1; i < data.length; i++) {
        if (data[i] == " " && data[i] == data[i - 1]) {
          continue;
        }
        cleanedUpData = cleanedUpData + data[i];
      }
      resolve(cleanedUpData);
    });
  });
}
async function writingToFile() {
  let cleanedUpData = await readingFileAsync();
  fs.writeFile("example.txt", cleanedUpData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Output :" + cleanedUpData);
    }
  });
}
writingToFile();
