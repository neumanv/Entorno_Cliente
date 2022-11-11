"use strict"

function checkSpam(str) {

    let texto = str.toLowerCase();      //para que todo sea igual y no complicarnos
    return texto.includes("viagra") || texto.includes("xxx");       //.includes() sirve para ver si contiene lo que hay en el ()
}
  
alert(checkSpam('compra ViAgRA ahora')) == true;
alert(checkSpam('xxxxx gratis')) == true;
alert(checkSpam("coneja inocente")) == false;