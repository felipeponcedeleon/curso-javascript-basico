
// Objetos
// Son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// Los valores de las propiedades pueden ser de cualquier tipo de datos, incluyendo otros objetos, funciones
// y tipos primitivos como números, cadenas y booleanos.

// Sintaxis de un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Santiago',
    profesion: 'Desarrollador',
};

// Objeto con propiedades anidadas
// Puedes tener objetos dentro de otros objetos, lo que permite una estructura más compleja.
const usuario = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Santiago',
    profesion: 'Psicologa',
    direccion: {
        calle: 'Avenida Libertador',
        numero: 1234,
        comuna: 'Providencia',
        pais: 'Chile',
    },
    trabaja: true,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`);
    },
};

// Creando un objeto vacío
const objetoVacio = {};

// Creando un objeto que no pueda ser modificado
const objetoInmutable = Object.freeze({ 
    nombre: 'Carlos',
    edad: 40,
});

objetoInmutable.nombre = 'Pedro'; // No tendrá efecto, ya que el objeto es inmutable




