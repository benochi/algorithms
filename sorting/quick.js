/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
  //swap array indexes
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  //pivot at first element
  let pivot = arr[start];
  let swapIdx = start

  //start + 1, less or equal to, 
  for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  //swap pivot
  swap(arr, start, swapIdx)
  return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length -1) {
  if(left < right){
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

module.exports = quickSort;

let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(quickSort(arr));
console.time(quickSort(arr));
console.timeEnd(quickSort(arr));

