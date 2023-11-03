function arrayClone(arr) {
  return arr.slice(); // slice is used to shallow copy
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));
