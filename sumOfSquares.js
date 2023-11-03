function sumOfSquares(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let square = arr[i]*arr[i]
        sum+=square
    }
    console.log(sum)
}
console.log(sumOfSquares([1,2,3,4,5]))