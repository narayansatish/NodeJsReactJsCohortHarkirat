/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function removePunctuation(inputString) {
  // Define a regular expression to match punctuation marks
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]/g;

  // Use replace() to remove punctuation marks
  const stringWithoutPunctuation = inputString.replace(punctuationRegex, '');

  return stringWithoutPunctuation;
}

function isPalindrome(str) {
  str=str.toUpperCase().split(' ').join('');
  let start = 0,end = str.length - 1;
  str= removePunctuation(str) ;


  while (start < end) {
    
    if (str[start] == str[end]) {

      start++;

      end--;

    } else {

      return false;

    }

  }

  return true;

}


 

module.exports = isPalindrome;