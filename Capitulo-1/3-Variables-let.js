
// Variables Let

// Las variables declaradas con let pueden ser reasignadas, pero no redeclaradas en el mismo ámbito.
// Esto significa que puedes cambiar el valor de una variable let, pero no puedes volver a declararla 
// con el mismo nombre en el mismo ámbito.

let username = "John";
let age = 30;

// Javascript no permite redeclarar variables let en el mismo ámbito
// let username = "Jane"; // Esto causaría un error

// Puedes reasignar el valor de una variable let
username = "Jane"; // Reasignar el valor de la variable
age = 25; // Reasignar el valor de la variable

// Javascript es un lenguaje de tipado dinámico, por lo que no es necesario especificar 
// el tipo de dato al declarar una variable.

// Javascript es un lenguaje de tipado dinámico, esto quiere decir que lo que define su 
// tipo de dato es el valor que se le asigna a la variable, no la declaración de la variable en sí.

console.log(username); // John
console.log(age); // 30

// Otra caracteristica de las variables con let es que pueden inicializarse sin un valor,
// pero no se les puede asignar un valor antes de ser declaradas.
let city; // Declarar la variable sin asignarle un valor
console.log(city); // undefined

let price;
console.log(price); // undefined

price = 100; // Asignar un valor a la variable
console.log(price); // 100

// Las variables let tienen un ámbito de bloque, lo que significa que solo son accesibles dentro del bloque en el que se declaran.

// Camel Case
// Es una convención de nomenclatura que consiste en escribir el primer nombre en minúscula y cada 
// palabra subsiguiente con la primera letra en mayúscula.
let firstName = "John"; // Correcto
let FirstName = "Jane"; // Incorrecto, ya que la primera letra es mayúscula
let lastName = "Doe"; // Correcto
let LastName = "Smith"; // Incorrecto, ya que la primera letra es mayúscula

// Snake Case
// Es una convención de nomenclatura que consiste en escribir todas las letras en minúscula y separar las palabras con guiones bajos.
let first_name = "John"; // Correcto
let First_name = "Jane"; // Incorrecto, ya que la primera letra es mayúscula
let last_name = "Doe"; // Correcto
let Last_name = "Smith"; // Incorrecto, ya que la primera letra es mayúscula