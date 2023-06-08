const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2)
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2)
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
}

alert(`que operación quieres realizar?`);
let operación = parseInt(prompt(`1.Suma, 2.Resta, 3.Multiplicar, 4.Dividir`));

if (operación == 1) {
let num1 = parseInt(prompt(`que numero vas a sumar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = sumar(num1, num2);
    alert(`la suma de los dos numeros da un total de ${resultado}`);
}   else if (operación == 2) {
    let num1 = parseInt(prompt(`que numero vas a restar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = restar(num1, num2);
    alert(`la resta de los dos numeros da un total de ${resultado}`);
}   else if (operación == 3) {
    let num1 = parseInt(prompt(`que numero vas a multiplicar?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = multiplicar(num1, num2);
    alert(`la multiplicación de los dos numeros da un total de ${resultado}`);
}   else if (operación == 4) {
    let num1 = parseInt(prompt(`que numero vas a dividir?`));
    let num2 = parseInt(prompt(`y el otro numero es?`));
    let resultado = dividir(num1, num2);
    alert(`la división de los dos numeros da un total de ${resultado}`);
} else {
    alert(`recarga la pagina y pon un numero de las opciones`)
}