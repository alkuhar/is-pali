/**
* Takes a strings or number and returns true if palindrome else false.
*
* @param {string} str String of characters
* @returns {boolean} bool Returns true or false
*
*/

function isPalindrome(str) {
  return str.toString().toLowerCase().split(',')
  .join('').split(' ').join('').split('!')
  .join('') === str.toString().toLowerCase().split(',')
  .join('').split(' ').join('').split('!')
  .join('').split('').reverse().join('') ? true : false;
}

module.exports = isPalindrome;
