"use strict"

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });

//Pintar el array
/*let divsito = document.getElementById("contenido");
divsito.innerHTML = JSON.stringify(disney);*/

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({ nombre: "Capitán Garfio", pelicula: "Peter Pan" });

//Meter al cocodrilo detrás del capitán, no olvides la película

//Obtener los personajes de la película de "Peter Pan" y mostrarlos uno a uno.
//alert(disney.find(disney => disney.pelicula == "Peter Pan"));

//Encontrar el índice de Campanilla.
alert("Campanilla está en la posición: " + disney.findIndex(disney => disney.nombre == "Campanilla"));

//Buscar al cocodrilo.

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.