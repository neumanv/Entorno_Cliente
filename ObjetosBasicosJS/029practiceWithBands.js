"use strict"

var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
//alert(grupos.filter(grupo => grupo.genero == "Heavy Metal"));     [Metallica, Heavy Metal]

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
//alert(grupos.find(grupo => grupo.nombre == "Cold Play"));       [Metallica, Heavy Metal]

//¿En qué posición del array se encuenta “Cold Play”?
alert("Cold Play está en la posición: " + grupos.findIndex(grupos => grupos.nombre == "Cold Play"));