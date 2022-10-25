let boton = document.querySelector(".boton");

boton.addEventListener("click", tomarStickers);

function tomarStickers() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

    let suma = +input1 + +input2 + +input3;

    let message = document.querySelector(".message");

    if (suma <= 10 && suma >= 0){
        message.innerHTML = `Llevas ${suma} Stickers`

    } else if (suma > 10){
        message.innerHTML = `Llevas demasiados Stickers`

    } else {
        message.innerHTML = `Ingresa números positivos`
    }
}