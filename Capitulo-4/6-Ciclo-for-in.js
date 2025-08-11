
// Ciclo For In
// Itera sobre las propiedades de un objeto
//
// Sintaxis
// for (variable in objeto) {
//   // código a ejecutar
// }

const persona = {
    id: 1,
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Santiago',
    profesion: 'Desarrollador',
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
// id: 1
// nombre: Juan 
// edad: 30
// ciudad: Santiago
// profesion: Desarrollador
// Nota: El ciclo for...in itera sobre todas las propiedades enumerables de un objeto, 
//      incluyendo las heredadas a través de la cadena de prototipos. 
// Si solo deseas iterar sobre las propiedades propias del objeto, puedes usar el método hasOwnProperty() dentro del ciclo.