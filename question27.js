function retrive (arr){
  let arr1 = []
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] == "number" && !isNaN(arr[i]) && arr[i]!==0){
      arr1.push(arr[i])
    }
  }
  return arr1;
}

console.log(retrive([NaN, 0, 15, false, -22, "", undefined, 47, null]));