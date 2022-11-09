"use strict"

function Calculator(){

    this.read = function(){
        this.a = +prompt("Primer número:");
        this.b = +prompt("Segundo número:");
    };

    this.sum = function(){
        let suma = this.a + this.b;  //he tenido que crear esta variable para que al ver el resultado sea más visual
        return this.a + " + " + this.b + " = " + suma;
    };

    this.mul = function(){
        return this.a + " x " + this.b + " = " + this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read();
document.write(calculator.sum() + "<br>");
document.write(calculator.mul());