"use strict"

function makeUser() {

    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
alert(user.ref.name); // ¿Cuál es el resultado?

/*No muestra nada, porque el atributo ref tiene un valor desconocido, el "this"
sólo sirve para acceder a un objeto y no para dar valor a un atributo*/