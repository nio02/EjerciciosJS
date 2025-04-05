//Punto 18
// Frecuencia de letras. Escribe un programa que cuente la cantidad de veces que aparece cada letra en una  palabra dada por el usuario.
const prompt = require("prompt-sync")();

let cadenaUsuario = prompt("Escriba una palabra: ").toLowerCase();

function repeticiones(string, valor){
    let cuenta = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == valor){
            cuenta += 1
        }
    };
    return cuenta;
}

function contarLetras(string){
    let totalLetras = {};
    for (i = 0; i < string.length; i++){
        totalLetras[string[i]] = repeticiones(string, string[i]);
    };
    return totalLetras
};

const resumen = contarLetras(cadenaUsuario);
console.log(`Las letras de su palabra y las veces que se repiten son las siguientes:`);
for (let clave in resumen){
    console.log(`Letra: ${clave} - Repeticiones: ${resumen[clave]}`)
};