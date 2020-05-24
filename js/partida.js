class Partida {
    constructor(jugadores, mazo, puntos, tabla) {
        this.jugadores = jugadores; // Array con todos los jugadores
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
        this.tabla.jugadores.forEach(jugador => {
            if(jugador.nombre == nombre) {
                jugador.puntos = puntos;
            };
        });
    };

    agregarJugadoresTabla() {
        this.jugadores.forEach(jugador => {
            this.tabla.jugadores.push({
                nombre: jugador.nombre,
                puntos: jugador.puntos
            });
        });
    };
};