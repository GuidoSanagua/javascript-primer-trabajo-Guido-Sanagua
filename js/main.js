let puntosJugador = 0;
let puntosMaquina = 0;

let instrucciones = document.querySelector("#instrucciones");
let ContenedorPuntosJugador = document.querySelector("#puntos-jugador");
let ContenedorpuntosMaquina = document.querySelector("#puntos-maquina");
let mensaje = document.querySelector("#mensaje")
let ContenedorGanaPunto = document.querySelector("#gana-punto");
let ElegiTuMovimiento = document.querySelector("#elegi-tu-movimiento");

let ContenedorEleccionJugador = document.querySelector("#eleccion-usuario");
let ContenedorEleccionMaquina = document.querySelector("#eleccion-maquina");

let movimientos = document.querySelectorAll(".movimiento")
movimientos.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});
function iniciarTurno(e) {
    let EleccionMaquina = Math.floor(Math.random() * 3);
    let EleccionJugador = e.currentTarget.id;

    if (EleccionMaquina === 0) {
        EleccionMaquina = "piedra💎";
    } else if (EleccionMaquina === 1) {
        EleccionMaquina = "papel📋"
    } else if (EleccionMaquina === 2) {
        EleccionMaquina = "tijera✂"
    }

    if (
        (EleccionJugador === "piedra💎" && EleccionMaquina === "tijera✂") ||
        (EleccionJugador === "tijera✂" && EleccionMaquina === "papel📋") ||
        (EleccionJugador === "papel📋" && EleccionMaquina === "piedra💎") 
     ) {
        ganaUsuario();
    } else if (
        (EleccionMaquina === "piedra💎" && EleccionJugador === "tijera✂")||
        (EleccionMaquina === "tijera✂" && EleccionJugador === "papel📋") ||
        (EleccionMaquina === "papel📋" && EleccionJugador === "piedra💎") 
    ) {
        ganaMaquina();
    } else {
        empate();
    }
    mensaje.classList.remove("disabled");
    ContenedorEleccionJugador.innerText = EleccionJugador
    ContenedorEleccionMaquina.innerText = EleccionMaquina
    
    if (puntosJugador === 5 || puntosMaquina ===5) {
        if (puntosJugador ===5) {
            instrucciones.innerText = "¡¡GANASTEEE!!"
        }
        if (puntosMaquina ===5) {
            instrucciones.innerText = "Perdiste, más suerte para la siguiente..."
        }
        

    }

    


}
function ganaUsuario() {
    puntosJugador++;
    ContenedorPuntosJugador.innerText = puntosJugador;
    ContenedorGanaPunto.innerText = "¡Ganaste un punto!"
}
function ganaMaquina() {
    puntosMaquina++;
    ContenedorpuntosMaquina.innerText = puntosMaquina;
    ContenedorGanaPunto.innerText = "¡La Maquina ganó un punto!"
}
function empate() {
    ContenedorGanaPunto.innerText = "¡Empate!"

}


