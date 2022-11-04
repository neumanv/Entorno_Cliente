"use strict"

let frase = prompt("Escribe una frase: ");
transformar(frase);

function transformar(fr){
    let fin = "";
    let cambio = fr.replace("c", "k");

    let array = cambio.substr();

    for(let i = 0; i < array.length; i++){

        /*if(array[i] -1 == array.match("aeiou")){
            array.push("h");
            array.push("h");        //AÑADIR h SI TERMINA EN VOCAL
            array.push("h");
        }*/

        if(i % 2 == 0){
            //posición par mayúscula
            fin += array[i].toUpperCase();
        }else{
            fin += array[i].toLowerCase();
        }
    }
    
    document.write(fin);
}