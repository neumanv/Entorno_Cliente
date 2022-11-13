"use strict"

var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.

/*let metal = grupos.map(item => item.genero);
alert(metal.nombre);*/

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
//¿En qué posición del array se encuenta “Cold Play”?
alert("Cold Play está en la posición: " + grupos.findIndex(grupos => grupos.nombre == "Cold Play"));