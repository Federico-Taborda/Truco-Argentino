class Mazo {
    constructor() {
        this.cartas = [];
    };

    nuevoMazo() {
        this.cartas = [];
        return this.cartas = [
            new Carta("1 de Espada", "Espadas", 14, 1, 1,"Img/espadas_1.jpg"),
            new Carta("1 de Basto", "Bastos", 13, 1, 1, "Img/bastos_1.jpg"),
            new Carta("7 de Espadas", "Espadas", 12, 7, 7, "Img/espadas_7.jpg"),
            new Carta("7 de Oros", "Oros", 11, 7, 7, "Img/oros_7.jpg"),
            new Carta("3 de Espadas", "Espadas", 10, 3, 3, "Img/espadas_3.jpg"),
            new Carta("3 de Bastos", "Bastos", 10, 3, 3, "Img/bastos_3.jpg"),
            new Carta("3 de Oros", "Oros", 10, 3, 3, "Img/oros_3.jpg"),
            new Carta("3 de Copas", "Copas", 10, 3, 3, "Img/copas_3.jpg"),
            new Carta("2 de Espadas", "Espadas", 9, 2, 2, "Img/espadas_2.jpg"),
            new Carta("2 de Bastos", "Bastos", 9, 2, 2, "Img/bastos_2.jpg"),
            new Carta("2 de Oros", "Oros", 9, 2, 2, "Img/oros_2.jpg"),
            new Carta("2 de Copas", "Copas", 9, 2, 2, "Img/copas_2.jpg"),
            new Carta("1 de Oros", "Oros", 8, 1, 1, "Img/oros_1.jpg"),
            new Carta("1 de Copas", "Copas", 8, 1, 1, "Img/copas_1.jpg"),
            new Carta("12 de Espadas", "Espadas", 7, 12, 20, "Img/espadas_12.jpg"),
            new Carta("12 de Bastos", "Bastos", 7, 12, 20, "Img/bastos_12.jpg"),
            new Carta("12 de Oros", "Oros", 7, 12, 20, "Img/oros_12.jpg"),
            new Carta("12 de Copas", "Copas", 7, 12, 20, "Img/copas_12.jpg"),
            new Carta("11 de Espada", "Espadas", 6, 11, 20, "Img/espadas_11.jpg"),
            new Carta("11 de Bastos", "Bastos", 6, 11, 20, "Img/bastos_11.jpg"),
            new Carta("11 de Oros", "Copas", 6, 11, 20, "Img/oros_11.jpg"),
            new Carta("11 de Copas", "Copas", 6, 11, 20, "Img/copas_11.jpg"),
            new Carta("10 de Espadas", "Espadas", 5, 10, 20, "Img/espadas_10.jpg"),
            new Carta("10 de Bastos", "Bastos", 5, 10, 20, "Img/bastos_10.jpg"),
            new Carta("10 de Oros", "Oros", 5, 10, 20, "Img/oros_10.jpg"),
            new Carta("10 de Copas", "Copas", 5, 10, 20, "Img/copas_10.jpg"),
            new Carta("7 de Copas", "Copas", 4, 7, 7, "Img/copas_7.jpg"),
            new Carta("7 de Bastos", "Bastos", 4, 7, 7, "Img/bastos_7.jpg"),
            new Carta("6 de Espadas", "Espadas", 3, 6, 6, "Img/espadas_6.jpg"),
            new Carta("6 de Bastos", "Bastos", 3, 6, 6,"Img/bastos_6.jpg"),
            new Carta("6 de Oros", "Oros", 3, 6, 6, "Img/oros_6.jpg"),
            new Carta("6 de Copas", "Copas", 3, 6, 6, "Img/copas_6.jpg"),
            new Carta("5 de Espadas", "Espadas", 2, 5, 5, "Img/espadas_5.jpg"),
            new Carta("5 de Bastos", "Bastos", 2, 5, 5, "Img/bastos_5.jpg"),
            new Carta("5 de Oros", "Oros", 2, 5, 5, "Img/oros_5.jpg"),
            new Carta("5 de Copas", "Copas", 2, 5, 5, "Img/copas_5.jpg"),
            new Carta("4 de Espadas", "Espadas", 1, 4, 4, "Img/espadas_4.jpg"),
            new Carta("4 de Bastos", "Bastos", 1, 4, 4, "Img/bastos_4.jpg"),
            new Carta("4 de Oros", "Oros", 1, 4, 4, "Img/oros_4.jpg"),
            new Carta("4 de Copas", "Copas", 1, 4, 4, "Img/copas_4.jpg"),
        ];
    };

    quitarCartaDelMazo(nombre) {
        this.cartas.map((carta, index) => {
            if(nombre == carta.nombre) {
                this.cartas.splice(index, 1);
            };
        });
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};

const mazo = new Mazo();