


// var 
console.log(a); 
var a = 10;

// let 
try {
  console.log(b); 
} catch (e) {
  console.log("b is in TDZ");
}
let b = 20;

// const 
try {
  console.log(c); 
} catch (e) {
  console.log("c is in TDZ");
}
const c = 30;

// Block scope TDZ
{
  try {
    console.log(d);
  } catch (e) {
    console.log("d is in block TDZ");
  }
  let d = 40;
}


