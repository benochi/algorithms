function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr); //find where array is split numerically, return index. 
  //check array for length, num for first index, and num is less than the highest number.
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }

  function binarySearch(arr, num, start =0, end = arr.length -1) {
    if (arr.length === 0) return -1;
    if (num < arr[start] || num > arr[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
}

function findPivot(arr){
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length -1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1 //see if number to left is higher than right === pivotPoint.
    else if (arr[start] <= arr[mid]) { //if start is less than mid move mid up. 
      start = mid + 1
    } else {
      end = mid - 1; //if start is more than mid, move down. 
    }
  }
}


module.exports = findRotatedIndex

console.log(findRotatedIndex([3, 4, 1, 2], 4))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))