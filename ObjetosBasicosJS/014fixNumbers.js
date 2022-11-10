"use strict"

alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

/*Esto puede pasar por la impresición de los números, el 1.35 no es exactamente 1.35
y por ellos se incrementa al 1.4. Lo contrario con el 6.35, que disminuye su valor

SOLUCIÓN*/

/*Primero se multiplican los números por 10, se redondean con un sólo decimal y luego 
se dividen entre 10 para que vuelvan a su valor original con más exactitud*/
alert(Math.round(1.35 * 10)/10);
alert(Math.round(6.35 * 10)/10);