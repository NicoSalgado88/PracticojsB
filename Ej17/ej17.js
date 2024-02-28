/*17) Realice una página que escriba en un campo de texto una cadena. La cadena debe ser
escrita de a una letra por vez y el tiempo entre escritura de la letra debe ser 700ms.*/


setInterval(escribircadena, 700)

function escribircadena() {
    let cadena = " "
    let cadenaL = document.getElementById("texto")
    let i=0
    cadena=cadenaL[i]
    i++

    /*for (i = 0; i < cadena.length; i++) {
        cadenaL = cadena.charAt[i]
        document.getElementById("texto").innerText=cadenaL
    }*/
    console.log(cadenaL)
    //console.log(cadena)
}