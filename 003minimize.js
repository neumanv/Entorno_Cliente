"use strict"

let a = prompt("Primer número:");
let b = prompt("Segundo número:");
min(a, b);

function min(a, b){

    if(a > b){
        alert(b)
    }else if(a === b){
        alert(a);
    }else{
        alert(a);
    }
}