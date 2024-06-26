// EVENTS

// EVENT PROPAGATION -- PROCESS OF WHEN AND IN WHICH DIRECTION AN EVENT IS EXECUTED IS KNOWN AS EVENT PROPAGATION

// EVENT BUBBLING -- EVENTS ARE EXECUTED BOTTOM UP

document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector('div');
    const form = document.querySelector('form');
    const button = document.querySelector('button');

    div.addEventListener("click", function() {
        alert("div");
    });
   
    form.addEventListener("click", function() {
        alert("form");
    },{capture:true});
    button.addEventListener("click", function() {
        alert("button");
    });
    
});
