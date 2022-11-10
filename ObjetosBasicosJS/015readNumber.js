"use strict"

let numero = +prompt("Escribe un número:");

function readNumber(num){

    while(!isFinite(num)){         //isFinite() sirve para comprobar si un parámetro es un número finito

        num = prompt("Escribe un número:");
    }

    if(num == null || num == ""){       //si no se pone nada o se cancela es null

        return null;
    }

    return num;
}

let respuesta = readNumber(numero);
alert(respuesta);