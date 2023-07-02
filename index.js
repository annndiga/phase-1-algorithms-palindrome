function isPalindrome(word) {
  // Write your algorithm here
// Reverse the word
const reversedWord = word.split("").reverse().join("");
  
// Check if the reversed word is equal to the original word
return word === reversedWord;

} 

/* 
  Add your pseudocode here
   Pseudocode:
  1. Split the word into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Check if the reversed word is equal to the original word.
  5. If they are equal, return true (the word is a palindrome), otherwise return false.

  
*/

/*
  Add written explanation of your solution here
  To check if a word is a palindrome, we need to reverse the word and compare it with the original word. If the reversed word is equal to the original word, then the word is a palindrome. To reverse the word, we split it into an array of characters, reverse the array, and join it back into a string. Finally, we compare the reversed word with the original word using strict equality (===) and return the result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
