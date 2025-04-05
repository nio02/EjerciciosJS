//Punto 8
// Sumar números pares. Usa un for para sumar todos los números pares entre 1 y 100.

let suma = 0;

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        suma = suma + i
    }
};

console.log("La suma de los pares del 1 hasta el 100 es:", suma)