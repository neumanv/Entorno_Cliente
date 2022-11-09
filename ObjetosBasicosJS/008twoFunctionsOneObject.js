"use strict"

function A(){
    let z = 8;
    return this.z;
}

function B(){
    let b = 8;
    return this.b;
}

let a = new A();
let b = new B();

alert( a == b ); 