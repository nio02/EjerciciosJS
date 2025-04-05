//Punto 6
// Números del 1 al N Pide al usuario un número N e imprime todos los números del 1 al N usando un while.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Introduzca un numero: "));

let inicio = 1;

while (inicio <= numero){
    console.log(inicio);
    inicio += 1
}