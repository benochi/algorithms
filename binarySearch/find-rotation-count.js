/*
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
*/

function findRotationCount(arr, start = 0, end = arr.length - 1) {
  if (end < start) return 0;
  if (end === start) return start;
  let mid = Math.floor((start + end) / 2)

  // Check if element (mid+1) is minimum element.
  // Consider the cases like [3, 4, 5, 1, 2]
  if (mid < end && arr[mid + 1] < arr[mid])
    return mid + 1;

  // Check if mid itself is minimum element
  if (mid > start && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  // Decide whether we need to go to left half or
  // right half
  if (arr[end] > arr[mid]) {
    return findRotationCount(arr, start, mid - 1);
  }

  return findRotationCount(arr, mid + 1, end);
}

module.exports = findRotationCount

console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
console.log(findRotationCount([7, 9, 11, 12, 5]))
console.log(findRotationCount([7, 9, 11, 12, 15]))