"use strict"

function random(min, max) {

    //sumo el min (que es 1) al número aleatorio entre 0-1 para que me salga un decimal de 1
    return min + Math.random();
}

document.write(random(1, 5));