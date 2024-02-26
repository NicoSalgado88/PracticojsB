let cd1 = document.getElementById("c1");
let cd2 = document.getElementById("c2");
let cd3 = document.getElementById("c3");
let cd4 = document.getElementById("c4");
let cd5 = document.getElementById("c5");

cd1.addEventListener('mouseover', cambiarColor);
cd2.addEventListener('mouseover', cambiarColor);
cd3.addEventListener('mouseover', cambiarColor);
cd4.addEventListener('mouseover', cambiarColor);
cd5.addEventListener('mouseover', cambiarColor);

function cambiarColor(evento) {
    let div = document.getElementById(evento.target.id);
    document.body.style.backgroundColor=window.getComputedStyle(div).backgroundColor
    //document.body.style.backgroundColor = div.style.backgroundColor;
}


