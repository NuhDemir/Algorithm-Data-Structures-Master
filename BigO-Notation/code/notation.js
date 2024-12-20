const mark = ["mark"];
const everyone = ["nemo", "mark", "james", "peter", "john"];

function findMark(array) {
  let t0 = performance.now(); // Zaman ölçüm başlangıcı döngüden önce alınır.
  for (let i = 0; i < array.length; i++) {
    // `length` düzgün yazılmalı.
    if (array[i] === "mark") {
      console.log("Found Mark!");
    }
  }
  let t1 = performance.now(); // Zaman ölçüm bitişi döngüden sonra alınır.
  console.log("Call to findMark took " + (t1 - t0) + " milliseconds.");
}

findMark(everyone);
// The time complexity of the findMark function is O(n) where n is the length of the array.
// This is because in the worst case, the function will have to check each element of the array once.
