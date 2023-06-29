// Transformadores

let nombres = ['josé', 'manolo', 'eustaquio']
console.log(nombres);

// pop() -- elimina el ultimo elemento de un array

nombres.pop(); // elimina Eustaquio de los nombres ya que borra el ultimo elemento del array
console.log(nombres);

// shift() -- elimina el primer elemento de un array

nombres.shift(); // elimina josé de los nombres ya que borra el primer elemento del array
console.log(nombres);

// push() -- añade un nuevo elemento al final de la lista

nombres.push('eustaquio'); // añade eustquio de los nombres ya que agrega al ultimo elemento del array
console.log(nombres);

// unshift() -- agrega uno o más elementos al inicio del array,y devuelve la nueva longitud del array

nombres.unshift('josé'); // añade josé de los nombres ya que agrega al priemr elemento del array
console.log(nombres);

// reverse() -- invierte el orden de los elementos de un array

nombres.reverse(); //los cambia el orden
console.log(nombres);
nombres.reverse();
console.log(nombres);

// sort() -- ordena los elementos de un array localmente y los devuelve ordenados

console.log(nombres.sort()); // los ordena de menos a más en numeros y por orden alfabetico en palabras

// splice() -- cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

nombres.push('alfredo','tiago', 'mateo');
console.log(nombres);

nombres.splice(1, 3); // (desde donde empieza,cuantos vas a eliminar(si se ponen 0 es para empezar a agregar desde la posición del primer parametro), si se le pasa un tercer o más argumentos es lo que va a reemplazar);
console.log(nombres);

// Accesores

let nombresJoin = nombres.join(' - '); // como el toString los convierte en string pero puedes añadir un elemento entre cada posicion del array
console.log(nombresJoin); // josé - manolo - eustaquio

let nombresSlice = nombres.slice(2,3); // retorna mateo ya que empieza en la posicion 2 y no cuenta la 3
console.log(nombresSlice);

// Repeticion

//filter() en JavaScript selecciona elementos de un array que cumplen ciertas condiciones y los devuelve en un nuevo array. Es útil para procesar grandes cantidades de datos y extraer solo los elementos que cumplen ciertos criterios.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(function(number) {
  return number % 2 !== 0;
});

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]