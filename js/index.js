// const jugador = new Jugador("Jugador");
// const cpu = new Jugador("CPU");

// mazo.nuevoMazo();
// console.log(mazo.cartas.length)
// jugador.tomarCartas();
// cpu.tomarCartas();
// console.log(jugador.mano)
// console.log(cpu.mano)

const partida = new Partida(
    [new Jugador("Fede", "Hombre"), new Jugador("CPU", "Mujer")],
    new Mazo(),
    30,
    new Tabla(),
    new Log
);

console.log(partida.jugadores)
partida.agregarJugadoresTabla();
partida.tabla.dibujarJugadoresEnLaTabla();

// function prueba() {
//     let doc = document.getElementById("Mesa");
//     doc.addEventListener("click", () => {
//         console.log("click")
//     })
// }

// prueba();
