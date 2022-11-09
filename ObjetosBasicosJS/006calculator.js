"use strict"

let calculator = {
    read(){
        this.a = +prompt("Primer número:");
        this.b = +prompt("Segundo número:");
    },
    sum(){
        let suma = this.a + this.b;  //he tenido que crear esta variable para que al ver el resultado sea más visual
        return this.a + " + " + this.b + " = " + suma;
    },
    mul(){
        return this.a + " x " + this.b + " = " + this.a * this.b;
    } 
};

calculator.read();
document.write(calculator.sum() + "<br>");
document.write(calculator.mul());