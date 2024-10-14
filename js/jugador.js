class Jugador {
    constructor() {
        this.mano = {};
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
    
    aceptar_rechazar(respuesta) {
        // Si es true se acepta el canto, si es false se rechaza.
        if(respuesta) {
            this.generarLog("Quiero");
            return true;
        }else{
            this.generarLog("No quiero");
            return false;
        };
    };

    sumarPuntos(partida, puntos) {
        return partida.sumarPuntosAlJugador(this.nombre, puntos);
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