class Jugador {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
        this.mano = [];
        this.jugadas = [];
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

    truco() {
        // truco
    };

    reTruco() {
        // retruco
    };

    envido() {
        // envido
    };

    realEnvido() {
        // real envido
    };

    faltaEnvido() {
        // falta envido
    };

    flor() {
        // flor
    };

    contraFlor() {
        // contra flor
    };

    contraFlorAlResto() {
        // contra flor al resto
    };

    jugarCarta(carta) {
        // jugar carta
    };

    aceptar_rechazar(respuesta) {
        // Si es true se acepta el canto, si es false se rechaza.
        return respuesta;
    };;

    rendirMano() {
        return partida.finalizarMano();
    };

    generarLog() {
        // generar log
    };

    hablar(dialogo) {
        const speach = new SpeechSynthesisUtterance(dialogo);
        window.speechSynthesis.speak(speach);
        
        if(this.genero == "Hombre") {
            // SpeechSyntesis Hombre
        }else if(this.genero == "Mujer") {
            // SpeechSyntesis Mujer
        };
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};