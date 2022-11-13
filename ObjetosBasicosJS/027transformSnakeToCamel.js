"use strict"

function camelize(fr){

    fr.split("_").join(" ");    //elimino _
    fr.trim();     //elimino espacios en los extremos
    fr[0].toUpperCase() + fr.substring(1);      //la primera letra del texto en mayúscula
}

alert(camelize("background_color") == 'backgroundColor');
alert(camelize("list_style_image") == 'listStyleImage');
alert(camelize("_webkit_transition") == 'WebkitTransition');