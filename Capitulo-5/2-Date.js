
// Función Date
// Date es un objeto incorporado que permite trabajar con fechas y horas.
//
// Algunas funciones:
// 1- Obtener la fecha/hora actual
// 2- Crear fechas específicas
// 3- Extraer o modificar partes (año, mes, día, hora, etc.)
// 4- Comparar fechas
// 5- Dar formato a fechas
//
// Sirve para:
// - Mostrar la fecha actual en una web
// - Calcular edades
// - Validar fechas
// - Crear temporizadores
// - Calcular duraciones
//
// Funciones más utilizadas
//
// 1-  .getFullYear() / Año (4 dígitos)	
// 2-  .getMonth() / Mes (0-11)	
// 3-  .getDate() / Día del mes (1-31)	
// 4-  .getDay() / Día de la semana (0-6)	
// 5-  .getHours() / Hora (0-23)	
// 6-  .getMinutes() / Minutos (0-59)	
// 7-  .getSeconds() / Segundos (0-59)	
// 8-  .getTime() / Milisegundos desde 1970	1723644645000
// 9-  .toLocaleDateString() / Fecha formateada	"14/8/2025"
// 10- .toLocaleTimeString() / Hora formateada	"15:30:45

// Llamando a Date()
const fecha = new Date();

// Fecha actual
console.log(fecha);

// Fecha especifica
const anioNuevo = new Date(2025, 12, 31);
console.log(anioNuevo);

// .getFullYear()
const anio = fecha.getFullYear();
console.log(anio);

// .getMonth()
const mes = fecha.getMonth();
console.log(mes);

// .getDate()
const diaDelMes = fecha.getDate();
console.log(diaDelMes);

// .getDay()
const diaDeLaSemana = fecha.getDay();
console.log(diaDeLaSemana);

// .getHours()
const hora = fecha.getHours();
console.log(hora);

// .getMinutes()
const minutos = fecha.getMinutes();
console.log(minutos);

// .getSeconds()
const segundos = fecha.getSeconds();
console.log(segundos);

// .getTime()
// Cuantos milisegundos han pasado desde 1970
const milisegundosTotales = fecha.getTime();
console.log(milisegundosTotales);

// .toLocaleDateString() 
// Fecha formateada
const fechaFormateada = fecha.toLocaleDateString();
console.log(fechaFormateada);

const fechaFormateadaEs = fecha.toLocaleDateString('es-ES');
console.log(fechaFormateadaEs);

// .toLocaleTimeString()
// Hora formateada
const horaFormateada = fecha.toLocaleTimeString();
console.log(horaFormateada);

// Calcular edad 
const nacimiento = new Date('2007-01-10');
const hoy = new Date();
const edad = hoy.getFullYear() - nacimiento.getFullYear();
console.log(`Tienes ${edad} años`); // Tienes 18 años

// formato Español
const fechaDos = new Date();
const opciones = { 
    weekday: 'long', // long: nombre del día de semana -> jueves
    year: 'numeric', // Numeric: año larto -> 2025 
    month: 'long',  // long: nombre del mes -> agosto
    day: 'numeric' // Numeric: Día del mes - 14
};
console.log(fechaDos.toLocaleDateString('es-ES', opciones)); 
// "jueves, 14 de agosto de 2025"

// Comparar fechas
const fecha1 = new Date('2025-08-14');
const fecha2 = new Date('2025-08-20');
console.log(fecha1 < fecha2); // true

// timestamp
const timestamp = Date.now(); // Milisegundos actuales
console.log(timestamp); 