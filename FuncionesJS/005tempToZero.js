"use strict"

let min = prompt("Minutos:");
let sec = prompt("Segundos:");
contador(min, sec);

function contador(m, s){

    /*for(let i = 0; i < 59; i--){
        m++;
        s = 0;
    }
        
    document.write(m + ":" + s);*/

    let tiempo = 1000;  //1s en ms

    let intervalo = window.setInterval(function() {

    if(s == 0){
        m -= 1;
    }
    document.write( + m + ":" + s +"\n");
    s--;
    
    // compruebo que llegue a 0
    if (s === -1) {
        // cancelo en intervalo
        window.clearInterval(intervalo);
    }
    }, tiempo);
}
