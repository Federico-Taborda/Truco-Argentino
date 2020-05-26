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
            contraFlorAlResto: "Contra Flor al Resto",
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
        const { hablar, textos } = this;
        hablar(textos.truco);
        // truco
    };
    
    reTruco() {
        const { hablar, textos } = this;
        hablar(textos.quieroRetruco);
        // retruco
    };

    valeCuatro() {
        const { hablar, textos } = this;
        hablar(textos.quieroValeCuatro);
        // retruco
    };
    
    envido() {
        const { hablar, textos } = this;
        hablar(textos.envido);
        // envido
    };
    
    realEnvido() {
        const { hablar, textos } = this;
        hablar(textos.realEnvido);
        // real envido
    };
    
    faltaEnvido() {
        const { hablar, textos } = this;
        hablar(textos.faltaEnvido);
        // falta envido
    };
    
    flor() {
        const { hablar, textos } = this;
        hablar(textos.flor);
        // flor
    };
    
    contraFlor() {
        const { hablar, textos } = this;
        hablar(textos.contraFlor);
        // contra flor
    };
    
    contraFlorAlResto() {
        const { hablar, textos } = this;
        hablar(textos.contraFlorAlResto);
        // contra flor al resto
    };
    
    jugarCarta(carta) {
        // jugar carta
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
    
    rendirMano() {
        const { hablar, textos } = this;
        hablar(textos.meVoy);

        return partida.finalizarMano();
    };

    generarLog() {
        // generar log
    };

    hablar(dialogo) {
        const speach = new SpeechSynthesisUtterance(dialogo);
        window.speechSynthesis.speak(speach);
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};