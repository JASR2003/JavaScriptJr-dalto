class calculadora {
    constructor(){
    }
sumar = function(num1,num2) {
    return parseInt(num1) + parseInt(num2)
}
restar = function(num1,num2) {
    return parseInt(num1) - parseInt(num2)
}
multiplicar = function(num1,num2) {
    return parseInt(num1) * parseInt(num2)
}
dividir = function(num1,num2) {
    return parseInt(num1) / parseInt(num2)
}
potenciar(num, exp) {
    return Math.pow(num, exp);
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
};

const Calculadora = new calculadora();

alert(`que operación quieres realizar?`);
let operación = parseInt(prompt(`1.Suma, 2.Resta, 3.Multiplicar, 4.Dividir, 5:Potenciar, 6:Raiz Cuadrada, 7:Raiz Cubica`));

if (operación == 1) {
let num1 = parseInt(prompt(`que numero vas a sumar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = Calculadora.sumar(num1, num2);
    alert(`la suma de los dos numeros da un total de ${resultado}`);
}
else if (operación == 2) {
    let num1 = parseInt(prompt(`que numero vas a restar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = Calculadora.restar(num1, num2);
    alert(`la resta de los dos numeros da un total de ${resultado}`);
}
else if (operación == 3) {
    let num1 = parseInt(prompt(`que numero vas a multiplicar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = Calculadora.multiplicar(num1, num2);
    alert(`la multiplicación de los dos numeros da un total de ${resultado}`);
}
else if (operación == 4) {
    let num1 = parseInt(prompt(`que numero vas a dividir?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = Calculadora.dividir(num1, num2);
    alert(`la división de los dos numeros da un total de ${resultado}`);
}
else if (operación == 5) {
    let num = parseInt(prompt(`que numero vas a potenciar?`));
    let exp = parseInt(prompt(`cuantas veces lo harás?`));
    let resultado = Calculadora.potenciar(num, exp);
    alert(`al potenciar ${num} una cantidad de ${exp} veces da un total de ${resultado}`);
}
else if (operación == 6) {
    let num = parseInt(prompt(`a que numero le quieres sacar raiz cuadrada?`));
    let resultado = Calculadora.raizCuadrada(num);
    alert(`la raiz cuadrada de ${num} es ${resultado}`);
}
else if (operación == 7) {
    let num = parseInt(prompt(`a que numero le quieres sacar raiz cubica?`));
    let resultado = Calculadora.raizCubica(num);
    alert(`la raiz cubica de ${num} es ${resultado}`);
}
else {
    alert(`recarga la pagina y pon un numero de las opciones`)
}