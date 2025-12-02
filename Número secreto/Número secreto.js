//Ejercicio número secreto
function jugarAdivinaElNumero() {
    // 1. Generar el número secreto
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;

    console.log("¡Bienvenido al juego del Número Secreto!");
    console.log("Estoy pensando en un número entre 1 y 100...");

    // Usaremos un bucle `while` para repetir la pregunta hasta que se acierte
    while (!adivinado) {
        // Pedir entrada al usuario (usando prompt, común en JS de navegador)
        const entradaUsuario = prompt("Adivina el número: ");
        const intentoUsuario = parseInt(entradaUsuario, 10);

        // 2. Incrementar el contador de intentos
        intentos++;

        // 3. Validar la entrada
        if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            // No incrementamos `intentos` por una entrada inválida, y continuamos el bucle
            intentos--; 
            continue; 
        }

        // 4. Dar pistas (Condicionales: if / else if / else)
        if (intentoUsuario < numeroSecreto) {
            alert("¡Casi! El número secreto es MAYOR que " + intentoUsuario + ". Intenta de nuevo.");
        } else if (intentoUsuario > numeroSecreto) {
            alert("Te has pasado. El número secreto es MENOR que " + intentoUsuario + ". Intenta de nuevo.");
        } else {
            // El usuario acertó
            adivinado = true;
            alert(`🎉 ¡Felicidades! Adivinaste el número secreto (${numeroSecreto}).`);
            console.log(`Lo lograste en ${intentos} intentos.`);
        }
    }
}

// Para ejecutar el juego en un entorno de navegador:
// jugarAdivinaElNumero(); 

// Si usas Node.js, tendrías que usar un módulo como 'readline' para la entrada, 
// o simplemente simular el proceso para fines del ejercicio:
console.log("\n--- Simulación del Juego ---");
console.log("Número Secreto generado:", Math.floor(Math.random() * 100) + 1);
console.log("Llama a la función 'jugarAdivinaElNumero()' para empezar.");