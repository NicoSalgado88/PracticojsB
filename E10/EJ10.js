//Realiza una página que implemente una calculadora aritmética.

num = []
array = []
op = ""

function getNum() {
    let res = document.getElementById("res")
    num.push(1)
    console.log("num:")
    console.log(num)
    res.innerText = num.join(' ')
}

function sum() {
    let res = document.getElementById("res")
    res.innerText = "+"
    op = "s"
    console.log("sum" + " " + op)
    if (array.length == 0) {
        array[0] = num
    } else {
        array.push(num)
    }
    console.log(array)
    num = []
}

function res() {
    array.push(num)
    console.log(array)
    if (op == "s") {
        var total = 0
        for (var i = 0; i < array.length; i++) {
            console.log("total: "+ total+"\n");
            total += array[i];
        }
    }
    let res = document.getElementById("res")
    res.innerText = total
    console.log("op: " + op + "\n" + "arreglo: "
    + array + "\n" + "total: " + total)
    array = []
}

function limpiar(){
    let res = document.getElementById("res")
    num = []
    array = []
    res.innerText = "0"
}