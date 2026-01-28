// Global Execution Context
var x = 10;

function first() {
  var y = 20;
  second();
}

function second() {
  var z = 30;
  console.log(x + z);
}

first();


// eval
eval("var a = 5; console.log(a)");
