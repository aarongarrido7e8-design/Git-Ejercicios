// Cojo el div del teclado
let teclado = document.getElementById("teclado");

// Números 1-8
for (let i = 0; i <= 9; i++) {
    let tecla = document.createElement("div");

    tecla.innerHTML = "<p>" + i + "</p>";
    tecla.className = "tecla";
    tecla.style.background = "#9e9e9e";
    tecla.style.color = "white";

    teclado.appendChild(tecla);
}

// Letras A-Z
for (let i = 65; i <= 90; i++) {
    let tecla = document.createElement("div");
    let letra = String.fromCharCode(i);

tecla.innerHTML = "<p>" + String.fromCharCode(i) + "</p>";    tecla.className = "tecla";

    cambiarFondoTecla(letra, tecla);
    teclado.appendChild(tecla);
}

// Función para cambiar color
function cambiarFondoTecla(letra, tecla) {
    if ("AEIOU".includes(letra)) {
        tecla.style.background = "red";
    } else {
        tecla.style.background = "#00b0ff";
    }
    tecla.style.color = "white";
}