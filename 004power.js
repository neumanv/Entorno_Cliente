"use strict"

let num = prompt("Número:");
let potencia = prompt("Potencia:");
pow(num, potencia);

function pow(x, n){

    while(n > 0){
        let res = x ** n;
        document.write(res);
        break;
    } 
}