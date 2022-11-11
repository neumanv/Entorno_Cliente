"use strict"

let frase = prompt("Introduce una frase:");
let tam = +prompt("Introduce el número donde se cortará:");

function truncate(str, maxlength) {

    return (str.length > maxlength) ?
    /*si el tamaño del string es mayor que el número se corta la cadena en la cifra introducida*/
    str.slice(0, maxlength - 1) + "..." : str;
}

alert(truncate(frase, tam));