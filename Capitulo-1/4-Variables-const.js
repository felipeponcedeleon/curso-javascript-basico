
// Variables const
// Las variables declaradas con const son constantes, lo que significa que no pueden ser reasignadas
// ni redeclaradas en el mismo ámbito. Esto significa que una vez que se asigna un valor a una variable const,
// no se puede cambiar su valor ni volver a declararla con el mismo nombre en el mismo ámbito.
const username = "John";
const age = 30;
// Javascript no permite redeclarar variables const en el mismo ámbito
// const username = "Jane"; // Esto causaría un error   
// No puedes reasignar el valor de una variable const
// username = "Jane"; // Esto causaría un error, ya que las variables const no pueden ser reasignadas
// age = 25; // Esto causaría un error, ya que las variables const no pueden ser reasignadas    

// Otra característica de las variables const es que deben ser inicializadas con un valor al momento de su declaración.
// No puedes declarar una variable const sin asignarle un valor.
// const city; // Esto causaría un error, ya que las variables const deben ser inicializadas con un valor
// console.log(city); // Esto causaría un error, ya que la variable city no ha sido declarada
const city = "New York"; // Declarar la variable y asignarle un valor
console.log(city); // New York
const price = 100; // Declarar la variable y asignarle un valor
console.log(price); // 100

// Las variables const también tienen un ámbito de bloque, lo que significa que solo son accesibles dentro del bloque en el que se declaran.