// EVENTS

// EVENT PROPAGATION -- PROCESS OF WHEN AND IN WHICH DIRECTION AN EVENT IS EXECUTED IS KNOWN AS EVENT PROPAGATION

// EVENT BUBBLING -- EVENTS ARE EXECUTED BOTTOM UP -- this is a default behaviour of the browser 

document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector('div');
    const form = document.querySelector('form');
    const button = document.querySelector('button');

    div.addEventListener("click", function() {
        alert("div");
    },{capture:true});
    form.addEventListener("click", function() {
        alert("form");
    },{capture:true});
    button.addEventListener("click", function() {
        alert("button");
    },{capture:true});
    
});


// event.target vs this.target vs this.currentTarget

// event.target is the element that triggered the event
// this.target is the element that the event listener is attached to
// this.currentTarget is the element that the event listener is attached to  

// what is event capturing or trickling? -- > outer to inner div 

// how do we stop bubbling or trickling/capturing?

// event.stopPropagation(); // function (e) => e.stopPropagation()


// What is event delegation?
// Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of adding separate event listeners to each child element, you leverage the event bubbling mechanism to handle events efficiently.