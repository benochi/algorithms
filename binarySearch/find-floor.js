/*
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
If the floor does not exist, return -1.
*/

function findFloor(arr, num, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  if (num >= arr[end]) return arr[end];
  let mid = Math.floor((start + end) / 2)

  if (arr[mid] === num) return arr[mid];
  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }
  if (num < arr[mid]) {
    return findFloor(arr, num, start, mid - 1);
  }
  return findFloor(arr, num, mid + 1, end)
}

module.exports = findFloor

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5)) // 2
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)) // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)) // -1)