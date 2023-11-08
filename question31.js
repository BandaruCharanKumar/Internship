function removeArrayElement(arr,element){
  let result = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== element){
      result.push(arr[i])
    }
  }
  return result;
}
console.log(removeArrayElement([2, 5, 9, 6], 5));