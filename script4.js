// // functio statement aka function declaration
// function sum(a,b){
//     return a+b;
// }

// // in function statements we cannot use annonymous functions
// // function(){

// // }

// // in function expressions we can use annonymous functions
// const sum = function(a,b){
//     return a+b;
// }

// // difference between parameters and arguments

// // parameters are defined when the function is declared
// // arguments are defined when the function is called

// var x = function (param1, param2){
//     return param1 + param2;
// }

// // First Class Functions - 1-> functions can be treated as values

// // 2-> functions can be passed as arguments to other functions

// // 3-> functions can be returned as values from other functions

// CALLBACK FUNCTIONS ->> functions passed as arguments

// function x (y){
//     console.log("x")
//     y();
// }

// x(function y(){
//     console.log("y")
// })
// function attachEvenetListener(){
//     let count =0;
//     document.getElementById("clickMe").addEventListener("click",function xyz(){
//         console.log("clicked",++count);
//       })
// }
// attachEvenetListener();

//POLYFILLS

const arr = [1, 2, 3, 4, 5];
//map
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// const result = arr.myMap((val,i)=>{
//     return val*i
// })

// console.log(result);

//filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

//debounce

const MyDebounce = function (cb, delay) {
  let timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// export default function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const context = this; // Capture the correct 'this'
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args); // Call func with 'this' and arguments
//     }, wait);
//   };
// }

// Actual API call function
async function actualApiCall(inputValue) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("API Response:", data, "Input Value:", inputValue);
}

// Debounced API call
const debouncedApiCall = MyDebounce((inputValue) => {
  console.log("API called with input:", inputValue);
  actualApiCall(inputValue);
}, 2000);

// Add event listener for the input field
document.getElementById("api-input").addEventListener("input", (event) => {
  const inputValue = event.target.value;
  debouncedApiCall(inputValue);
});

console.log("script4 is loaded");