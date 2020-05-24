// const jugador = new Jugador("Jugador");
// const cpu = new Jugador("CPU");

// mazo.nuevoMazo();
// console.log(mazo.cartas.length)
// jugador.tomarCartas();
// cpu.tomarCartas();
// console.log(jugador.mano)
// console.log(cpu.mano)

const partida = new Partida(
    [new Jugador("Fede"), new Jugador("CPU")],
    new Mazo(),
    30,
    new Tabla()
);

console.log(partida.jugadores)
partida.agregarJugadoresTabla();
partida.tabla.dibujarJugadoresEnLaTabla();
