// Function to find the third largest number in an array
function thirdLargest(arr) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] !== second && arr[i] !== first) {
      third = arr[i];
    }
  }
  return third === -Infinity ? null : third;
}
console.log(thirdLargest([4, 1, 6, 2, 8, 10])); // Output: 6

// Function to reverse a number
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(1234)); // Output: 4321

//Find the first non repeatiting letter

function firstNonRepeatingChar(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("hhelo")); // Output: 'e'

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charCount = {};
  for (let i = 0; i < str1.length; i++) {
    charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
    charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
  }
  for (let key in charCount) {
    if (charCount[key] !== 0) return false;
  }
  return true;
}
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

// Function to find the longest word in a sentence
function longestWord(sentence) {
  let words = [],
    word = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (i < sentence.length && sentence[i] !== " ") {
      word += sentence[i];
    } else {
      if (word.length > 0) words.push(word);
      word = "";
    }
  }
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord("JavaScript is an amazing language")); // Output: "JavaScript"
console.log(longestWord("I love coding")); // Output: "coding"
