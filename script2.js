

//callbacks - helps in writing async functions in js
// setTimeout(function () {
//     console.log("javascript")
// },5000)

// Promises
//used to handle async operations in js

//how it used to be

// createOrder(Cart,function (orderid){
//     proceedToPayments();
// })
// the payment function is called after the exexcution of createorder

// const promise = createOrder(cart);
//promise will be like an object {data:undefined}

//promise will call it only once and we will have control over our  program with us rather  then to other function
// promise.then(function(orderid){
//     proceedToPayments(orderid)
// })

//promise objects or data are immutable

// fetch is an api given by browsers to us to make external calls

// const GITHUB_API = "https://api.github.com/users/dheeraj1717"

// const user = fetch(GITHUB_API)
// console.log(user) //returns a promise object

// user.then(function(data){
//     console.log(data)
// })


// what is a promise? -- placeholder which will be later filled with a value recieved from async operation or a conatiner for a future value

// a promise is an object representing the  eventual completion or failure of an asynchornous operation.


// createOrder(cart).then(function(orderid){
//     return proceedTopayments(orderid)
// }).then(function(paymentinfo){
//     return showordersummaru(paymentinfo)
// })

//IMP-- important to use the return so that the data flows properly in the chain


//promises are resolved only once and has three states pending, fulfilled and rejected



//CREATING A PROMISE    

// const cart =["shoes","pants","kurta"]
// const promise = createOrder(cart); // orderid
// promise.then(function(orderId){
//     console.log(orderId)
//     return orderId;
// }).then(function(orderId){
//     return proceedToPayment(orderId)
// })//failure callback
// .catch(function(err){
// console.log(err.message)
// })
// // promise constructor takes a function
// //resolve and reject are given by js

// //producer end
// function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){
//         //createOrder
//         //validateCart
//         if(!validateCart(cart) ){
//             const err = new Error("cart is not valid")
//             reject(err)
//         }
//         //logic for create order
//         const orderId = "12345";
//         if(orderId){
//             resolve(orderId)
//         }
//     }
// )
// return pr;
// }

// function validateCart(cart){
//     return false
// }




// PROMISE APIs

// 1st - Promise.all() -- for making parallel api calls
// it is used to handle multiple promises together
// it takes an array of promises as an input

// it takes an iterable(like an array)

// Promise.all([p1,p2,p3])
// p1-3s p2-2s p3-1s
// so after 3 s we will get [val1,val2,val3]
// Create three promises that resolve after different times
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('First promise resolved after 1 second');
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Second promise resolved after 2 seconds');
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Third promise resolved after 3 seconds');
//     }, 3000);
// });

// // Use Promise.all to run the promises in parallel
// Promise.all([promise1, promise2, promise3])
//     .then((messages) => {
//         console.log('All promises resolved:');
//         messages.forEach((message, index) => {
//             console.log(`Promise ${index + 1}: ${message}`);
//         });
//     })
//     .catch((error) => {
//         console.error('One of the promises rejected:', error);
//     });
// Promise.all is extremely useful when you need to perform multiple asynchronous operations and wait for all of them to complete before proceeding. For example:

// Fetching Multiple Resources: You might need to fetch data from multiple APIs and use the results together.
// Performing Batch Operations: You may want to perform several independent operations concurrently and continue only when all have finished.

// lets take an example where all were successful in diff interval 
// it returns an array of results of all three calls with value of all these results

// it will wait for all of them to finish

// CASE 2 -- one of the promise got rejected 
// if p2 gets an error after 1s then it will return that only right away without waiting for other promises to fulfill 


// promise.allSettled([p1,p2,p3])

// in this api even if a promise fails it will return the output for the successful ones
// it waits for all promises to get settled irrespective of success or failure

// [val1,err2,val3]

// promise.race([p1,p2,p3])

// gives the  result of the first settled promise

// if the first promise was rejected, it throws an error


// promise.any([p1,p2,p3])
// waits for first promise to get success
// if everything fails then result would be aggregate errors
// [err1,err2,err3]

// to see the aggregate errors ... 
// .catch((err)=>{console.error(err); 
//     console.log(err.errors) --- this will show the errors error
// })

// settled -- success or failure
// (resolve,success,fulfilled) or (reject,failure,rejected)




// ASYNC AWAIT

//ASYNC-- always returns a prmoise (if we dont return a promise then it will wrap it into a promise and return)

// async function getData(){
//     return "namaste"
// }
// const dataPromise = getData().then(res=>console.log(res))
// console.log(dataPromise) // gave a promise


// async and await combo is used to handle promises

// await can only be used inside the async function
// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value")
// })

// async function handlePromise(){
//    const val = await p;
//    console.log(val)
// }

// handlePromise();

// without async await -->

// function getdata(){
//     p.then((res=>console.log(res)))
// }

// getdata();


// to handle errors we use trycatch
// or handlePromise().catch((err)=> console.log(err))

// async await removes the need of too much promise chaining like .then .then

// Advantages of Async/Await

// Improved Readability: Async/await syntax makes asynchronous code look more like synchronous code, reducing complexity and improving readability.
// Simplified Error Handling: Using try/catch blocks with async/await allows for more straightforward and centralized error handling compared to chaining .then() and .catch().
// Maintainability: The linear flow of async/await makes the code more maintainable and easier to debug.
// Use Cases for Async/Await

// Complex Asynchronous Workflows: When dealing with complex workflows that involve multiple asynchronous operations, async/await simplifies the logic and makes the code more intuitive.
// API Calls: Async/await is particularly useful for making sequential API calls where each call depends on the result of the previous one.