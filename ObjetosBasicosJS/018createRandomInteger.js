"use strict"

function randomInteger(min, max){

    //sumo un valor random entre 0 y 1 al número mínimo
    let num = min + Math.random() * (max + 1 - min);    //luego lo multiplico por el resultado de la operación

    return Math.floor(num);     //redondeo el resultado
}


document.write(randomInteger(1, 5));