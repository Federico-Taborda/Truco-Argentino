const partida = new Partida([new Humano("Fede", "Hombre"), new Cpu("CPU", "Mujer")], new Mazo(), 30, new Tabla());

async function main() {
    partida.iniciarPartida();
    await partida.accion(partida.jugadores[1].tomarCartas(partida.mazo));
    await partida.accion(partida.jugadores[0].tomarCartas(partida.mazo));
    partida.mostrarCartasEnMano();
};

main();
