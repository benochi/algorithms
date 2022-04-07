//user double pointers for comparison
function merge(arr1, arr2) {
  let results = []
  let i = 0;
  let j = 0;
  //could optimize by checking the last value in both arrays 
  //and spreading if they're already sorted. 

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] > arr2[j]){
      results.push(arr2[j]);
      j++
    } else {
      results.push(arr1[i]);
      i++
    }
  }
  //push remaining into results. 
  while(i < arr1.length) {
    results.push(arr1[i]);
    i++
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++
  }
  return results;
}





function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);

}

module.exports = { merge, mergeSort};

let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(mergeSort(arr));
console.time(mergeSort(arr));
console.timeEnd(mergeSort(arr));