"use strict"

function checkAge(age) {
    if (age > 18) {
      return true;
    }/*else{
      return confirm('¿Tus padres te permitieron?');
    }*/
      
}
  
  document.write(checkAge(18));

/*Si es necesario el else. Si no lo ponemos y introducimos una edad menor o igual 18 
nos muestra por pantalla un undefined, al ponerlo se muestra un alert.

Si aún poniendo el else aunque tengamos menos de 18 años sigue mostrando
el true después del confirm()*/