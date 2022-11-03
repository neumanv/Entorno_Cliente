"use strict"

let frase = prompt("Escribe una frase:");
transformar(frase);

function transformar(fr){
    let fin = "";

    let array = fr.substr();

    for(let i = 0; i < array.length; i++){

        if(i % 2 == 0){
            fin += array[i].toUpperCase();
        }else{
            fin += array[i].toLowerCase();
        }
    }
    
    document.write(fin);
}