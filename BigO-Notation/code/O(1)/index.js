function checkFirstElement(array) {
  //Step 1: Check the first element of the array
  if (array.length === 0) {
    console.log("Array is empty"); //O(1)
    return; //function exists in constant time
  }

  //Step 2: Check the first element of the array
  const firstElement = array[0]; //O(1)
  console.log(firstElement); //O(1)

  //Step 3: Conditional operation
  if (firstElement === "mark") {
    //O(1)
    console.log("Found Mark!"); //O(1)
  } else {
    console.log("Mark is not found!"); //O(1)
  }
}

//Example 1: Array is empty
checkFirstElement([]);

//Example 2: Array has elements
checkFirstElement(["mark", "james", "peter", "john"]);

//Example 3: First element is something other than "mark"
checkFirstElement(["nemo", "james", "peter", "john"]);
