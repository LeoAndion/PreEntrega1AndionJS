let nombre = "";
let apellido = "";
let edad = 0;

while (nombre === ""|| apellido === "" || edad < 18 ){
nombre = prompt("Ingrese su nombre:");
apellido = prompt("Ingrese su apellido:");
edad = prompt("Ingrese su edad:");
if(edad <18 ){
    alert("Por favor ingrese una edad valida!")}
else if(nombre === "" || apellido === ""){
    alert("Ingrese un dato en el nombre o apellido")}
else{
    alert("Bienvendio " + nombre )
}


}



let cuotaMensual = 0
function calcularCuota(prestamo, tasaInteres, plazo) {
    const tasaMensual = tasaInteres / 12 / 100;
    const cuotaMensual = (prestamo * tasaMensual) + (prestamo/plazo);
    return cuotaMensual.toFixed(2);
}


function simularPrestamo() {
    const montoPrestamo = prompt(nombre + " Ingresa el monto del prestamo:");
    const tasaInteresAnual = prompt("Ingrese la tasa de interes anual (%):");
    const plazoEnMeses = prompt("Ingrese el plazo en meses:");

    const cuotaMensual = calcularCuota(montoPrestamo, tasaInteresAnual, plazoEnMeses);

    alert("Couta mensual es de " + cuotaMensual);
}


let continuar = true;
while (continuar) {
    simularPrestamo();
    const respuesta = prompt("Desea realizar otra simulacion? (Si/No)").toLowerCase();
    continuar = respuesta === 'si';
}
