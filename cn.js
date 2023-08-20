//variables

let numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

const sumar = () => {
    return numero.value++;
}


const restar = () => {
    if (numero.value>0)
    {
        return numero.value--;

    }
    
}