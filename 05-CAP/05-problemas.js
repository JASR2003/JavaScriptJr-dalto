let trabajo = "240 minutos trabajando";
let trabajosPracticos = "100 minutos en trabajos practicos";
let estudios = "120 minutos estudiando";
let tareasHogar = "30 minutos haciendo tareas del hogar";
let descanso = "10 minutos de descanso";

for(let i = 1; i < 15; i++){
if(i == 1){
    console.groupCollapsed("Semana 1")
}
if(i == 8){
    console.groupEnd();
    console.groupCollapsed("Semana 2")
}
    console.log("Tareas");
    console.groupCollapsed(`Dia ${i}`);
        console.log(trabajo);
        console.log(descanso);
        console.log(estudios);
        console.log(trabajosPracticos);
        console.log(tareasHogar);
    console.groupEnd();
}
console.groupEnd();
console.groupEnd();