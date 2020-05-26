class Tabla {
    constructor() {
        this.puntos = 0; // 15p o 30p
        this.jugadores = [];
    };

    dibujarJugadoresEnLaTabla() {
        let tablero = document.getElementById("Puntajes");
        this.jugadores.forEach(jugador => {
            const { nombre, puntos } = jugador;
            tablero.innerHTML += `<h2 id="${nombre}">${nombre}: ${puntos}</h2>`;
        });
    };

    actualizarPuntos() {
        // agregar puntos a la tabla
    };
};