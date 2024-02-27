//Realiza una página que implemente una calculadora aritmética.

num = [] //individual number
array = [] //list of number(s) to operate
op = [] //list of operation(s)
total = 0

function getNum() {
    let res = document.getElementById("res")
    num.push(1)
    display()
    res.innerText = num.join(' ')
}

function sum() {
    let res = document.getElementById("res")
    res.innerText = "+"
    op.push("sum")
    if (array.length == 0) {
        array[0] = num
    } else {
        array.push(num)
    }
    num = []
    display()
}

function res() {
    res2 = document.getElementById("res2")
    if (num.length == 0) {
        return;
    }
    if (array.length == 0) {
        return;
    }
    array.push(num)
    for (var k = 0; k < op.length; k++) {
        switch (op[k]) {
            case "sum":
                for (var i = 0; i < array.length; i++) {
                    total += array[i];
                }
                break;
            default:
                break;
        }
    }
    res2.innerText = total
    display()
    limpiar()
}

function limpiar() {
    total = 0
    let res = document.getElementById("res")
    num = []
    array = []
    op = []
    res.innerText = "0"
    console.log("cleaned" + "\n")
    display()
}

function display(){
    console.log("total: " + total + "\n" + "array: " + array + "\n" + "num: " + num + "\n" + "op: " + op)
}