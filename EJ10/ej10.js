/* Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
cuántos días faltan o ya pasaron respecto del día de hoy. */

let fecha = prompt("Escriba una fecha (usando el formato DD-MM-YYYY).")
const d = new Date(fecha)
const t = new Date()
const df = new Date()
alert(fecha)
var dif = (t - d) / (1000 * 60 * 60 * 24)
if (fecha=="Invalid Date.") {
    alert("Nada.")
}
else if (df > 0) {
    alert("Faltan " + Math.round(dif * -1) + " días.")
} else {
    alert("Han pasado " + Math.round(dif) + " días.")
}
