// Given two strings, write a function to determine if the second string is an anagram of the first.

function validAnagram(str1, str2) {
  // if string are different lengths it cannot be anagram
  if (str1.length !== str2.length) return false;

  // variable for storing character map of one string
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    // ternary operator: if letter exists then add 1, if not set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // if first letter in str2 doesnt exist in lookup, return false
    if (!lookup[letter]) return false;
    else {
      // else subtract 1 from existing letter count in lookup
      lookup[letter] -= 1;
    }
  }

  return true;
}
