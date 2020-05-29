class Jugador {
    constructor() {
        this.mano = [];
        this.cartasJugadas = [];
        this.turnos = 3;
        this.turnoActual = false;
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
            contraFlorAlResto: "Contra Flor al Resto",
            meVoy: "Me voy al mazo"
        };
    };

    cartaRandom(mazo) {
        let carta = mazo.cartas[Math.floor(Math.random() * mazo.cartas.length)];
        mazo.quitarCartaDelMazo(carta.nombre);
        return carta;
    };

    async tomarCartas(mazo){
        this.mano[0] = await this.accion(this.cartaRandom(mazo));
        this.mano[1] = await this.accion(this.cartaRandom(mazo));
        this.mano[2] = await this.accion(this.cartaRandom(mazo));
    };
    
    aceptar_rechazar(respuesta) {
        // Si es true se acepta el canto, si es false se rechaza.
        const { textos } = this;
        if(respuesta) {
            this.hablar(textos.quiero)
        }else{
            this.hablar(textos.noQuiero)
        };
        
        return respuesta;
    };

    sumarPuntos(partida, puntos) {
        return partida.sumarPuntosAlJugador(this.nombre, puntos);
    };
    
    rendirMano() {
        this.hablar(this.textos.meVoy);
        this.generarLog(this.textos.meVoy);
        
        return partida.finalizarMano();
    };

    escucharCanto(elemento, funcion) {
        document.getElementById(`${elemento}`).addEventListener("click", () => {
            // se debe pasar los argumentos de this porque luego "this" se vuelve undefined
            funcion(this.nombre);
        });
    };

    generarLog(texto) {
        const { nombre } = this;
        let log = document.getElementById("Logs");
        let comentario = `<p>${nombre}: ${texto}</p>`;
        log.innerHTML += comentario;
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};