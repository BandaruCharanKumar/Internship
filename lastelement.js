function last(arr,n){
    if(n == undefined){
        return arr[arr.length-1]
    }else if(n <= 0){
        return []
    }else{
        return arr.slice(-n)
    }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));