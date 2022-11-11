"use strict"

let precio = "$120";

function extractCurrencyValue(str) {

    return str.slice(1);    //simplemente le quito la primera posición al string 
}

document.write(precio + " = " + extractCurrencyValue(precio));