//Cojo el div del teclado, para luego ir añadiendo
let teclado = document.getElementById("teclado");

for (let i = 65; i <= 90; i++) {
    //Creo la tecla
    let tecla = document.createElement("div");
    tecla.innerHTML = "<p>" + String.fromCharCode(i) + "</p>";
    tecla.className = "tecla";

    tecla = cambiarFondoTecla(i, tecla);

    function cambiarFondoTecla(i, tecla) {
        
        // Vocales
        if ("AEIOU".includes(String.fromCharCode(i))) {
            tecla.style.background = "red";
            tecla.style.color = "white";
        }

        // Consonantes
        else {
            tecla.style.background = "#00b0ff";
            tecla.style.color = "white";
        }


        //Añado la tecla al teclado
        teclado.appendChild(tecla);
    }
}