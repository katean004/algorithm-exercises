// Pseudo Code
// 1. Create an object to keep track of the numbers or characters.
// 2. Loop over array or string and count the frequency of each number/character.
// 3. Compare the char maps/frequency counters such as subtracting value of letter/number in an object.

// Checking to see if second array has same values but squared
function same(arr1, arr2) {
  // if two arrays are different lengths then it has to be false
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // for each element in the array add 1 if it exists, if not initialize to 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // if key squared is not in frequencyCounter2 at all, return false
    if (!(key ** 2 in frequencyCounter2)) return false;

    // if the number of key^2 doesn't match up with the number of keys, return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  // both arrays can only be the same if both conditionals above are true
  return true;
}
