const partida = new Partida([new Jugador("Fede", "Hombre"), new Jugador("CPU", "Mujer")], new Mazo(), 30, new Tabla());

async function main() {
    partida.mazo.nuevoMazo();
    partida.agregarJugadoresTabla();
    partida.tabla.dibujarJugadoresEnLaTabla();
    await partida.accion(partida.jugadores[1].tomarCartas(partida.mazo))
    await partida.accion(partida.jugadores[0].tomarCartas(partida.mazo))
    partida.mostrarCartas();
}

main();
