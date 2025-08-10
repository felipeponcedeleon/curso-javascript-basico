
// Operadores Aritméticos en JavaScript
// Los operadores aritméticos son utilizados para realizar operaciones matemáticas básicas.
// Los operadores aritméticos más comunes son:
// 1- Suma: +
// 2- Resta: -
// 3- Multiplicación: *
// 4- División: /
// 5- Módulo: %
// 6- Incremento: ++
// 7- Decremento: --
// Estos operadores pueden ser utilizados con números, variables numéricas y expresiones que 
// resulten en un valor numérico.
// Ejemplos de uso:

let a = 10;
let b = 5;

let suma = a + b; // Suma

let resta = a - b; // Resta

let multiplicacion = a * b; // Multiplicación

let potencia = a ** b; // Potencia (a elevado a b)

let division = a / b; // División

let modulo = a % b; // Módulo

let incremento = ++a; // Incrementa y muestra el cambio de inmediato (incrementa el valor a 11)

let incrementoPost = a++; // Incrementa pero muestra el valor original de la variable (incrementa a 12 después de esta línea)

let decremento = --b; // Decremento (b se convierte en 4)

let decrementoPost = b--; // Decremento postfijo (muestra 4 y luego decrementa a 3)

console.log(`
    Suma: ${suma}, Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}, 
    Potencia: ${potencia}, Módulo: ${modulo}, Incremento: ${incremento}, Incremento Post: ${incrementoPost}, 
    Decremento: ${decremento}, Decremento Post: ${decrementoPost}
`);