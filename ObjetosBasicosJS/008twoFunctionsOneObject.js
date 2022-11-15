"use strict"

let ilerna = {};

function A(){
    
    return ilerna;
}

function B(){
    
    return ilerna;
}

//se ha creado el mismo objeto para devolver en las 2 funciones

let a = new A();
let b = new B();

alert( a == b );        //es true 
//alert( a === b );     también sería true