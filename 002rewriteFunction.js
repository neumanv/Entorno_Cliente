"use strict"

function checkAge(age) {
    age > 18 ? true : confirm('¿Tienes permiso de tus padres?');
}

let edad1 = prompt("Edad:")
checkAge(edad1);

function checkAge2(age){
    if (age == 18 || age > 18) {
        return true;
      }else{
        return confirm('¿Tus padres te permitieron?');
      }
}

let edad2 = prompt("Edad:")
checkAge2(edad2);