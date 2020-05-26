class Partida {
    constructor(jugadores, mazo, puntos, tabla) {
        this.jugadores = jugadores;
        this.mazo = mazo;
        this.puntos = puntos;
        this.tabla = tabla;
    };

    repartirOtroMazo() {
        return this.mazo.nuevoMazo();
    };

    sumarPuntosAlJugador(nombre, puntos) {
        this.jugadores.forEach(jugador => {
            if(jugador.nombre == nombre) {
                jugador.puntos += puntos;
            };
        });
        
        return this.actualizarPuntosJugador(nombre, puntos);
    };
    
    actualizarPuntosJugador(nombre, puntos) {
        this.tabla.jugadores.forEach(jugador => {
            if(jugador.nombre == nombre) {
                jugador.puntos = puntos;
            };
        });

        return this.tabla.actualizarPuntos();
    };

    agregarJugadoresTabla() {
        const { jugadores, tabla } = this;
        jugadores.forEach(jugador => {
            tabla.jugadores.push({
                nombre: jugador.nombre,
                puntos: jugador.puntos
            });
        });
    };

    finalizarPartida() {
        // finalizar la partida
    };

    finalizarMano() {
        // finalizar la mano
    };
};