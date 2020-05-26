const partida = new Partida(
    [new Jugador("Fede", "Hombre"), new Jugador("CPU", "Mujer")],
    new Mazo(),
    30,
    new Tabla()
);

partida.agregarJugadoresTabla();
partida.tabla.dibujarJugadoresEnLaTabla();
partida.jugadores[1].truco();

// Botones de accion
let btn_truco = document.getElementById("truco");
let btn_re_truco = document.getElementById("re-truco");
let btn_vale_cuatro = document.getElementById("vale-cuatro");
let btn_envido = document.getElementById("envido");
let btn_real_envido = document.getElementById("real-envido");
let btn_falta_envido = document.getElementById("falta-envido");
let btn_flor = document.getElementById("flor");
let btn_contra_flor = document.getElementById("contra-flor");
let btn_flor_contra_al_resto = document.getElementById("flor-contra-al-resto");
let btn_quiero = document.getElementById("quiero");
let btn_no_quiero = document.getElementById("no-quiero");
let btn_al_mazo = document.getElementById("al-mazo");

/* btn_truco.addEventListener("click", () => {
    partida.jugadores[0].truco();
});

btn_re_truco.addEventListener("click", () => {
    partida.jugadores[0].reTruco();
});

btn_vale_cuatro.addEventListener("click", () => {
    partida.jugadores[0].valeCuatro();
});

btn_envido.addEventListener("click", () => {
    partida.jugadores[0].envido();
});

btn_real_envido.addEventListener("click", () => {
    partida.jugadores[0].realEnvido();
});

btn_falta_envido.addEventListener("click", () => {
    partida.jugadores[0].faltaEnvido();
});

btn_flor.addEventListener("click", () => {
    partida.jugadores[0].flor();
});

btn_contra_flor.addEventListener("click", () => {
    partida.jugadores[0].contraFlor();
});

btn_flor_contra_al_resto.addEventListener("click", () => {
    partida.jugadores[0].contraFlorAlResto();
});

btn_quiero.addEventListener("click", () => {
    partida.jugadores[0].aceptar_rechazar(true);
});

btn_no_quiero.addEventListener("click", () => {
    partida.jugadores[0].aceptar_rechazar(false);
});

btn_al_mazo.addEventListener("click", () => {
    partida.jugadores[0].rendirMano();
}); */

// function prueba() {
//     let doc = document.getElementById("Mesa");
//     doc.addEventListener("click", () => {
//         console.log("click")
//     })
// }

// prueba();
