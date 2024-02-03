import { startingQuestions } from "./play.js";

export function gameOver() {
    console.log("Juego Terminado");
    alert("JUEGO TERMINADO. INTÉNTALO DE NUEVO");
    let question = confirm("¿Quieres intentarlo de nuevo?");
    if (question) {
        iniciarJuego();
    }
}

export function restartGame() {
    let question = confirm("¿Quieres jugar de nuevo?");
    if (question) {
        iniciarJuego();
    }
}

function iniciarJuego() {
    alert("Bienvenido a la versión de `La Historia de los Curie`");
    alert("Tus decisiones marcarán la diferencia en toda esta historia");
    alert("Solo tienes 4 oportunidades. No dejes que mueran, buena suerte :D");
    startingQuestions();
}

iniciarJuego();