
// Función Math
// Math es un objeto incorporado que proporciona propiedades y métodos para operaciones matemáticas.
// No es una función, sino un objeto estático: no necesitas crear instancias, se usa directamente.
//
// Sirve para realizar cálculos matemáticos complejos sin necesidad de implementar lógica manual. 
//
// Funciones mas utilizadas
//
// 1-  Math.PI
// 2-  Math.sqrt(x) / raiz cuadrada de 2
// 3-  Math.LN2 / Logaritmo natural de 2
// 4-  Math.random() / Devuelve un número aleatorio entre 0 y 1
// 5-  Math.floor(x) / Redondea hacia abajo al entero más cercano	
// 6-  Math.ceil(x)	/ Redondea hacia arriba al entero más cercano	
// 7-  Math.round(x)	/ Redondea al entero más cercano	Math.round(4.5)
// 8-  Math.max(a, b, c...)	Devuelve el mayor de los números	
// 9-  Math.min(a, b, c...)	Devuelve el menor de los números	
// 10- Math.pow(base, exp)	Potencia	
// 11- Math.abs(x)	Valor absoluto	
// 12- Math.trunc(x)	Elimina decimales 

// Math.PI
const pi = Math.PI;
console.log(pi);

// Math.SQRT2
const raiz = Math.sqrt(16);
console.log(raiz);

// Math.LN2
const logaritmo = Math.LN2;
console.log(logaritmo);

// Math.random
const numeroRandom = Math.random();
console.log(numeroRandom);

// Número entero aleatorio entre 1 y 15 (ambos incluidos)
// Math.random() - Genera un número decimal aleatorio entre 0 y 1
// * 15	- Multiplica ese decimal por 15, así el rango pasa a ser entre 0 y 14.999...
// Math.floor(...) - Redondea hacia abajo al entero más cercano
// + 1 - Le suma 1 para desplazar el rango de 0–14 a 1–15
const num = Math.floor(Math.random() * 15) + 1;
console.log(num); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 o 15

// Math.floor(x)
const redondeaHaciaAbajo = Math.floor(4.8);
console.log(redondeaHaciaAbajo);

// Math.ceil(x)
const redondeaHaciaArriba = Math.ceil(4.8);
console.log(redondeaHaciaArriba);

// Math.round(x)
const numeroMasCercano = Math.round(4.6);
console.log(numeroMasCercano);

// Math.max(a, b, c...)
const mayor = Math.max(3, 6, 1);
console.log(mayor);

// Math.min(a, b, c...)
const menor = Math.min(3, 6, 1);
console.log(menor);

// Math.pow(base, exp)
const potencia = Math.pow(4, 2);
console.log(potencia);

// Math.abs(x)
// El valor absoluto de un número es su magnitud o distancia desde cero en la recta numérica,
// sin importar su signo. En otras palabras, es siempre un valor positivo o cero.
const valorAbsoluto = Math.abs(11);
console.log(valorAbsoluto);

// Math.trunc(x)
const truncar = Math.trunc(1.234);
console.log(truncar);