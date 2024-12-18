class Humano extends Jugador{
    constructor(nombre){
        super();
        this.nombre = nombre;
    };
    
    async jugarCarta(carta) {
        this.generarLog(` Tira ${carta.nombre}`);
        let jugada = this.mano.splice(this.mano.indexOf(carta), 1);
        this.cartasJugadas.push(jugada);
        this.turnos--;
    };

    truco() {
        this.generarLog(this.textos.truco);
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

    rendirMano() {
        this.generarLog(this.textos.meVoy);
    };
};