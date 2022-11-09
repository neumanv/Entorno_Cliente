"use strict"

let schedule = {};

//CON EL OBJETO VACÍO ES TRUE

function isEmpty(obj){

    for(let key in obj){
        return false;
    }

    return true;
}

alert( isEmpty(schedule) ); // true

/*-------------------------------------------------------

ASÍ DARÍA FALSE

let schedule = {

    hola: "hola"
};

function isEmpty(obj){

    for(let key in obj){
        return false;
    }

    return true;
}

alert( isEmpty(schedule) );*/