class Partida {
    constructor(jugadores, mazo, puntos, tabla) {
        this.jugadores = jugadores;
        this.mazo = mazo;
        this.puntos = puntos;
        this.tabla = tabla;
        this.display = new Display();
        this.agregarJugadoresTabla();
    };

    iniciarPartida() {
        this.decidirMano();
        return this.iniciarMano();
    };
    
    async iniciarMano() {
        this.display.displayCartasMesa(true);
        await this.accion(this.mazo.nuevoMazo());
        await this.accion(this.reiniciarManoMesa());
        await this.jugadores.jugador.tomarCartas(this.mazo);
        await this.jugadores.cpu.tomarCartas(this.mazo);
        await this.accion(this.display.mostrarCartasEnMano(this.jugadores.jugador));
        
        if(this.jugadores.jugador.turnoActual) {
            this.display.displayTruco();
            this.juegaJugador(
                ["truco", "envido", "falta-envido", "al-mazo"],
                ["Jugador-Mano-1", "Jugador-Mano-2", "Jugador-Mano-3"]
            );
        }else if(this.jugadores.cpu.turnoActual) {
            // Aqui jugaria el cpu
        };
    };

    juegaJugador(cantos, cartas) {
        // Escucha los cantos del jugador
        for(let j = 0; j < cantos.length; j++) {
            this.esperarCantosJugador(cantos[j]);
        };
        
        // Escucha que carta clickea el jugador
        for(let k = 0; k < cartas.length; k++) {
            this.esperarCartasJugador(cartas[k], this.jugadores.jugador.mano[k]);
        };
    }; 
    
    // Si una carta es jugada se oculta de la mano y se muestra en el tablero
    esperarCartasJugador(cartaDisplay, cartaMano) {
        document.getElementById(cartaDisplay).addEventListener("click", () => {
            this.jugadores.jugador.jugarCarta(cartaMano);
            this.display.displayElemento(cartaDisplay, false);
            this.display.mostrarCartaMesa(cartaMano, this.jugadores.jugador);
        });
    };
    
    esperarCantosJugador(id) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            switch (id) {
                case "truco": this.jugadores.jugador.truco(); break;

                case "re-truco": this.jugadores.jugador.reTruco(); break;

                case "vale-cuatro": this.jugadores.jugador.valeCuatro(); break;

                case "envido": this.jugadores.jugador.envido(); break;

                case "real-envido": this.jugadores.jugador.realEnvido(); break;

                case "falta-envido": this.jugadores.jugador.faltaEnvido(); break;

                case "flor": this.jugadores.jugador.flor(); break;

                case "contra-flor": this.jugadores.jugador.contraFlor();break;

                case "flor-contra-al-resto": this.jugadores.jugador.contraFlorAlResto(); break;

                case "quiero": this.jugadores.jugador.aceptar_rechazar(true); break;

                case "no-quiero": this.jugadores.jugador.aceptar_rechazar(false); break;

                case "al-mazo": 
                    this.jugadores.jugador.rendirMano();
                    this.finalizarMano();
                    break;
            
                default:
                    break;
            };
        });    
    };
    
    // Renicia las manos y las cartas jugadas de los jugadores
    reiniciarManoMesa() {
        for(let jugador in this.jugadores) {
            this.jugadores[jugador].mano = [];
            this.jugadores[jugador].cartasJugadas = [];
        };
    };
    
    sumarPuntosAlJugador(nombre, puntos) {
        for(let jugador in this.jugadores) {
            if(this.jugadores[jugador].nombre == nombre) {
                this.jugadores[jugador].puntos += puntos;
            };
        };
        
        return this.actualizarPuntosJugador(nombre, puntos);
    };
    
    // Actualiza los puntos del jugador
    actualizarPuntosJugador(nombre, puntos) {
        this.tabla.jugadores.forEach(jugador => {
            if(jugador.nombre == nombre) {
                jugador.puntos = puntos;
            };
        });

        return this.tabla.actualizarPuntos();
    };

    // Muestra los jugadores en la tabla
    agregarJugadoresTabla() {
        const { jugador, cpu } = this.jugadores;
        this.tabla.jugadores.push({ nombre: jugador.nombre, puntos: jugador.puntos });
        this.tabla.jugadores.push({ nombre: cpu.nombre, puntos: cpu.puntos });

        return this.tabla.dibujarJugadoresEnLaTabla();
    };

    compararCartasMesa(carta1, carta2) {
        if(carta1.valor > carta2.valor) {
            return console.log(carta1);
        }else if(carta1.valor < carta2.valor) {
            return console.log(carta2);
        };
    };

    decidirMano() {
        if(this.jugadores.jugador.turnoActual == false && this.jugadores.cpu.turnoActual == false) {
            this.jugadores.jugador.turnoActual = true;
            this.jugadores.jugador.generarLog(" Es mano");
        }else if(this.jugadores.jugador.turnoActual == true && this.jugadores.cpu.turnoActual == false) {
            this.jugadores.jugador.turnoActual = false;
            this.jugadores.cpu.turnoActual = true;
            this.jugadores.cpu.generarLog(" Es mano");
        }else if(this.jugadores.jugador.turnoActual == false && this.jugadores.cpu.turnoActual == true) {
            this.jugadores.jugador.turnoActual = true;
            this.jugadores.cpu.turnoActual = false;
            this.jugadores.jugador.generarLog(" Es mano");
        };
    };

    finalizarPartida() {
        // finalizar la partida
    };

    finalizarMano() {
        this.display.displayCartasMano(true);
        this.display.displayCartasMesa(false);
        return this.iniciarMano();
    };

    // Para ejecuciones que nesecitens tiempo de ejecucion
    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};