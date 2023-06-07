//Bloque de codigo para poder reutilizar

//la forma clásica es poner la palabra function, nombre, parametros y bloque

function funcionClasica(params) {
}

//Tambien se puede hacer guardandola en una variable

const funcionVar = function() {
}

// y tambien se puede hacer con el metodo de flecha

const funcionFlecha = () => {
}

//Return: nos devuelve un valor

function saludar() {
    alert('hola');
    return 'elemento retornado'
}

let saludo = saludar();

alert(saludo); // va a tirar el alert pero lo que va a escribir en el document será el valor del return y el return es el ultimo elemento que muestra, si hay algo despues del return no se va a ejecutar