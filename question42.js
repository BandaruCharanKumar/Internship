function difference(arr1, arr2) {
  let arr3 = [];
  let newArr = arr1.concat(arr2);
  // console.log(newArr)
  for (let i = 0; i < newArr.length; i++) {
    if (!arr3.includes(newArr[i])) {
      arr3.push(newArr[i]);
    }
  }
   console.log(arr3);
}


console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
