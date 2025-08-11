
// Do While
// Un ciclo do while ejecuta un bloque de código al menos una vez y luego 
// repite el bloque mientras una condición sea verdadera.
// Se utiliza cuando se necesita que el bloque de código se ejecute al menos una vez,
// independientemente de si la condición es verdadera o falsa al inicio.
//
// En otras palabras, el bloque de código se ejecuta primero y luego se evalúa la condición.
// Si la condición es verdadera, el ciclo continuará ejecutándose; si es falsa, se detiene.
//
// Sintaxis:
//do {
    // Código a ejecutar
//} while (condición);

// Ejemplo: Imprimir números del 1 al 5
let numero = 1;
do {
    console.log(numero);
    numero++; // Incrementa el número en 1
} while (numero <= 5);

// Ejemplo: Sumar números del 1 al 10
let suma = 0;
let contador = 1;
do {
    suma += contador; // Suma el valor del contador a la suma total
    contador++; // Incrementa el contador en 1
} while (contador <= 10);

console.log("La suma de los números del 1 al 10 es: " + suma);

// Ejemplo: Contar hacia atrás desde 10 hasta 1
let contadorRegresivo = 10;
do {
    console.log(contadorRegresivo);
    contadorRegresivo--; // Decrementa el contador en 1 
} while (contadorRegresivo >= 1);