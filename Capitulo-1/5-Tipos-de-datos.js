
// Tipos de datos en JavaScript

// En JavaScript, los tipos de datos se dividen en dos categorías principales: primitivos y objetos.
// Los tipos de datos primitivos son aquellos que no son objetos y no tienen métodos.

// En JavaScript, los tipos de datos primitivos son inmutables, lo que significa que no se pueden cambiar
// una vez que se han creado.

// Los tipos de datos primitivos en JavaScript son los siguientes:
// 1. Number
// 2. String    
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// 1. Number: Representa números enteros o de punto flotante.
const age = 25; // Number
console.log(typeof age); // "number"

// 2. String: Representa una secuencia de caracteres.
const message = "Hello, World!"; // String
console.log(typeof message); // "string"

// 3. Boolean: Representa un valor verdadero o falso.
const isActive = false; // Boolean
console.log(typeof isActive); // "boolean"

// 4. Undefined: Representa una variable que ha sido declarada pero no ha sido asignada un valor.
let clientName; // Undefined
console.log(typeof clientName); // "undefined"

// 5. Null: Representa la ausencia intencional de cualquier valor u objeto.
const empty = null; // Null
console.log(typeof empty); // "object" (esto es un comportamiento histórico de JavaScript)

// 6. Symbol: Representa un identificador único y no es convertible a otros tipos de datos.
const uniqueId = Symbol('id'); // Symbol
console.log(typeof uniqueId); // "symbol"

// 7. BigInt: Representa números enteros grandes que no pueden ser representados por el tipo Number.
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
console.log(typeof bigNumber); // "bigint"

//------------------------------------------------------------------------------------------------------------------
// Tipos de datos no primitivos (o de referencia) en JavaScript son una colección de propiedades y métodos, 
// y pueden contener cualquier tipo de dato, incluyendo otros objetos.
// Los datos no primitivos son mutables, lo que significa que sus propiedades y métodos pueden ser modificados.

//  Los tipos de datos que son considerados objetos (o de referencia) en JavaScript incluyen:
// 1. Object
// 2. Function
// 3. Array
// 4. Date
// 5. RegExp
// 6. Error
// 7. Map
// 8. Set

// Este tipo de datos lo veremos en detalle en capítulos posteriores, pero aquí hay un breve resumen:
// 1. Object: Colección de propiedades y métodos.
const person = {
    name: "Alice",
    age: 30
    }; // Object
console.log(typeof person); // "object"

// 2. Function: Un bloque de código que puede ser llamado y ejecutado.
function greet() {
    console.log("Hello!");
} // Function

console.log(typeof greet); // "function"

// 3. Array: Una lista ordenada de valores.
const numbers = [1, 2, 3, 4, 5]; // Array
console.log(typeof numbers); // "object"

// 4. Date: Representa una fecha y hora.
const currentDate = new Date(); // Date
console.log(typeof currentDate); // "object"

// 5. RegExp: Representa una expresión regular.
const regex = /abc/; // RegExp
console.log(typeof regex); // "object"

// 6. Error: Representa un error en el código.
const error = new Error("Sucedió un error!"); // Error
console.log(typeof error); // "object"

// 7. Map: Una colección de pares clave-valor.
const map = new Map(); // Map
console.log(typeof map); // "object"

// 8. Set: Una colección de valores únicos.
const set = new Set([1, 2, 3]); // Set
console.log(typeof set); // "object"

// En resumen, JavaScript tiene una variedad de tipos de datos primitivos y no primitivos.
// Los primitivos son inmutables y representan valores simples, mientras que los objetos son 
// mutables y pueden contener múltiples valores y métodos.


