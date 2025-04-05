//Punto 15
// Es palíndromo. Crea una función que determine si una palabra es un palíndromo (se lee igual al derecho y al revés). Da un mensaje, si no lo es.
const prompt = require("prompt-sync")();

let cadenaUsuario = prompt("Escriba una palabra: ");

function palindromo(string){
    let inverso = "";
    for (i = 0; i < string.length; i++){
        inverso = string[i] + inverso
    }
    console.log("Su palabra al reves es:",inverso)
    if (inverso == string){
        console.log("SI es palindromo")
    } else {
        console.log("NO es palindromo")
    }
};

palindromo(cadenaUsuario)
