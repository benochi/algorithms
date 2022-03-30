function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

  function findFirst(arr, start = 0, end = arr.length - 1) {
    if (end >= start) {
      let mid = start + Math.floor((end - start) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, end) 
      }
      return findFirst(arr, start, mid - 1)
    }
    return -1;
}

module.exports = countZeroes

console.log(countZeroes([1,1,1,0,0,0])) //3
console.log(countZeroes([1,1,1,1,0,0]))
console.log(countZeroes([1,1,1,1,1,1,1]))