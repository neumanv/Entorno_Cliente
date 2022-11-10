"use strict"

let ladder = {

    step: 0,
    //el this. hace que se recoja el dato de la acción anterior
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep: function(){ 
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();