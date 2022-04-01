/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  //base case
  if(index === nums.length) return 1;
  //recursion
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWord = 0) {
  //base case
  if(index === words.length) return longestWord;
  //recursion
  //compare current longestWord to ccurrent index word.
  longestWord = Math.max(words[index].length, longestWord)
  //return max.
  return longest(words, index + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, outputStr = "") {
  //base case - returned after recursion is done. 
  if(index >= str.length) return outputStr;
  //recursion
  outputStr += str[index];
  return everyOther(str, index + 2, outputStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  leftIndex = index;
  rightIndex = str.length - index - 1; //don't forget to subtract index to move right pointer in. 
  if(leftIndex >= rightIndex) return true;
  if(str[leftIndex] !== str[rightIndex]) return false;
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  //base case
  if(index === arr.length) return -1;
  //recursion
  if(arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, reverseStr = "") {
  //base case
  if(str.length === reverseStr.length) return reverseStr;
  //recursion
  reverseStr += str[str.length - 1 - index]; 
  return revString(str, index + 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let key in obj){
    if(typeof obj[key] === "string") strings.push(obj[key]);
    if(typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if(left > right) {
    return -1;
  }
  let middle = Math.floor(left + right / 2);
  if(arr[middle] === val) {
    return middle;
  } 
  if(arr[middle] > val){
    //move search left to search left half of array
    return binarySearch(arr, val, left, middle -1)
  }
  //otherwise move search right to sarch right half of array. 
  return binarySearch(arr, val, middle + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

console.log(product([1,2,3,4,5]))
console.log(product([]));

console.log(longest(["hello", "hi", "hola"]))//5
console.log(longest([]));

console.log(everyOther("hello"))  // "hlo"
console.log(everyOther("hello World"))

console.log(isPalindrome("tacocat")) //true
console.log(isPalindrome("tacodog")) //false

let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));  // 1
console.log(findIndex(animals, "porcupine"));   // -1

console.log(revString("porcupine")) // 'enipucrop'

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"];

console.log(binarySearch([1,2,3,4],1)) // 0
console.log(binarySearch([1,2,3,4],3))// 2
console.log(binarySearch([1,2,3,4],5)) // -1