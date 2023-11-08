function sumNumbersInArray(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] == "number"){
      sum += arr[i]
    }
  }
  return sum
}
console.log(sumNumbersInArray([2, "11", 3, "a2", false, 5, 7, 1]));
console.log(sumNumbersInArray([2, 3, 0, 5, 7, 8, true, false])); 