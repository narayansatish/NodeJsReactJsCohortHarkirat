/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {

  // Your code here

  let vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let vowelCount = 0;

  for (let index = 0; index < str.length; index++) {

    if (vowelList.includes(str[index])) {

      vowelCount++;

    }

  }

  return vowelCount;

}

 

module.exports = countVowels;