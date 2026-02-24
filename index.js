console.log("Hola mundo");
//detectar teclas
document.addEventListener("keydown", controlteclas);
function controlteclas(event) {
  let tecla = event.key;
  if (tecla == "ArrowUp") {
    console.log("Arriba");
    y = y - 5;
    console.log(y);
    document.querySelector(".blanco").style.top = y + "px";
  }
  if (tecla == "ArrowDown") {
    console.log("Abajo");
    y = y + 5;
    console.log(y);
    document.querySelector(".blanco").style.top = y + "px";

  }
    if (tecla == "ArrowLeft") { 
      console.log("Izquierda");
        x = x - 5;
        console.log(x);
        document.querySelector(".blanco").style.left = x + "px";
    }
    if (tecla == "ArrowRight") {
      console.log("Derecha");
        x = x + 5;
        console.log(x);
        document.querySelector(".blanco").style.left = x + "px";
    }
}

let x = 0
let y = 0



