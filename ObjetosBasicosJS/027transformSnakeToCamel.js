"use strict"

function camelize(str) {

    return str.split("_").map((pal, index) => index == 0 ? pal : pal[0].toUpperCase() + pal.slice(1)).join("");
}

alert(camelize("background_color") == 'backgroundColor');
alert(camelize("list_style_image") == 'listStyleImage');
alert(camelize("_webkit_transition") == 'WebkitTransition');

/* 
- split() para dividir el string en un array y transformarlo
- map() la posición 0 de cada palabra se pone en mayúscula, menos de la primera (.slice(1))
- los vuelvo a unir con join()

La primera letra de la última frase, está en mayúsculas porque antes de ella había una _
*/