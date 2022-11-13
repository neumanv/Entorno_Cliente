"use strict"

//cada vez que se actualize el programa el número baja
function getSecondsToTomorrow() {

    let hoy = new Date();
  
    //fecha para mañana, por eso el +1
    let man = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()+1);
  
    let ms = man - hoy; //resultado en milisegundos
    return Math.round(ms / 1000); //se pasa a segundos
  }

alert(getSecondsToTomorrow());