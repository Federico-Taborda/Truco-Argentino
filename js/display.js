// Muestra u oculta elementos en la pantalla

class Display {

    // Muestra u oculta todas las cartas de la mesa
    displayCartasMesa(display) {
        if(display) {
            document.getElementById("Jugador-Mesa-1").style.display = "initial";
            document.getElementById("Jugador-Mesa-2").style.display = "initial";
            document.getElementById("Jugador-Mesa-3").style.display = "initial";
            document.getElementById("Jugador-Mesa-1").src = "";
            document.getElementById("Jugador-Mesa-2").src = "";
            document.getElementById("Jugador-Mesa-3").src = "";
        }else{
            document.getElementById("Jugador-Mesa-1").style.display = "none";
            document.getElementById("Jugador-Mesa-2").style.display = "none";
            document.getElementById("Jugador-Mesa-3").style.display = "none";
        };
    };
    
    // Muestra u oculta todas las cartas de la mano
    displayCartasMano(display) {
        if(display) {
            document.getElementById("Jugador-Mano-1").style.display = "initial";
            document.getElementById("Jugador-Mano-2").style.display = "initial";
            document.getElementById("Jugador-Mano-3").style.display = "initial";
        }else{
            document.getElementById("Jugador-Mano-1").style.display = "none";
            document.getElementById("Jugador-Mano-2").style.display = "none";
            document.getElementById("Jugador-Mano-3").style.display = "none";
        };
    };

    // Muestra en pantalla las cartas en mano del jugador
    mostrarCartasEnMano(jugador) {
        let manoJugador = jugador.mano;
        document.getElementById("Jugador-Mano-1").src = manoJugador[0].url;
        document.getElementById("Jugador-Mano-2").src = manoJugador[1].url;
        document.getElementById("Jugador-Mano-3").src = manoJugador[2].url;
    };

    // Mueve a la mesa la carta jugada del jugador
    mostrarCartaMesa(carta, jugador) {
        if(jugador.cartasJugadas.length == 1) {
            document.getElementById("Jugador-Mesa-1").src = carta.url;
        }else if(jugador.cartasJugadas.length == 2) {
            document.getElementById("Jugador-Mesa-2").src = carta.url;
        }else if(jugador.cartasJugadas.length == 3) {
            document.getElementById("Jugador-Mesa-3").src = carta.url;
        };
    };

    // Muestra un elemento si display es true sino se oculta
    displayElemento(id, display) {
        // console.log(id)
        if(display) {
            document.getElementById(`${id}`).style.display = "initial";
        }else{
            document.getElementById(`${id}`).style.display = "none";
        };
    };

    displayTruco() {
        this.displayElemento("truco", true);
        this.displayElemento("envido", true);
        this.displayElemento("falta-envido", true);
        this.displayElemento("al-mazo", true);
    };

    displayReTruco() {

    };

    displayEnvido() {

    };

    displayFlor() {

    };
};