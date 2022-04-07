function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

module.exports = selectionSort;

let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(selectionSort(arr));
console.time(selectionSort(arr));
console.timeEnd(selectionSort(arr));