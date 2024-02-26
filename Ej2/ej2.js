/*2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
Luego realice las validaciones para cada uno de los campos.*/


function mostrarmensaje(){}
function verificar(){
    let miformulario=document.forms["formulario"];
    let nombre=miformulario["nombre"].value;
    //let sexo=miformulario["eleccion"]
    //let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    //let sexo = document.querySelector('input[name=eleccion]:checked')
    let masculino=document.getElementById("masculino").checked
    let femenino=document.getElementById("femenino").checked
    let fecha = document.getElementById("fecha").value
    let mail = document.getElementById("mail").value
    //let enviar = document.getElementById("enviar")

    let regexNA = /^[a-zA-Z\s]+$/
    let regexmail = /^\S+@\S+\.\S+$/
    let error = true

    console.log(nombre)
    console.log(apellido)
    console.log(masculino)
    console.log(femenino)
    console.log(fecha)
    console.log(mail)
    if (!regexNA.test(nombre)) {
        document.getElementById("errornombre").textContent = "Por favor, ingresa tu nombre"
        error=false;
    }

    if (!apellido || !regexNA.test(apellido)) {
        document.getElementById("errorapellido").textContent = "Por favor, ingresa tu apellido"
        error=false;
    }

    if (!masculino && !femenino) {
        document.getElementById("errorsexo").textContent = "Por favor, selecciona tu género"
        error=false;
    }

   /* if(!sexo[0] && !sexo[1]){
        document.getElementById("errorsexo").textContent = "Por favor, selecciona tu género"
        error=false;
    }*/

    if (fecha === "") {
        document.getElementById("errorfecha").textContent = "Por favor, ingresa tu fecha de nacimiento"
        error=false;
    }

    if (!regexmail.test(mail)) {
        document.getElementById("errormail").textContent = "Por favor, ingresa tu correo electrónico"
        error=false;
    }

    if (!error) {
        return error;
    }
    alert("Formulario enviado correctamente");
    return error


}


