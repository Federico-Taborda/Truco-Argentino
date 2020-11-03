const config = {
    puntos: 30
};

const partida = new Partida(
    [new Humano("Fede", "Hombre"), new Cpu("CPU", "Mujer")],
    new Mazo(), 
    config.puntos, 
    new Tabla());

async function main() {
    partida.iniciarPartida();
};

main();
