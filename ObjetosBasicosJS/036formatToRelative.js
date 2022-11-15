"use strict"

function formatDate(date) {

    let diff = new Date() - date;
  
    if (diff < 1000){       //1000ms = 1s

        return "ahora mismo";
    }
  
    let sec = Math.floor(diff / 1000);      //resultado en segundos
  
    if (sec < 60) {

        return "hace " + sec + " segundos";
    }
  
    let min = Math.floor(diff / 60000);     //resultado en minutos

    if (min < 60){

        return "hace " + min + " minutos";
    }
  
    let d = date;

    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes()
    ].map(component => component.slice(-2)); //2 últimos dígitos de cada componente
  
    // une los componentes para formar una única fecha
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
  
  alert( formatDate(new Date(new Date - 1)) );
  alert( formatDate(new Date(new Date - 30 * 1000)) );
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
  alert( formatDate(new Date(new Date - 86400 * 1000)) );