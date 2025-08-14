
// String
//  Es un objeto incorporado que representa y manipula cadenas de texto.
//
// Sirve para:
// - Crear y transformar texto.
// - Buscar, extraer, reemplazar o dividir sub-cadenas.
// - Dar formato (mayúsculas, minúsculas, espacios, etc.).
// - Validar longitud y contenido.
//
// Funciones más utilizadas
//
// 1-  .length (propiedad) / "Hola".length → 4
// 2-  .toLowerCase() / Minúsculas "HOLA".toLowerCase() → "hola"
// 3-  .toUpperCase() /	Mayúsculas "hola".toUpperCase() → "HOLA"
// 4-  .trim() / Quita espacios extremos "  hola  ".trim() → "hola"
// 5-  .includes(sub) / ¿Contiene sub-cadena? "casa".includes("as") → true
// 6-  .startsWith(sub) / ¿Empieza por sub-cadena?	"JavaScript".startsWith("Java") → true
// 7-  .endsWith(sub) / ¿Termina por sub-cadena?	"archivo.jpg".endsWith(".jpg") → true
// 8-  .indexOf(sub) / Índice de la 1ª aparición (-1 si no)	"pera manzana".indexOf("man") → 5
// 9-  .slice(inicio, fin) / Extrae porción (sin fin incluido)	"JavaScript".slice(0, 4) → "Java"
// 10- .substring(inicio, fin) / Similar a slice (acepta índices invertidos) "JavaScript".substring(4, 0) → "Java"
// 11- .replace(busca, nuevo) / Reemplaza 1ª coincidencia "hola mundo".replace("mundo", "Juan") → "hola Juan"
// 12- .split(separador) / Divide en array	"a,b,c".split(",") → ["a","b","c"]
// 13- .repeat(n) /	Repite n veces	"ha".repeat(3) → "hahaha"
// 14- .charAt(i) / Carácter en posición i

// .length
const frase = "¡Hola, mundo!";
console.log(frase.length); // 13

// .toLowerCase() 
const frase2 = "HOLA, MUNDO!";
const minuscula = frase2.toLocaleLowerCase();
console.log(minuscula);

// .toUpperCase() 
const frase3 = "¡Hola, mundo!";
const mayuscula = frase3.toUpperCase();
console.log(mayuscula);

// .trim()
const email = "  USUARIO@Ejemplo.COM  ";
const emailLimpio = email.trim().toLowerCase();
console.log(emailLimpio); // "usuario@ejemplo.com"

// .includes(sub)
const frase4 = "El gato come pescado";
const palabra = "gato";

if (frase4.includes(palabra)) {
  console.log(`✅ La palabra "${palabra}" está en la frase.`);
} else {
  console.log(`❌ La palabra "${palabra}" NO está en la frase.`);
}

// .startsWith(sub)       
const palabra2 = "JavaScript";
console.log(palabra2.startsWith("Java")); // true
console.log(palabra2.startsWith("Script")); // false

// .endsWith(sub)
console.log(palabra2.endsWith("Java")); // false
console.log(palabra2.endsWith("Script")); // true

// .indexOf(sub) 
const texto = "pera manzana uva";
console.log(texto.indexOf("manzana")); // 5
console.log(texto.indexOf("kiwi"));    // -1

// .slice
const palabra3 = "JavaScript";
console.log(palabra3.slice(0, 4)); // "Java"

// .substring(inicio, fin) "de atrás para adelante, lo contrario de slice"
const palabra4 = "JavaScript";
console.log(palabra4.substring(4, 0)); // "Java"

// .replace(busca, nuevo)
const texto2 = "Hola mundo";
console.log(texto2.replace("mundo", "JavaScript")); // "Hola JavaScript"

// .split(separador)
const colores = "rojo,verde,azul";
console.log(colores.split(",")); // ["rojo", "verde", "azul"]

// .repeat(n)
const cadena2 = "ja";
const repetir = cadena2.repeat(3);
console.log(repetir);

// .charAt(i)
// Parte desde la posición cero
const palabra5 = "Hola";
console.log(palabra5.charAt(2)); // "l"