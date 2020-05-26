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

    sumarPuntosAlJugador(jugador, puntos) {
        return jugador.puntos += puntos;
    };

    actualizarPuntosJugador(nombre, puntos) {
        const { tabla } = this;
        tabla.jugadores.forEach(jugador => {
            if(jugador.nombre == nombre) {
                jugador.puntos = puntos;
            };
        });
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