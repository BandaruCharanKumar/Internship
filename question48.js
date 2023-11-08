function notPrime(arr){
  for(let i=0;i<arr.length;i++){
    if((arr[i] == 1) || (arr[i] >2 && arr[i] % 2 == 0 ))
    return false
  }
  return true
}

console.log(notPrime([2, 3, 5, 7, 1]));
console.log(notPrime([2, 3, 5, 7, 8]));
