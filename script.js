//var vs let vs const



// const arr =  [1,2,3,4,5];

// polyfills

// Array.prototype.myMap = function(cb){
//     let temp=[];
//     for (let i=0;i<this.length;i++){
// temp.push(cb(this[i],i,this))
//     }
//     return temp;
// }

// arr.myMap((val,i)=>{
// console.log(val*i);
// }) 

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this))
//             temp.push(this[i])
//     }
//     return temp;
// }

// const morethentwo =arr.myFilter((arr,i)=>{
//     return arr>2;
// })

// console.log(morethentwo);


// Array.prototype.myReduce = function (cb,inititalValue){
// var accumulator = inititalValue;
// for(let i=0;i<this.length;i++){
//  accumulator = accumulator?cb(accumulator,this[i],this):this[i]   
// }
// return accumulator

// }

// function multiply(nums){
//     console.log(nums[0]*nums[1])
// }

// var arr2 = [3,4];
// multiply(arr2)

//closures

// function createBase(num){
//     return function (innerNum){
//         console.log(innerNum + num);
//     }
// }

// var addSix = createBase(6); //16

// addSix(10);


// for(let i=0;i<3 ; i++){
//     setTimeout(function log(){
//         console.log(i);
//     },1000)
// }


//currying question

//sum(2)(6)(1)

// function sum(a){
//     return function (b){
//        return function (c){
//         return a+b+c;
//     };
//         };
//     }



//infinite currying

// function sum(a){
//     return function (b){
//         if(b) return sum(a+b)
//             return a;
//     }
// }
// console.log(sum(2)(6)(1)())


// partial application
 
// function sum (a) {
//     return function(b,c){
//         return a+b+c;
//     };
// }

// console.log(sum(20)(1,4))


//OBJECTS

//dynamic adding

// const property = "firstName";
// const name = "Dheeraj Jangid"

// const user = {
//     [property]:name, //adding square brackets for dynamic 
// }

// console.log(user)

// looping through objects

// const user = {
//     name :"xyz",
//     age :"22",
//     isAwesome : true

// }

// for(key in user){
//     console.log(key)
//     console.log(user[key])
// }

// create a function multiplybytwo(obj) that multiplies all numeric property values of nums by 2

// let nums = {
//     a : 100,
//     b:200,
//     title :"my nums"
// }
 
// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==="number")
//             obj[key] = obj[key]*2
//     }
// }

// console.log(nums)


// only stringifying specified thing

// const settings = {
//     username:"Dheeraj",
//     level :20,
//     health:99
// }

// const data = JSON.stringify(settings,["level","health"])

// console.log(data) // {"level":20,"health":99} 


//cloning / deep copy of an object

// let user = {
//     name:"Dheeraj",
//     age:24
// }

// const objclone = Object.assign({},user)
//  const objclone = JSON.parse(JSON.stringify(user))


// console.log(objclone)


// call printanimals such that it prints all anumals in objexct

// const animals = 
//     [
//         {species: "Lion",name:"King"}
//         {species:"Whale",name:"Queen"}
//     ];

//     function printAnimals(i){
//         this.print = function {
//             console.log("#"+i+""+this.species+":" +this.name);
//         };
//         this.print();
//     }

//     for(let i = 0;i<animals.length;i++){
//         printAnimals.call(animals[i],i)
//     }


// append an array to another array

// const array = ["a","b"];
// const elements = [0,1,2];

// array.push.apply(array,elements);

// console.log(array)

// find min/max number in an array

// const numbers = [5,6,7,2,3];
// console.log(Math.max.apply(null,numbers))


// polyfill for call method

// let car1 ={
//     color:"red",
//     company:"Ferrari"
// }

// function purchaseCar(currency,price){
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
//     )
// }

// purchaseCar.call(car1,"dollar",20000)

// Function.prototype.myCall = function (context={},...args){
//  if(typeof this !== 'fucntion'){
//     throw new Error(this + "its not callable")
//  }
//  context.fn = this;
//  context.fn(...args)
// }

// apply method polyfill

// Function.prototype.myCall = function (context={},args=[]){
//     if(typeof this !== 'fucntion'){
//        throw new Error(this + "its not callable")
//     }
//     if(Array.isArray(args)){
//         throw new TypeError("CreateListFromArrayLike called on non-object")
//     }
//     context.fn = this;
//     context.fn(...args)
//    }

// bind method polyfill

// Function.prototype.myBind = function (context={},...args){
//     if(typeof this !== 'fucntion'){
//        throw new Error(this + " cannot be bound as its not callable")
//     }
//     context.fn = this; 
//    return function (...newArgs) {
//     return context.fn(...args,...newArgs)
//    };
//    };
