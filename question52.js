function indexes(arr){
  let index = []
  for(let i=0; i<arr.length; i++){
    if(isNaN(arr[i])){
      index.push(i)
    }
  }
  return index;
}
console.log(indexes([2, NaN, 8, 16, 32]));
console.log(indexes([2, 4, NaN, 16, 32, NaN]));
console.log(indexes([2, 4, 16, 32]));