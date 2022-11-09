"use strict"

function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function() {

        this.value = +prompt("Introduce un número: ");
    };
}

let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value + accumulator.value); // muestra la suma de estos valores