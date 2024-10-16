class Cpu extends Jugador{
    constructor(nombre) {
        super();
        this.nombre = nombre;
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

    jugarCarta(nombre, carta) {
        // jugar carta

        console.log(nombre, `juega carta`);
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

    hablar(dialogo) {
        const speach = new SpeechSynthesisUtterance(dialogo);
        window.speechSynthesis.speak(speach);
    };

    mentir() {
        let arr = [true, false];
        let random = Math.floor(Math.random() * arr.length);
        return random;
    };

    rendirMano(funcion) {
        this.hablar(this.textos.meVoy);
        this.generarLog(this.textos.meVoy);
        
        return funcion();
    };
};
