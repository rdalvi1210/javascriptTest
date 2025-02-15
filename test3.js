var nums = [1, 2, 3, 4, 5, 6]
var target = 2;

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;
   
    while (left <= right) {
        let midIndex = Math.floor((left+right) / 2);
        let midElement = nums[midIndex]
        if (target == midElement) {
            return "Element found"
        }
        else if (target < midElement) {
            right = midIndex - 1;
        }
        else {
            left = midIndex + 1;
        }
    }
    return "Not Found"
}
console.log(binarySearch(nums, target));



function secondSmallest(arr) {
    let smallest = Infinity
    let secondSmallest = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] > smallest && arr[i] < secondSmallest) {
        secondSmallest = arr[i];
      }
    }
    
    return secondSmallest;
  }
  console.log(secondSmallest([1, 2])); 
  


  function reverseWords(s) {
    let res = "", word = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
        word += s[i];
      } else {
        for (let j = word.length - 1; j >= 0; j--) res += word[j];
        res += " ";
        word = "";
      }
    }
    for (let j = word.length - 1; j >= 0; j--) res += word[j];
    return res;
  }
  
  console.log(reverseWords("hello world")); // Output: "olleh dlrow"
  


  function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== 1) {
        console.log(arr[i] + 1);
        return;
      }
    }

  }
  
  findMissingNumber([0, 1, 3, 4]); // Output: 2


  function compressString(str) {
    let result = "";
    let count = 1;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++; 
      } else {
        result += str[i] + count;
        count = 1;
      }
    }
    
    return result;
  }
  
  console.log(compressString("aaabbcddd")); // Output: "a3b2c1d3"
  
  