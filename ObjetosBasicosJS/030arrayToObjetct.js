"use strict"

let arr = [
    {id: "CR7", nombre: "Cristiano", pelicula: "GOAT"},
    {id: "HM7", nombre: "Son", pelicula: "Sonny"},
    {id: "SG7", nombre: "Gnabry", pelicula: "Chef"}
];

function groupById(array) {

    //.reduce devulve como resultado un único valor
    return array.reduce((obj, value) => {
        obj[value.id] = value;

    return obj;

    }, {})
}

let usersById = groupById(users);