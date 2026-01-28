// synchronus
console.log("task1");
console.log("task2");
console.log("task3");


// asynchronus

console.log("Start");

setTimeout(() => {
  console.log("you are");
}, 3000);

console.log("End");


// synch and asynch together
console.log("A");

setTimeout(() => {
  console.log("doing");
}, 4000);

console.log("C");

// synch and asynch together
console.log("A");

setTimeout(() => {
  console.log("good");
}, 5000);

console.log("C");
