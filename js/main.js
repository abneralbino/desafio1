/* IDENTIFICACIÓN DEL PUESTO
let tituloDeLaPosicion = prompt("Título de la Vancante");
let id = parseInt(prompt("Entre el ID del puesto"));
let nombreCliente = prompt("Entre el nombre del cliente");
let vacantes = parseInt(prompt("Cuántas vacantes hay que llenar para este puesto?"));
let fechaInicio = Date.parse(prompt("Fecha de inicio del puesto")); /*conseguir prompt para fecha*/
/*
let fechaLimite = Date /*conseguir prompt para fecha. La fecha límite es 5 días antes de fechaInicio*/
/*
alert("El puesto " + tituloDeLaPosicion + " ID " + id + " para " + nombreCliente + " se ha registrado exitosamente y hay " + vacantes + " para llenar.")

/*METRICAS DEL RECLUTADOR
let invitaciones = parseInt(prompt("Cuántos candidatos fueron invitados a postularse?"));
let invitacionesAceptadas = parseInt(prompt("Cuántos candidatos acceptaron las invitaciones y se postularon?"));
let presentaciones = parseInt(prompt("Cuántos candidatos fueron presentados al cliente?"));
let fechaPresentacion = Date /*conseguir prompt para fecha
let entrevistas = parseInt(prompt("Cuántos candidatos fueron entrevistados por el cliente?"));
let cantContrataciones = parseInt(prompt("Cuántos candidatos fueron contratados por el cliente?"))
let fechaCierrePuesto = Date /*conseguir prompt para fecha*/


/* functions para transformar fechas*/
let fecha = prompt("Entre la fecha dd/mm/aaaa");

function formatoDeFecha(fecha) {
    nuevoFormato = fecha.toLocaleDateString('es-AR');
    return new Date(fecha);
} 



/* function formatoDeFecha(fecha) {
    nuevoFormato = toLocaleDateString('es-AR').parseInt(fecha);

    return new Date(fecha);
} 

 */






















/*

let vacantesLlenas = parseInt(prompt("Cuántas de las vacantes se ha llenado?"));
let vacantesRestantes = vacantes - vacantesLlenas;

let razonDeLlenado = (100 * vacantesLlenas) / vacantes;

if (vacantesLlenas > vacantes) {
    alert("Número de vacantes llenas debe ser menor o igual al número de vacantes");

    
}
else if (vacantesLlenas == vacantes) {
    alert ("Ya llenaste todas las vacantes. Podés cerrar el puesto");
    
}

else if (vacantesLlenas < vacantes) {
    alert ("Has llenado el" + razonDeLlenado + "% de las vacantes. Te quedan " + vacantesRestantes + " por llenar");

}
*/

























/* let tituloDeLaPosicion = prompt("Título de la Vancante");

let id = prompt(parseInt("Entre el ID de la cavante"));

let inicio = prompt (new Date("Cuándo va a ser el primer dia de  trabajo del contratado"));

let limite = new Date("2022/07/29");
/* let hoy = new date("");  

let vacantes = prompt("Cuantas vacantes hay que llenar para este puesto?");

if (vacantes <=0) {
    alert("El puesto tiene que tener por lo menos una vancate");
    
}

else if (asignacion) {

}

let asignacion = prompt("Cuándo te asignaron la búsqueda? DD/MM/YYYY");

let fechaAsignacion = new Date(asignacion);

let contratado = new Date("2022/06/29");

let invitaciones = prompt("Cuántos candidatos has invitado a que se postulen?");

let presentaciones = prompt("Cuántos candidatos has presnetado al cliente?");

let entrevistas = prompt("Cuántos candidatos fueron entrevistados por el cliente?");

let contratados = prompt("Cuántos candidatos fueron contratados por el cliente?");



let tiempoParaPresentarSeg = limite - asignacion;
let diasParaPresentar = tiempoParaPresentarSeg / (1000 * 3600 * 24);


alert(`El puesto ${tituloDeLaPosicion} (ID  ${id}) se ha registrado exitosamente. 
Tenés ${diasParaPresentar} días para presentar los candidatos de la vacante`); */