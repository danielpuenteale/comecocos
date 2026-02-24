console.log("Hola mundo");
//detectar teclas
document.addEventListener("keydown", controlteclas);
function controlteclas(event) {
  let tecla = event.key;
  if (tecla == "ArrowUp") {
    console.log("Arriba");
    up = up - 5;
    console.log(up);
  }
  if (tecla == "ArrowDown") {
    console.log("Abajo");
    down = down + 5;
    console.log(down);
  }
    if (tecla == "ArrowLeft") { 
      console.log("Izquierda");
        left = left - 5;
        console.log(left);
    }
    if (tecla == "ArrowRight") {
      console.log("Derecha");
        right = right + 5;
        console.log(right);
    }
}

let up = 0
let left = 0
let right = 0
let down = 0
document.querySelector

