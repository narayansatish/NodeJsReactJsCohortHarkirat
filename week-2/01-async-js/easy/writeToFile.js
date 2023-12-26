const fs = require('fs');

const dataToWrite = 'Hello, world!';

fs.writeFile('example.txt', dataToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to the file');
  }
});