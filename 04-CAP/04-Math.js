// sqrt() devuelve la raiz cuadrada positiva de un numero

console.log(Math.sqrt(25)); // devuelve 5

// cbrt() devuelve la raiz cubica positiva de un numero

console.log(Math.cbrt(25)); // devuelve 2.924017738212866

// max() devuelve el mayor de cero o más numeros

console.log(Math.max(2,4,6,12,15,767,3,2)); // devuelve 767 ya que es numero más grande

// min() devuelve el menor de cero o más numeros

console.log(Math.min(2,4,6,12,15,767,3,2)); // devuelve 2 ya que es numero más pequeño

// random() devuelve un numero aleatorio entre el 0 y 1

console.log(Math.random()); // devuelve un numero entre 0 y 1

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
} // En el caso de esta función es para poner un parametro de minimo y maximo numero

console.log("homero " + getRandomNumber(50,100)); // va a devolver un numero entre 50 y 100