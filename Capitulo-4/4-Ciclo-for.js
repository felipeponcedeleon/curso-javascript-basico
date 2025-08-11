
// Ciclo For
// Un ciclo for se utiliza para repetir un bloque de código un número específico de veces.
// Es especialmente útil cuando se conoce de antemano cuántas veces se debe repetir el bloque de código.
//
// Sintaxis:
for (inicialización; condición; actualización) {
    // Código a ejecutar
}

// Ejemplo: Imprimir números del 1 al 5
for (let numero = 1; numero <= 5; numero++) {
    console.log(numero);
}

// Ejemplo: Sumar números del 1 al 10
let suma = 0;
for (let contador = 1; contador <= 10; contador++) {
    suma += contador; // Suma el valor del contador a la suma total
}
console.log("La suma de los números del 1 al 10 es: " + suma);

// Ejemplo: Contar hacia atrás desde 10 hasta 1
for (let contadorRegresivo = 10; contadorRegresivo >= 1; contadorRegresivo--) {
    console.log(contadorRegresivo);
}
