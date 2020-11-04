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
        await this.accion(this.mazo.nuevoMazo());
        await this.accion(this.reiniciarManoMesa());
        await this.jugadores.jugador.tomarCartas(this.mazo);
        await this.jugadores.cpu.tomarCartas(this.mazo);
        await this.accion(this.mostrarCartasEnMano());

        if(this.jugadores.jugador.turnoActual) {
            this.displayElemento("truco", true);
            this.displayElemento("envido", true);
            this.displayElemento("quiero", true);
            this.displayElemento("no-quiero", true);
            this.displayElemento("al-mazo", true);
            this.esperarCartasJugador("Jugador-Mano-1", this.jugadores.jugador.mano[0]);
            this.esperarCartasJugador("Jugador-Mano-2", this.jugadores.jugador.mano[1]);
            this.esperarCartasJugador("Jugador-Mano-3", this.jugadores.jugador.mano[2]);
            this.juegaJugador(
                ["truco", "envido", "quiero", "no-quiero", "al-mazo"], 
                ["Jugador-Mano-1", "Jugador-Mano-2", "Jugador-Mano-3"]
            );
        }else if(this.jugadores.cpu.turnoActual) {
            // Aqui jugaria el cpu
        };
    };

    juegaJugador(cantos, cartas) {
        // Muestra los cantos disponibles en el tablero
        for(let i = 0; i < cantos.length; i++) {
            this.displayElemento(cantos[i], true);
        };
        
        // Escucha los cantos del jugador
        for(let j = 0; j < cantos.length; j++) {
            this.esperarCantosJugador(cantos[j]);
        };
        
        // Escucha que carta clickea el jugador
        for(let k = 0; k < cartas.length; k++) {
            this.esperarCartasJugador(cartas[k], this.jugadores.jugador.mano[k]);
        };
    }; 
    
    esperarCartasJugador(id, carta) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            this.jugadores.jugador.jugarCarta(carta);
            this.displayElemento(id, false);
            this.mostrarCartaMesa(carta);
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

    // Muestra en pantalla las cartas del jugador
    mostrarCartasEnMano() {
        let manoJugador = this.jugadores.jugador.mano;
        document.getElementById("Jugador-Mano-1").src = manoJugador[0].url;
        document.getElementById("Jugador-Mano-2").src = manoJugador[1].url;
        document.getElementById("Jugador-Mano-3").src = manoJugador[2].url;
    };

    // Mueve a la mesa la carta jugada del jugador
    mostrarCartaMesa(carta) {
        if(this.jugadores.jugador.cartasJugadas.length == 1) {
            document.getElementById("Jugador-Mesa-1").src = carta.url;
        }else if(this.jugadores.jugador.cartasJugadas.length == 2) {
            document.getElementById("Jugador-Mesa-2").src = carta.url;
        }else if(this.jugadores.jugador.cartasJugadas.length == 3) {
            document.getElementById("Jugador-Mesa-3").src = carta.url;
        };
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

    // Si display es true se muestra sino se oculta
    displayElemento(id, display) {
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