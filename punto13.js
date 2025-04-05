//Punto 13
// Contar palabras. Crea una función que reciba una cadena y devuelva cuántas palabras contiene.
const prompt = require("prompt-sync")();

let cadenaUsuario = prompt("Ingrese una frase: ")

function contarPalabras(string){
    let cadenaSeparada = string.split(" ")
    let palabras = [];
    for (let i = 0; i < cadenaSeparada.length; i++){
        if (cadenaSeparada[i] != ""){
            palabras.push(cadenaSeparada[i])
        }
    }
    console.log(`Su frase tiene ${palabras.length} palabras.`)
};

contarPalabras(cadenaUsuario)