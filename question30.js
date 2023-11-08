function merge(arr1,arr2){
  let arr3 = arr1.concat(arr2)
  let result = []

  for(let i=0; i<arr3.length; i++){
    if(!result.includes(arr3[i])){
      result.push(arr3[i])
    }
  }
  return result;
}

console.log(merge([1, 2, 3], [2, 30, 1]));