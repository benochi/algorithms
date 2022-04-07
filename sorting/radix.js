//ONLY with numbers! 
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  //log10 will assign buckets by dividing the number by ten. math.abs gives absolute, add 1 to place into a bucket for less than 10 values
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++){
    //buckets have 10 slots for numeric values. create an array"bucket" for each value. 
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++){
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums
}

module.exports = radixSort;

let arr = [1,3,7,5,9,10,28,15,100,75,34,12,37,67,57,47,77,89,87,17,99];

console.log(radixSort(arr));
console.time(radixSort(arr));
console.timeEnd(radixSort(arr));