class Partida {
    constructor(jugadores, mazo, puntos, tabla) {
        this.jugadores = jugadores;
        this.mazo = mazo;
        this.puntos = puntos;
        this.tabla = tabla;
    };

    iniciarPartida() {
        this.agregarJugadoresTabla();
        this.decidirMano();
        return this.iniciarMano();
    };
    
    async iniciarMano() {
        await this.accion(this.mazo.nuevoMazo());
        await this.accion(this.reiniciarManoMesa());
        await this.jugadores[0].tomarCartas(this.mazo);
        await this.jugadores[1].tomarCartas(this.mazo);
        this.mostrarCartasEnMano();
        this.displayCanto("truco", true);
        this.displayCanto("envido", true);
        this.displayCanto("quiero", true);
        this.displayCanto("no-quiero", true);
        this.displayCanto("al-mazo", true);
        this.esperarCartasJugador("Jugador-Cartas-Mano-1", this.jugadores[0].mano[0]);
        this.esperarCartasJugador("Jugador-Cartas-Mano-2", this.jugadores[0].mano[1]);
        this.esperarCartasJugador("Jugador-Cartas-Mano-3", this.jugadores[0].mano[2]);

    };

    esperarCartasJugador(id, carta) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            this.jugadores[0].jugarCarta(carta);
            this.mostrarCartaMesa(carta);
        });
    };
    
    repartirOtroMazo() {
        return this.mazo.nuevoMazo();
    };
    
    reiniciarManoMesa() {
        this.jugadores.map(jugador => {
            jugador.mano = [];
            jugador.cartasJugadas = [];
        });
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

    // Si display es true se muestra sino se oculta
    displayCanto(id, display) {
        if(display) {
            document.getElementById(`${id}`).style.display = "initial";
        }else{
            document.getElementById(`${id}`).style.display = "none";
        };
    };

    finalizarPartida() {
        // finalizar la partida
    };

    finalizarMano() {
        return this.iniciarMano();
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};