/*
Given 2 Arrays, create a function that let's 
a user know (true/false) whether these two 
arrays contain any common items

For Example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
should return false.

-----------
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
should return true.


Questions:
O(n^2) - Quadratic time
O(n) - Linear time ?


2 parameters - arrays - no size limit
return true or false

Questions:
O(n^2) - Quadratic time
O(n) - Linear time

function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            return true;
        }
        }
    }
    return false;
    }




 O(a*b)
 O(3*3) => O(9)
 O(1) => O(1)

containsCommonItem(array1, array2);

*/
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommonItem(arr1, arr2) {
  // Create a map from the first array

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // Check if any item in the second array exists in the map
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) Time Complexity
console.log(containsCommonItem(array1, array2)); // true
