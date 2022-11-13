"use strict"

let date = new Date(2012, 0, 3);

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0){      //no existe día 0, entonces se asigna al 7 (domingo)
        day = 7;
    }
  
    return day;
}

alert( getLocalDay(date) );