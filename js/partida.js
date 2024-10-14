class Partida {
    constructor(player_one, player_two, mazo, puntos) {
        this.player_one = player_one;
        this.player_two = player_two;
        this.mazo = mazo;
        this.puntos = puntos;
        this.cantos = [
            "truco",
            "re-truco",
            "vale-cuatro",
            "envido",
            "real-envido",
            "falta-envido",
            "flor",
            "contra-flor",
            "flor-contra-al-resto",
            "quiero", 
            "no-quiero",
            "al-mazo"
        ];
    };

    iniciarPartida() {
        this.decidirMano();
        return this.iniciarMano();
    };
    
    async iniciarMano() {
        this.player_one.mano = this.mazo.repartirCartas;
        this.player_two.mano = this.mazo.repartirCartas;
        
        if(this.player_one.turnoActual) {
            
        }else if(this.player_two.turnoActual) {
            // Aqui jugaria el cpu
        };
    };

    cartasJugablesJugador(cartas) {
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
    
    esperarCantosJugador() {
        for(let i = 0; i < this.cantos.length; i++) {
            document.getElementById(`${this.cantos[i]}`).addEventListener("click", () => {
                switch (this.cantos[i]) {
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
    };
    
    // Deja de escuchar los cantos
    detenerCantosJugador() {
        for(let i = 0; i < this.cantos.length; i++) {
            document.getElementById(`${this.cantos[i]}`).removeEventListener("click", () => {});
        };     
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
        if(this.player_one.turnoActual == false && this.player_two.turnoActual == false) {
            this.player_one.turnoActual = true;
            this.player_one.generarLog("es mano");
        }else if(this.jugadores.jugador.turnoActual == true && this.jugadores.cpu.turnoActual == false) {
            this.player_twoturnoActual = false;
            this.player_two.cpu.turnoActual = true;
            this.player_two.generarLog("es mano");
        }else if(this.player_one.turnoActual == false && this.player_two.turnoActual == true) {
            this.player_one.turnoActual = true;
            this.player_two.turnoActual = false;
            this.player_one.generarLog("es mano");
        };
    };

    finalizarPartida() {
        // finalizar la partida
    };

    finalizarMano() {
        this.detenerCantosJugador();
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