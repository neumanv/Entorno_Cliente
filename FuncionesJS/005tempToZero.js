"use strict"

let min = prompt("Minutos:");
let sec = prompt("Segundos:");
contador(min, sec);

function contador(m, s){

    while(s > 59){
        m++;
    }
}




