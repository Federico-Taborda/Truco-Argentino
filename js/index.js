const config = {
    nombre: "Fede",
    genero: "Hombre",
    puntos: 30
};

const partida = new Partida({ 
        jugador: new Humano(config.nombre, config.genero),
        cpu: new Cpu("CPU", "Mujer")},
    new Mazo(), 
    config.puntos,
    new Tabla());

async function main() {
    partida.iniciarPartida();
};

main();
