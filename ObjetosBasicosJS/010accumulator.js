"use strict"

function Accumulator(startingValue) {

    this.value = startingValue;     //valor inicial
  
    this.read = function() {

        this.value += +prompt("Escribe un número:");        //se suman los dos números
    }
  }

let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value); // muestra la suma de estos valores