class Partida {
    constructor(jugadores, mazo, puntos, tabla) {
        this.jugadores = jugadores;
        this.mazo = mazo;
        this.puntos = puntos;
        this.tabla = tabla;
    };

    iniciarPartida() {
        this.mazo.nuevoMazo();
        this.agregarJugadoresTabla();
        this.decidirMano();
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

        return this.tabla.dibujarJugadoresEnLaTabla();
    };

    mostrarCartasEnMano() {
        let manoJugador = this.jugadores[0].mano;
        document.getElementById("Jugador-Cartas-Mano-1").src = manoJugador[0].url;
        document.getElementById("Jugador-Cartas-Mano-2").src = manoJugador[1].url;
        document.getElementById("Jugador-Cartas-Mano-3").src = manoJugador[2].url;
    };

    decidirMano() {
        if(this.jugadores[0].turnoActual == false && this.jugadores[1].turnoActual == false) {
            let random = Math.floor(Math.random() * this.jugadores.length);
            this.jugadores[random].turnoActual = true;
        }else if(this.jugadores[0].turnoActual == true && this.jugadores[1].turnoActual == false) {
            this.jugadores[0].turnoActual = false;
            this.jugadores[1].turnoActual = true;
        }else if(this.jugadores[0].turnoActual == false && this.jugadores[1].turnoActual == true) {
            this.jugadores[0].turnoActual = true;
            this.jugadores[1].turnoActual = false;
        };
    };

    // Si display es true se oculta sino se muestra;
    displayCanto(id, display) {
        if(display) {
            document.getElementById(`${id}`).style.display = "none";
        }else{
            document.getElementById(`${id}`).style.display = "initial";
        };
    };

    finalizarPartida() {
        // finalizar la partida
    };

    finalizarMano() {
        // finalizar la mano
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};