//Punto 14
// Suma de una lista. Escribe una función que reciba una lista de números y devuelva la suma de todos ellos.
const prompt = require("prompt-sync")();

let arrayUsuario = prompt("Introduzca una lista de numeros separados por coma: ").split(",").map(parseFloat);

function sumaArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma = suma + array[i];
    }
    console.log(`La suma de los numeros de su array es: ${suma}`)
}

sumaArray(arrayUsuario)