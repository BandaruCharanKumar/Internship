function factor(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i+1] % arr[i] !== 0){
            return false
        }
    }
    return true
}

console.log(factor([2, 4, 8, 16, 32]));
console.log(factor([2, 4, 16, 32, 64]));
console.log(factor([2, 4, 16, 32, 68]));