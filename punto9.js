//Punto 9
// Adivina el número
// Genera un número aleatorio entre 1 y 10 (usa random.randint) y permite al usuario adivinarlo. *Da pistas como "muy bajo" o "muy alto".
const prompt = require("prompt-sync")();

let numAleatorio = ((1 + (10 - 1))*Math.random()).toFixed(0);

let numUsuario = Number(prompt("Introduzca un número: "));

console.log(numAleatorio)

while (numUsuario != numAleatorio){
    if (numUsuario <= numAleatorio - 5){
        console.log("Muy Bajo!");
    } else if (numUsuario >= numAleatorio + 5){
        console.log("Muy alto!");
    } else if (numUsuario <= numAleatorio - 2){
        console.log("Bajito...");
    } else if (numUsuario >= numAleatorio + 2){
        console.log("Altico...");
    } else if (numUsuario <= numAleatorio - 1){
        console.log("Un poquitito mas...");
    } else if (numUsuario >= numAleatorio + 1){
        console.log("Un poquitito menos...");
    };
    numUsuario = Number(prompt("Intente de nuevo: "));
};

console.log("¡Adivinaste!. Es correcto"); //Se imprime al finalizar el bucle. Si se pone dentro del bucle no se verá, ya que se finaliza antes de poder ejecutarlo.