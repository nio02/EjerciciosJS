//Punto 17
// Invertir una cadena. Crea una función que reciba una cadena y devuelva la cadena invertida (por ejemplo, "hola" -> "aloh").
const prompt = require("prompt-sync")();

let cadenaUsuario = prompt("Escriba una palabra: ");

function invertirCadena(string){
    let inverso = "";
    for (i = 0; i < string.length; i++){
        inverso = string[i] + inverso
    }
    console.log(`Su cadena invertida es: ${inverso}`)
};

invertirCadena(cadenaUsuario)