
// Listar proiedades de un objeto en JavaScript
// Este código muestra cómo listar y manipular propiedades de un objeto en JavaScript.
const persona = {
    nombre: 'Bob',
    edad: 33,
    ciudad: 'Santiago',
    profesion: 'Ingeniero',
    pais: 'Chile',
};

// Iterar sobre las propiedades de un objeto
console.log('-------------------------------------------');
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Agregando una función como propiedad del objeto
console.log('-------------------------------------------');
persona.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy de ${this.ciudad}.`);
};
persona.saludar(); // Hola, mi nombre es Juan y soy de Valparaíso.

// Usando Object.keys() para obtener las claves del objeto
console.log('-------------------------------------------');
console.log(Object.keys(persona)); // ['nombre', 'edad', 'ciudad', 'pais', 'saludar']

// Usando Object.values() para obtener los valores del objeto
console.log('-------------------------------------------');
console.log(Object.values(persona)); // ['Juan', 30, 'Valparaíso', 'Chile', ƒ]

// Usando Object.entries() para obtener las entradas del objeto
// Esta devuelve un array de arrays, donde cada sub-array contiene una clave y su valor correspondiente.
console.log('-------------------------------------------');
console.log(Object.entries(persona));
// [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Valparaíso'], ['pais', 'Chile'], ['saludar', ƒ]]

const carrito = {
  manzana: 3,
  banana: 2,
  naranja: 5
};

// Con for...of
for (const [fruta, cantidad] of Object.entries(carrito)) {
  console.log(`Hay ${cantidad} ${fruta}s`);
}
// Output:
// Hay 3 manzanas
// Hay 2 bananas
// Hay 5 naranjas

