/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
*/

function sortedFrequency(arr, num) {
  let firstNum = findFirst(arr, num);
  if (firstNum == -1) return firstNum;
  let lastNum = findLast(arr,num);
  return lastNum - firstNum + 1; //plus 1 to adjust for indexing. 
}

  function findFirst(arr, num, start = 0, end = arr.length - 1){
    if (end >= start) {
      let mid = Math.floor((start + end) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, end) //if num is higher, move up halfway
      } else {
        return findFirst(arr, num, start, mid - 1) //if num is lower, move down halfway. 
      }
    }
    return -1
  }
  function findLast(arr, num, start = 0, end = arr.length - 1) {
    if (end >= start) {
      let mid = Math.floor((start + end) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) { //find if num is the last number in the array, Or higher than num(in case one instance of num), or equal to num
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, start, mid - 1) //if num is lower, move down halfway
      } else {
        return findLast(arr, num, mid + 1, end) //if num is higher(than mid), move up halfway
      }
    }
    return -1
  }


module.exports = sortedFrequency

console.log(sortedFrequency([1,2,3,4,5,6,6,6,6,6,7,8,9,10,11], 6)) //5
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) //4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) //1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) //2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) //-1
