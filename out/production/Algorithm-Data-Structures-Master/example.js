const strings = ["a", "b", "c", "d"];

//push()
strings.push("a"); //O(1)

//pop()
strings.pop();

//unshift()
strings.unshift("x"); //O(n)

//splice()
strings.splice(2, 0, "await"); //O(n)

console.log(strings);
