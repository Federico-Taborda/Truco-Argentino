

const partida = new Partida(
    new Humano("Federico"), 
    new Cpu("CPU"),
    new Mazo(), 
    30,
    new Tabla()
);

async function main() {
    partida.iniciarPartida();
};

main();
