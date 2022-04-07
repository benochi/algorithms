function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let currentValue = arr[i]
    //use var not let or j won't assign properly. 
    for(var j = i - 1; j > -1 && arr[j] > currentValue; j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue
  }
  return arr;
}

module.exports = insertionSort;
let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(insertionSort(arr));
console.time(insertionSort(arr));
console.timeEnd(insertionSort(arr));