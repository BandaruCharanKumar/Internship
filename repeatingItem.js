var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let count = 0;
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] = arr[j]){
            count++
        }
    }
}
console.log(count)