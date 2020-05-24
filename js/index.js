// const jugador = new Jugador("Jugador");
// const cpu = new Jugador("CPU");

// mazo.nuevoMazo();
// console.log(mazo.cartas.length)
// jugador.tomarCartas();
// cpu.tomarCartas();

const partida = new Partida(
    [new Jugador("Jugador"), new Jugador("CPU")],
    new Mazo(),
    30,
    new Tabla()
);
