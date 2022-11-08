"use strict"

let schedule = {};

function isEmpty(sc){

    if(sc.length === 0){
        return true;
    }else{
        return false;
    }
}

alert( isEmpty(schedule) ); // true

/*-------------------------------------------------------*/
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false