"use strict"

function A(){
    let b = 8;
    return this.b;
}

function B(){
    let b = 8;
    return this.b;
}

let a = new A();
let b = new B();

alert( a == b ); 