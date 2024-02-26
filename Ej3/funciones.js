//3) Realizar un formulario donde: la longitud del nombre sea mayor de cuatro caracteres. El
//nombre sólo debe contener caracteres del alfabeto español (no contiene números ni
//caracteres no alfanuméricos). La edad sólo debe contener números y estar comprendido
//entre 18 y 30. La dirección de correo debe incluir una arroba y su longitud sea superior a
//cinco caracteres.


function validarFormulario(event) {

    
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nombre.length <= 4 || !/^[a-zA-ZñÑ\s]+$/.test(nombre)) {
        alert("Ingrese un nombre válido (más de cuatro caracteres y solo letras).");
        return false;
    }

    if (isNaN(edad) || edad < 18 || edad > 30) {
        alert("La edad debe ser un número entre 18 y 30.");
        return false;
    }

    if (!email.includes("@") || email.length <= 5) {
        alert("Ingrese un email válido (debe contener una arroba y tener más de cinco caracteres).");
        return false;
    }

    document.getElementById("formulario").submit(); 
    //console.log ("enviado") 
}

