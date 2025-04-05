//Punto 11
// Área de un triángulo. Crea una función que calcule el área de un triángulo dados su base y altura.
const prompt = require("prompt-sync")();

let baseUsuario = Number(prompt("Introduzca la base de su triangulo: "));
let alturaUsuario = Number(prompt("Introduzca la altura de su triangulo: "));

function areaTriangulo(base, altura){
    console.log("El área del triángulo es:", (base * altura) / 2)
};

areaTriangulo(baseUsuario,alturaUsuario)