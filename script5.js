//OBJECTS

// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// let user = {
//     name: "Dheeraj",
//     age: 20,
//     isStudent: true
// }

// user.isAdmin = true;

// delete user.isStudent;
// console.log(user);

// CLOSURE

function parent(){
    const a =10;
    function child(){   
        console.log(a);
    }
    child();
}
parent();