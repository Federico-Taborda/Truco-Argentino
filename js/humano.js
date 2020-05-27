class Humano {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
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
        // Cambiar mazo a partida.mazo
        let carta = mazo.cartas[Math.floor(Math.random() * mazo.cartas.length)];
        mazo.quitarCartaDelMazo(carta.nombre);
        return carta;
    };

    async tomarCartas(mazo){
        this.mano[0] = await this.accion(this.cartaRandom(mazo));
        this.mano[1] = await this.accion(this.cartaRandom(mazo));
        this.mano[2] = await this.accion(this.cartaRandom(mazo));
    };

    truco() {
        this.hablar(this.textos.truco);
        this.generarLog(this.textos.truco);

        this.escucharCanto("quiero", this.jugarCarta);
        this.escucharCanto("no-quiero", this.jugarCarta);
        this.escucharCanto("envido", this.jugarCarta);
        this.escucharCanto("re-truco", this.jugarCarta);
        this.escucharCanto("al-mazo", this.jugarCarta);
    };
    
    reTruco() {
        this.hablar(this.textos.quieroRetruco);
        this.generarLog(this.textos.quieroRetruco);
        // retruco
    };

    valeCuatro() {
        this.hablar(this.textos.quieroValeCuatro);
        this.generarLog(this.textos.quieroValeCuatro);
        // retruco
    };
    
    envido() {
        this.hablar(this.textos.envido);
        this.generarLog(this.textos.envido);
        // envido
    };
    
    realEnvido() {
        this.hablar(this.textos.realEnvido);
        this.generarLog(this.textos.realEnvido);
        // real envido
    };
    
    faltaEnvido() {
        this.hablar(this.textos.faltaEnvido);
        this.generarLog(this.textos.faltaEnvido);
        // falta envido
    };
    
    flor() {
        this.hablar(this.textos.flor);
        this.generarLog(this.textos.flor);
        // flor
    };
    
    contraFlor() {
        this.hablar(this.textos.contraFlor);
        this.generarLog(this.textos.contraFlor);
        // contra flor
    };
    
    contraFlorAlResto() {
        this.hablar(this.textos.contraFlorAlResto);
        this.generarLog(this.textos.contraFlorAlResto);
        // contra flor al resto
    };
    
    jugarCarta(nombre, carta) {
        // jugar carta

        console.log(nombre, `juega carta`);
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