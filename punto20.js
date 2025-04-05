//Punto 20
// Menú interactivo
//  Diseña un programa que muestre un menú al usuario con opciones como:
//  1. Calcular el cuadrado de un número.
//  2. Mostrar números pares entre dos valores.
//  3. Salir del programa.
//  Usa un bucle while para mantener el menú activo hasta que el usuario elija 
// salir
const prompt = require("prompt-sync")();

let counter = true;

function cuadrado(a){
    return a * a
}

function numerosPares(a, b){
    let pares = [];
    for (let i = a; i <= b; i++){
        if (i % 2 == 0){
            pares.push(i)
        }
    }
    return pares
}

while (counter == true) {
    console.log("Elija una se las siguientes opciones escribiendo un número:\n 1. Calcular el cuadrado de un número\n 2. Mostrar números pares entre dos valores.\n 3. Salir del programa.");

    let opcionUsuario = prompt();

    if (opcionUsuario == 1){
        let numUsuario = prompt("Introduzca el número del cual quiere saber su cuadrado: ");
        console.log("El cuadrado de su número es:", cuadrado(numUsuario))
    } else if (opcionUsuario == 2){
        let limInferior = prompt("Escriba el límite inferior de su intervalo: ");
        let limSuperior = prompt("Escriba el límite superior de su intervalo: ");

        console.log("Los números pares de su intervalo son:", numerosPares(limInferior, limSuperior));
    } else if (opcionUsuario == 3){
        console.log("¡Gracias por utilizar esta calculadora!");
        counter = false
    } else {
        console.log("¡Ingrese un valor válido!")
    }
}