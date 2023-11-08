function thirdssmallest(arr){
    arr.sort((a,b)=> a-b)
    return arr[2]
}

console.log(thirdssmallest([2, 3, 5, 7, 1]));
console.log(thirdssmallest([2, 3, 0, 5, 7, 8, -2, -4]));