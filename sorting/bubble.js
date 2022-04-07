function bubbleSort(arr) {
  function swap(arr, index1, index2){
    //same as [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    let temp;
    temp =arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp
  };

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;

let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(bubbleSort(arr));
