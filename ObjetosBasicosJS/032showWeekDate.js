"use strict"

let date = new Date(2012, 0, 3);

function getWeekDay(date) {

    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];     //dependiendo el día que sea muestra la posición del array que corresponde
}

alert( getWeekDay(date) );