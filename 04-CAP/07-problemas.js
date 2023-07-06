const buttonAsk = document.getElementById("btn-ask");
const message = document.getElementById("mensaje");

let materiasClase = {
    fisica: ["jorge", "maria", "daniela", "sthephany", "messi", "homero"],
    quimica: ["jose", "daniel", "angel", "jorge", "maria", "daniela", "sthephany"],
    matematicas: ["jose", "daniel", "angel", "jorge", "maria", "daniela", "sthephany", "messi", "homero"],
    programacion: ["jose", "angel", "jorge", "maria", "daniela", "messi", "homero"],
}

const inscribir = ()=>{
    let alumno = prompt("como se llama la persona a inscribir?");
    let materia = prompt("dime la clase a la que te quieres inscribir");
    let alumnosActuales = materiasClase[materia];

    if (alumnosActuales.length > 20) {
        let mensaje = document.createElement("p");
        mensaje.textContent = `Lo siento, desafortunadamente ${alumno} no podrá ser inscrito en ${materia}, esto se debe a que la capacidad máxima de alumnos ya fue alcanzada`;
        let lista = document.createElement("p");
        lista.innerHTML = `Los alumnos de la materia ${materia} son: <br>
        ${materiasClase[materia].join(', ')} <br><br>`;
        message.append(mensaje, lista);
    } else {
        alumnosActuales.push(alumno);
        materiasClase[materia] = alumnosActuales;
        let mensaje = document.createElement("p");
        mensaje.innerHTML = `Felicidades, el nuevo estudiante <b>${alumno}</b> acaba de ser inscrito a la materia de <b>${materia}</b>`;
        let lista = document.createElement("p");
        lista.innerHTML = `Los alumnos de la materia ${materia} son: <br>
        ${materiasClase[materia].join(', ')} <br><br>`;
        message.append(mensaje, lista);
    }
}

buttonAsk.addEventListener("click", inscribir);