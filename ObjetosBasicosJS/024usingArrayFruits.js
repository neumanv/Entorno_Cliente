"use strict"

var fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("Cereza");

/*  También podría añadirse con:

    fruits[3] = "Cereza";
*/

alert("Añadir al principio: " + fruits);

//Añadimos melocotón al final
fruits.push("Melocotón");
alert("Añadir al final: " + fruits);

//Mostrar el array elemento a elemento con for clásico
for(let i = 0; i < fruits.length; i++){
    alert(fruits[i]);
}

//Eliminamos el primer elemento.
fruits.shift();
alert("Eliminar 1er elemento: " + fruits);

//Eliminamos el último elemento.
fruits.pop();
alert("Eliminar último elemento: " + fruits);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for(let fruta of fruits){
    alert(fruta);
}