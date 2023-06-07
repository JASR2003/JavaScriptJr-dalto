let free = false;

const validarCliente = (time) => {
    let edad = prompt(`Cual es tu edad?`);
    let nombre = prompt(`Cual es tu nombre`);
    if (edad >= 18) {
        if (time >= 2 && time < 6 && free == false) {
            alert(`son las ${time}, ${nombre} eres el primero en entrar despues de las 2, así que tambien tienes el paso gratis`)
            free = true;
        } else {
            alert(`son las ${time}, ${nombre} eres mayor de edad, así que tienes permitido el paso`)
        }
    } else if(edad < 18) {
        alert(`${nombre} eres menor de edad, así que no tienes permitido el paso`)
    } else {
        alert(`Coloca de nuevo la edad como número para permitirte o denegarte el paso, mientras va a estar negado`)
    }
}

validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);