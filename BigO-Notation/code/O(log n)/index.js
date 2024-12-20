function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  // Start the search
  while (left <= right) {
    // Find the middle element
    let mid = Math.floor((left + right) / 2);

    // If the middle element is the target, we found it
    if (array[mid] === target) {
      return mid; // Target found, return its index
    }

    // If the target is smaller than the middle element, ignore the right half
    else if (array[mid] > target) {
      right = mid - 1; // Ignore the right half, move to the left
    }
    // If the target is larger than the middle element, ignore the left half
    else {
      left = mid + 1; // Ignore the left half, move to the right
    }
  }

  return -1; // If the target is not found, return -1
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearch(array, target);
console.log(result); // Output: 3 (Target 7 is at index 3)
