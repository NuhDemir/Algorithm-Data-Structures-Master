function Booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooo!");
  }
}
Booo([1, 2, 3, 4, 5, 6]);

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);
