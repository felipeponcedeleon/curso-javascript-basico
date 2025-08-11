
// For of
// El ciclo for...of se utiliza para iterar sobre objetos iterables como arrays, strings, mapas, conjuntos, etc.
// A diferencia del ciclo for tradicional, no se necesita un contador explícito.

// Sintaxis:
//for (const elemento of iterable) {
    // Código a ejecutar con cada elemento
//}   

// Ejemplo: Imprimir elementos de un array
const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
    console.log(fruta);
}

// Mismo ejercicio pero con while
let i = 0;
while (i < frutas.length) {
    console.log(frutas[i]);
    i++;
}

// Ejemplo: Imprimir caracteres de una cadena
const mensaje = "Hola";
for (const caracter of mensaje) {
    console.log(caracter);
}

// Ejemplo: Sumar valores de un array
const numeros = [1, 2, 3, 4, 5];    
let suma = 0;
for (const numero of numeros) {
    suma += numero; // Suma el valor del número a la suma total
} 

console.log("La suma de los números es: " + suma);
