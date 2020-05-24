class Jugador {
    constructor(nombre){
        this.nombre = nombre;
        this.mano = [];
        this.turnos = 3;
        this.puntos = 0;
        this.textos = {
            quiero: "Quiero",
            noQuiero: "No quiero",
            envido: "Envido",
            realEnvido: "Real Envido",
            faltaEnvido: "Falta Envido",
            truco: "Truco",
            quieroRetruco: "Quiero Retruco",
            quieroValeCuatro: "Quiero vale cuatro",
            flor: "Flor",
            contraFlor: "Contra Flor",
            meVoy: "Me voy al mazo"
        };
    };

    cartaRandom() {
        // Cambiar mazo a partida.mazo
        let carta = mazo.cartas[Math.floor(Math.random() * mazo.cartas.length)];
        mazo.quitarCartaDelMazo(carta.nombre);
        return carta;
    };

    async tomarCartas(){
        const { mano, accion, cartaRandom } = this;
        mano[0] = await accion(cartaRandom());
        mano[1] = await accion(cartaRandom());
        mano[2] = await accion(cartaRandom());
    };

    jugada(texto) {
        return {
            jugada: texto
        };
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};