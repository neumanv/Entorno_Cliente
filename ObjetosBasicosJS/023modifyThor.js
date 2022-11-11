"use strict"

let thor = "Thor es el hijo de Odín";

document.write("Largo de la cadena: " + thor.length + "<br>");
//---------- muestra "true" porque si se encuentra --------------------------------------
document.write("Encontrar la letra o: " + thor.includes("o") + "<br>");
document.write("Encontrar la letra O (mayúscula): " + thor.includes("O") + "<br>");
//-------------------------------------------------------------------------------------------------------------------
document.write("Encontrar el carácter que ocupa la posición 3: " + thor.charAt(3) + "<br>");
document.write("¿Qué carácter ocupa la posición 1?: " + thor.charAt(1) + "<br>");
document.write("Trocea la cadena usando los espacios en blanco: " + thor.split(" ").join("") + "<br>");
document.write("Reemplaza Thor por Loki: " + thor.replace("Thor", "Loki") + "<br>");
document.write("Recorta la cadena para que devuelva la palabra Odín: " + thor.slice(-4) + "<br>");
document.write("¿Puedes encontrar la letra a? Demuéstralo: " + thor.search("a") + "<br>"); //no está, por eso muestra -1
document.write("Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11): " + thor.replace("O", "o"));