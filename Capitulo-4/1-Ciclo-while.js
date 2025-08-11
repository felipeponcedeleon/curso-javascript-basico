
// Ciclo While

// Un ciclo while ejecuta un bloque de código mientras una condición sea verdadera.
// Se utiliza cuando no se conoce de antemano cuántas veces se debe repetir el bloque de código.
// 
// Sintaxis:
while (condición) {  
    // Código a ejecutar
}

// Ejemplo: Imprimir números del 1 al 5
let numero = 1;
while (numero <= 5) {
    console.log(numero);
    numero++; // Incrementa el número en 1
}

// Ejemplo: Sumar números del 1 al 10
let suma = 0;
let contador = 1;
while (contador <= 10) {
    suma += contador; // Suma el valor del contador a la suma total
    contador++; // Incrementa el contador en 1
}

console.log("La suma de los números del 1 al 10 es: " + suma);

// Ejemplo: Contar hacia atrás desde 10 hasta 1
let contadorRegresivo = 10;
while (contadorRegresivo >= 1) {
    console.log(contadorRegresivo);
    contadorRegresivo--; // Decrementa el contador en 1 
}

// Ejemplo: Imprimir números pares del 1 al 20
let numeroPar = 2;
while (numeroPar <= 20) {
    console.log(numeroPar);
    numeroPar += 2; // Incrementa el número par en 2
}