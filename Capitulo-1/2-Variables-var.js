
// Las variables tipo Var son variables que pueden cambiar su valor a lo largo del tiempo.
// Se pueden declarar con la palabra clave 'var' y son accesibles en todo el ámbito del programa.
var nombre = "Juan"; // Declaración de una variable var
console.log(nombre); // Imprime: Juan

// Se puede cambiar el valor de la variable en cualquier momento
nombre = "Pedro"; // Cambio de valor
console.log(nombre); // Imprime: Pedro

// Las variables var pueden ser redeclaradas
var nombre = "Ana"; // Redeclaración de la variable
console.log(nombre); // Imprime: Ana

// Las variables var son accesibles en todo el ámbito del programa, incluso dentro de funciones
function saludar() {
    var saludo = "Hola, " + nombre; // Accede a la variable var declarada fuera de la función
    console.log(saludo); // Imprime: Hola, Ana
}   
saludar(); // Llama a la función para mostrar el saludo

// Las variables var también pueden ser declaradas sin un valor inicial
var edad; // Declaración de una variable var sin valor inicial

// Las variables var pueden ser utilizadas antes de su declaración debido al hoisting
console.log(edad); // Imprime: undefined (debido al hoisting)   

// El hoisting permite que las variables var sean elevadas al inicio de su ámbito
// y se puedan utilizar antes de su declaración, aunque su valor será undefined hasta que se asigne uno.

// Asignamos un valor a la variable edad
var edad = 30; // Declaración de la variable var
console.log(edad); // Imprime: 30

// Es importante tener en cuenta que el uso de var puede llevar a confusiones debido a su ámbito global
// y su comportamiento de hoisting. Por ello, se recomienda utilizar let o const en su lugar
// en la mayoría de los casos para evitar problemas de alcance y redeclaración. 
// Sin embargo, var sigue siendo útil en ciertos contextos donde se necesita un ámbito global.
// En resumen, las variables var son flexibles y permiten cambios de valor, pero su uso 
// debe ser cuidadoso para evitar errores y confusiones en el código.
// Se recomienda utilizar let o const para una mejor gestión de variables en el código moderno.