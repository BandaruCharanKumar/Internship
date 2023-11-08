function duplicate(arr){
    let arr1=[]
    for(let i=0; i<arr.length; i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
    } 
    console.log(arr1)
}
console.log(duplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));



