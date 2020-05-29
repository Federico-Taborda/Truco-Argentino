class Humano extends Jugador{
    constructor(nombre, genero){
        super();
        this.nombre = nombre;
        this.genero = genero;
    };
    
    async jugarCarta(carta) {
        // jugar carta
        this.generarLog(` Tira ${carta.nombre}`);
        let jugada = this.mano.splice(this.mano.indexOf(carta), 1);
        this.cartasJugadas.push(jugada);
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
        this.generarLog(this.textos.quieroRetruco);
        // retruco
    };

    valeCuatro() {
        this.generarLog(this.textos.quieroValeCuatro);
        // Vale cuatro
    };
    
    envido() {
        this.generarLog(this.textos.envido);
        // envido
    };
    
    realEnvido() {
        this.generarLog(this.textos.realEnvido);
        // real envido
    };
    
    faltaEnvido() {
        this.generarLog(this.textos.faltaEnvido);
        // falta envido
    };
    
    flor() {
        this.generarLog(this.textos.flor);
        // flor
    };
    
    contraFlor() {
        this.generarLog(this.textos.contraFlor);
        // contra flor
    };
    
    contraFlorAlResto() {
        this.generarLog(this.textos.contraFlorAlResto);
        // contra flor al resto
    };
};