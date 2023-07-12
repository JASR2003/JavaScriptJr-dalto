// console.count() - registra el numero de veces que se llama a count(). esta función toma como argumento opcional una etiqueta

console.count();
console.count();
console.count();
console.count();
console.count();
console.count(); //default: 6 (por cada count se suma 1)

// console.countReset() - resetea el contador de console.count()

console.countReset() // no devuelve nada pero el count queda en 0

console.count();
console.count();
console.count();
console.count();
console.count();
console.count(); //default: 6 (por cada count se suma 1 y con el reset ya no seria 12 si no que vuelve a ser 6)
