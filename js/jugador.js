class Jugador {
    constructor(Nombre){
        this.Nombre = Nombre;
        this.carta1;
        this.carta2;
        this.carta3;
    };

    tomarCarta(){
        this.carta1 = Math.floor(Math.random() * mazo.length);
        this.carta2 = Math.floor(Math.random() * mazo.length);
        this.carta3 = Math.floor(Math.random() * mazo.length);
    };
};