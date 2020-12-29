// write sumZero function which accepts a sorted array of integers
// function should find the first pair of integers that sum to zero
// return array that includes the pair of values or undefined

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
