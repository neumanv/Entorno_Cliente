alert( 9999999999999999 );

/*Se muestra 10000000000000000 por que los literales numéricos con valores absolutos iguales a 2^53 o 
superiores son demasiado grandes para representarlos de forma precisa como enteros

SOLUCIÓN*/

let bd = BigInt("9999999999999999");
alert(bd);

/*Con una variable BigInt si lo puede mostrar*/