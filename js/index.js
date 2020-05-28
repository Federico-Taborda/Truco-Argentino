const partida = new Partida([new Humano("Fede", "Hombre"), new Cpu("CPU", "Mujer")], new Mazo(), 30, new Tabla());

async function main() {
    partida.iniciarPartida();
};

main();
