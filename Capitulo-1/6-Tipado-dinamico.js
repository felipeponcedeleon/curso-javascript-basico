
// Tipado dinámico en JavaScript
//------------------------------------------------------------------------------------------------------------------
/* JavaScript es un lenguaje de tipado dinámico, lo que significa que las variables pueden cambiar de tipo en 
tiempo de ejecución. Esto permite una gran flexibilidad, pero también puede llevar a errores si no se
maneja adecuadamente. */

// A continuación, se muestran ejemplos de cómo las variables pueden cambiar de tipo:

let variable = 42; // Inicialmente un número
console.log(typeof variable); // "number"

variable = "Ahora soy una cadena"; // Cambiando a una cadena
console.log(typeof variable); // "string"

variable = true; // Cambiando a un booleano
console.log(typeof variable); // "boolean"

variable = { key: "valor" }; // Cambiando a un objeto
console.log(typeof variable); // "object"

variable = [1, 2, 3]; // Cambiando a un array
console.log(typeof variable); // "object" (los arrays son objetos en JavaScript)

variable = null; // Cambiando a null
console.log(typeof variable); // "object" (comportamiento histórico de JavaScript)

variable = undefined; // Cambiando a undefined
console.log(typeof variable); // "undefined"

//------------------------------------------------------------------------------------------------------------------
/* En JavaScript, el tipo de una variable se determina en tiempo de ejecución, lo que permite que una variable pueda 
contener diferentes tipos de datos a lo largo de su vida útil.
Esto es diferente a los lenguajes de tipado estático, donde el tipo de una variable debe ser declarado explícitamente y 
no puede cambiar una vez definido.
Este enfoque proporciona flexibilidad, pero también requiere que los desarrolladores sean cuidadosos para evitar
errores relacionados con el tipo de datos, como intentar realizar operaciones en tipos incompatibles.
Por ejemplo, intentar sumar un número y una cadena resultará en una concatenación de la cadena con el número 
convertido a cadena:*/

let num = 10;
let str = "20";
let result = num + str; // Esto no dará error, pero resultará en "1020" como resultado de la concatenación
console.log(result); // "1020"

// En resumen, el tipado dinámico de JavaScript permite que las variables cambien de tipo en tiempo de ejecución,
// lo que proporciona flexibilidad pero también requiere atención para evitar errores de tipo.
