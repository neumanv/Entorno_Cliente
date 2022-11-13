"use strict"

function getLastDayOfMonth(an, mes){

    //el día será 0, para que así el programa interprete que es el último día del mes
    let date = new Date(an, mes + 1, 0);
    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));