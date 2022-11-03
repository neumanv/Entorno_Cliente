"use strict"

/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }

);*/
let question = "Do you agree?";

let ask = prompt(question, yes, no) ?
() => alert("You agreed.") :
() => alert("You canceled the execution.");