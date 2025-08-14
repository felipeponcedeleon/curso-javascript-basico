
// Trabajando con objetos en JavaScript
// Puedes crear, acceder, modificar y eliminar propiedades de un objeto de manera dinámica.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Santiago',
    profesion: 'Desarrollador',
};

console.log(persona);

// Acceder a las propiedades de un objeto
console.log('-------------------------------------------');
console.log(persona.nombre); // Juan
console.log(persona['edad']); // 30

// Modificar una propiedad
console.log('-------------------------------------------');
persona.ciudad = 'Valparaíso';
console.log(persona.ciudad); // Valparaíso

// Agregar una nueva propiedad
console.log('-------------------------------------------');
persona.pais = 'Chile';
console.log(persona.pais); // Chile

// Eliminar una propiedad
console.log('-------------------------------------------');
delete persona.profesion;
console.log(persona.profesion); // undefined

// Verificar si una propiedad existe
console.log('-------------------------------------------');
console.log('nombre' in persona); // true
console.log('profesion' in persona); // false
