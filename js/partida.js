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
        await this.accion(this.mostrarCartasEnMano());

        if(this.jugadores[0].turnoActual) {/* 
            this.displayElemento("truco", true);
            this.displayElemento("envido", true);
            this.displayElemento("quiero", true);
            this.displayElemento("no-quiero", true);
            this.displayElemento("al-mazo", true);
            this.esperarCartasJugador("Jugador-Mano-1", this.jugadores[0].mano[0]);
            this.esperarCartasJugador("Jugador-Mano-2", this.jugadores[0].mano[1]);
            this.esperarCartasJugador("Jugador-Mano-3", this.jugadores[0].mano[2]); */
            this.juegaJugador(
                ["truco", "envido", "quiero", "no-quiero", "al-mazo"], 
                ["Jugador-Mano-1", "Jugador-Mano-2", "Jugador-Mano-3"]
            );
        }else if(this.jugadores[1].turnoActual) {

        };
    };

    juegaJugador(cantos, cartas) {
        for(let i = 0; i < cantos.length; i++) {
            this.displayElemento(cantos[i], true);
        };
        
        for(let j = 0; j < cantos.length; j++) {
            this.esperarCantosJugador(cantos[j]);
        };
        
        for(let k = 0; k < cartas.length; k++) {
            this.esperarCartasJugador(cartas[k], this.jugadores[0].mano[k]);
        };
    }; 
    
    esperarCartasJugador(id, carta) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            this.jugadores[0].jugarCarta(carta);
            this.displayElemento(id, false);
            this.mostrarCartaMesa(carta);
        });
    };
    
    esperarCantosJugador(id) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            if(id == "truco") {
                this.jugadores[0].truco();

            }else if(id == "re-truco") {
                this.jugadores[0].reTruco();

            }else if(id == "vale-cuatro") {
                this.jugadores[0].valeCuatro();
                
            }else if(id == "envido") {
                this.jugadores[0].envido();
                
            }else if(id == "real-envido") {
                this.jugadores[0].realEnvido();
                
            }else if(id == "falta-envido") {
                this.jugadores[0].faltaEnvido();
                
            }else if(id == "flor") {
                this.jugadores[0].flor();
                
            }else if(id == "contra-flor") {
                this.jugadores[0].contraFlor();
                
            }else if(id == "flor-contra-al-resto") {
                this.jugadores[0].contraFlorAlResto();
                
            }else if(id == "quiero") {
                this.jugadores[0].aceptar_rechazar(true);
                
            }else if(id == "no-quiero") {
                this.jugadores[0].aceptar_rechazar(false);
                
            }else if(id == "al-mazo") {
                this.jugadores[0].rendirMano();
                this.finalizarMano();
            };
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
        document.getElementById("Jugador-Mano-1").src = manoJugador[0].url;
        document.getElementById("Jugador-Mano-2").src = manoJugador[1].url;
        document.getElementById("Jugador-Mano-3").src = manoJugador[2].url;
    };

    mostrarCartaMesa(carta) {
        if(this.jugadores[0].cartasJugadas.length == 1) {
            document.getElementById("Jugador-Mesa-1").src = carta.url;
        }else if(this.jugadores[0].cartasJugadas.length == 2) {
            document.getElementById("Jugador-Mesa-2").src = carta.url;
        }else if(this.jugadores[0].cartasJugadas.length == 3) {
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
        if(this.jugadores[0].turnoActual == false && this.jugadores[1].turnoActual == false) {
            let random = Math.floor(Math.random() * this.jugadores.length);
            this.jugadores[random].turnoActual = true;
            this.jugadores[random].generarLog(" Es mano");
        }else if(this.jugadores[0].turnoActual == true && this.jugadores[1].turnoActual == false) {
            this.jugadores[0].turnoActual = false;
            this.jugadores[1].turnoActual = true;
            this.jugadores[1].generarLog(" Es mano");
        }else if(this.jugadores[0].turnoActual == false && this.jugadores[1].turnoActual == true) {
            this.jugadores[0].turnoActual = true;
            this.jugadores[1].turnoActual = false;
            this.jugadores[0].generarLog(" Es mano");
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