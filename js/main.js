const opciones = [
    { id: "piedra💎", nombre: "Piedra💎", numeroDeMovimiento: 1 },
    { id: "papel📋", nombre: "Papel📋", numeroDeMovimiento: 2 },
    { id: "tijera✂", nombre: "Tijera✂", numeroDeMovimiento: 3 }
];

let puntosJugador = 0;
let puntosMaquina = 0;

const instrucciones = document.querySelector("#instrucciones");
const ContenedorPuntosJugador = document.querySelector("#puntos-usuarios");
const ContenedorPuntosMaquina = document.querySelector("#puntos-maquina");
const mensaje = document.querySelector("#mensaje");
const ContenedorGanaPunto = document.querySelector("#gana-punto");
const ElegiTuMovimiento = document.querySelector("#elegi-tu-movimiento");
const ContenedorEleccionJugador = document.querySelector("#eleccion-usuario");
const ContenedorEleccionMaquina = document.querySelector("#eleccion-maquina");

const movimientos = document.querySelectorAll(".movimiento");
movimientos.forEach(boton => {
    boton.addEventListener("click", () => jugar(boton.id));
});

function jugar(eleccionJugador) {
    const eleccionMaquina = obtenerEleccionMaquina();
    const resultado = determinarGanador(eleccionJugador, eleccionMaquina.id);

    mostrarResultado(eleccionJugador, eleccionMaquina.nombre, resultado);
    actualizarPuntos(resultado);

    if (puntosJugador === 5 || puntosMaquina === 5) {
        mostrarMensajeFinal();
        reiniciarJuego();
    }
}

function obtenerEleccionMaquina() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function determinarGanador(eleccionJugador, eleccionMaquina) {
    if (eleccionJugador === eleccionMaquina) {
        return "empate";
    } else if (
        (eleccionJugador === "piedra💎" && eleccionMaquina === "tijera✂") ||
        (eleccionJugador === "tijera✂" && eleccionMaquina === "papel📋") ||
        (eleccionJugador === "papel📋" && eleccionMaquina === "piedra💎")
    ) {
        return "jugador";
    } else {
        return "maquina";
    }
}

function mostrarResultado(eleccionJugador, eleccionMaquina, resultado) {
    ContenedorEleccionJugador.innerText = eleccionJugador;
    ContenedorEleccionMaquina.innerText = eleccionMaquina;

    mensaje.innerHTML = `Usaste <span class="eleccion">${eleccionJugador}</span><br>la computadora usó <span class="eleccion">${eleccionMaquina}</span>`;
    ContenedorGanaPunto.innerText = resultado === "jugador" ? "¡Ganaste un punto!" : resultado === "maquina" ? "¡La Máquina ganó un punto!" : "¡Empate!";
    mensaje.classList.remove("disabled");

    console.log("Elección del jugador:", eleccionJugador);
    console.log("Elección de la máquina:", eleccionMaquina);
    console.log("Resultado:", resultado);
}

function actualizarPuntos(resultado) {
    if (resultado === "jugador") {
        puntosJugador++;
    } else if (resultado === "maquina") {
        puntosMaquina++;
    }
    ContenedorPuntosJugador.innerText = puntosJugador;
    ContenedorPuntosMaquina.innerText = puntosMaquina;

    console.log("Puntos del jugador:", puntosJugador);
    console.log("Puntos de la máquina:", puntosMaquina);
}

function mostrarMensajeFinal() {
    instrucciones.innerText = puntosJugador === 5 ? "¡¡GANASTEEE!!" : "Perdiste, más suerte para la siguiente...";

    console.log("Mensaje final:", instrucciones.innerText);
}

function reiniciarJuego() {
    puntosJugador = 0;
    puntosMaquina = 0;
    ContenedorPuntosJugador.innerText = puntosJugador;
    ContenedorPuntosMaquina.innerText = puntosMaquina;
    instrucciones.innerText = "El primero en llegar a 5 puntos gana";

    console.log("Reiniciando el juego...");
}
