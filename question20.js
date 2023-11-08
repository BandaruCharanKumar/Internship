function duplicate(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !arr1.includes(arr[i])) {
        arr1.push(arr[i]);
      }
    }
  }
  console.log(arr1);
}
console.log(duplicate([1, 2, 2, 4, 6, 3, 5, 4, 7, 4, 8, 7, 3, 6]));

