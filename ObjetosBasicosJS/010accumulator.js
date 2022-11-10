"use strict"

function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function() {

        let x = 2
        let suma = 0;

        while (x == 2){

            this.value = +prompt("Escribe un número:");
            suma += this.value;
            x = x + 1;
        }
    };
}

let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value); // muestra la suma de estos valores