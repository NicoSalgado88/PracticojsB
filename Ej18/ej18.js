/*18) Realice una página que luego de 2 segundos de haberse cargado se dirija hacia la
página https://www.google.com.ar*/


setTimeout(pagina,2000)

function pagina(){
    //document.getElementById("google").innerHTML="www.google.com.ar"+window.location.href
    window.location.href="https://www.google.com.ar/webhp"
}