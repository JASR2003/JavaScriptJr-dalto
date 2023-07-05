const obtInfo = (materia) => {
    materiasClase = {
        fisica: ["Perez", "pedro", "maria", "daniela", "cofla", "jorge"],
        quimica: ["Rodriguez", "pedro","jose", "maria", "daniela"],
        matematicas: ["Suarez", "pedro", "daniela", "cofla", "jorge"],
        programacion: ["Ramirez", "pedro","jose", "maria", "daniela", "cofla", "jorge"],
    }
    if(materiasClase[materia] !== undefined){
        return [materiasClase[materia], materia, materiasClase];
    }
    else {
        return materiasClase;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtInfo(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`Profesor: ${profesor} </br>
    Materia: ${informacion[1]} </br>
    alumnos presentes: <b>${alumnos}</b></br></br>`);
}
}

const cantidadClases = (alumno)=>{
    let informacion = obtInfo();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `el alumno ${alumno} está en un total de ${cantidadTotal} clases, las cuales son:<b>${clasesPresentes}</b> </br></br>`;
}

mostrarInfo("fisica");
mostrarInfo("quimica");
mostrarInfo("matematicas");
mostrarInfo("programacion");

document.write(cantidadClases("cofla"));
document.write(cantidadClases("pedro"));
document.write(cantidadClases("jose"));
document.write(cantidadClases("daniela"));
document.write(cantidadClases("maria"));
document.write(cantidadClases("jorge"));