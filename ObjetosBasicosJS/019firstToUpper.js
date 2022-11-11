"use strict"

let palabra = prompt("Escribe una palabra: ");

function ucFirst(pal){

    //Separo la primera posicion y la hago mayúscula, luego la uno al resto
    return pal[0].toUpperCase() + pal.substring(1);
}

alert(ucFirst(palabra));