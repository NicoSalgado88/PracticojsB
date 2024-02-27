// Realice un formulario que disponga de dos cajas de texto para verificar usuario y
// password. El usuario debe comenzar con una letra mayúscula y tener al menos 3 números
// en cualquier posición. El password debe tener una longitud mínima de 8 caracteres,
// comenzar con un número y terminar con una letra mayúscula seguida de otro número.

function validarCreds() {
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("contrasena").value;

    //usuario
    if (!/^[A-Z].*[0-9]{3}/.test(usuario)) {
        alert("El usuario debe comenzar con una letra mayúscula y contener al menos tres números en cualquier posición.");
        return;
    }

    //pass
    if (!/^[0-9].{6,}[A-Z][0-9]$/.test(pass)) {
        alert("La contraseña debe tener una longitud mínima de 8 caracteres, comenzar con un número y terminar con una letra mayúscula seguida de otro número.");
        return;
    }


    alert("Datos válidos. Usuario y contraseña verificados correctamente.");
}


