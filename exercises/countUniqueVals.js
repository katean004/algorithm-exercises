// function accepts a sorted array and counts unique variables in the array

function countUniqueValues(arr) {
  var i = 0;

  for (var j = 1; j < arr.length; j++) {
    // if we find a unique value, increment i and set i value to j value
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
