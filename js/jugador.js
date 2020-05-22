class Jugador {
    constructor(nombre){
        this.nombre = nombre;
        this.mano = [];
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
        let carta = mazo.cartas[Math.floor(Math.random() * mazo.cartas.length)];
        mazo.quitarCartaDelMazo(carta.nombre);
        return carta;
    };

    async tomarCartas(){
        this.mano[0] = await this.accion();
        this.mano[1] = await this.accion();
        this.mano[2] = await this.accion();
    };

    accion() {
        return new Promise((resolve, reject) => {
            resolve(this.cartaRandom());
        });
    };
};