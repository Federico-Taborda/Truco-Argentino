class Mazo {
    constructor() {
        this.mazo = [];
    };

    nuevoMazo() {
        return this.mazo = [
            new Carta("1 de Espada", "Espadas", 14, "img/espadas_1.jpg"),
            new Carta("1 de Basto", "Bastos", 13, "img/bastos_1.jpg"),
            new Carta("7 de Espadas", "Espadas", 12, "img/espadas_7.jpg"),
            new Carta("7 de Oros", "Oros", 11, "img/oros_7.jpg"),
            new Carta("3 de Espadas", "Espadas", 10, "img/espadas_3.jpg"),
            new Carta("3 de Bastos", "Bastos", 10, "img/bastos_3.jpg"),
            new Carta("3 de Oros", "Oros", 10, "img/oros_3.jpg"),
            new Carta("3 de Copas", "Copas", 10, "img/copas_3.jpg"),
            new Carta("2 de Espadas", "Espadas", 9, "img/espadas_2.jpg"),
            new Carta("2 de Bastos", "Bastos", 9, "img/bastos_2.jpg"),
            new Carta("2 de Oros", "Oros", 9, "img/oros_2.jpg"),
            new Carta("2 de Copas", "Copas", 9, "img/copas_2.jpg"),
            new Carta("1 de Oros", "Oros", 8, "img/oros_1.jpg"),
            new Carta("1 de Copas", "Copas", 8, "img/copas_1.jpg"),
            new Carta("12 de Espadas", "Espadas", 7, "img/espadas_12.jpg"),
            new Carta("12 de Bastos", "Bastos", 7, "img/bastos_12.jpg"),
            new Carta("12 de Oros", "Oros", 7, "img/oros_12.jpg"),
            new Carta("12 de Copas", "Copas", 7, "img/copas_12.jpg"),
            new Carta("11 de Espada", "Espadas", 6, "img/espadas_11.jpg"),
            new Carta("11 de Bastos", "Bastos", 6, "img/bastos_11.jpg"),
            new Carta("11 de Oros", "Copas", 6, "img/oros_11.jpg"),
            new Carta("11 de Copas", "Copas", 6, "img/copas_11.jpg"),
            new Carta("10 de Espadas", "Espadas", 5, "img/espadas_10.jpg"),
            new Carta("10 de Bastos", "Bastos", 5, "img/bastos_10.jpg"),
            new Carta("10 de Oros", "Oros", 5, "img/oros_10.jpg"),
            new Carta("10 de Copas", "Copas", 5, "img/copas_10.jpg"),
            new Carta("7 de Copas", "Copas", 4, "img/copas_7.jpg"),
            new Carta("7 de Bastos", "Bastos", 4, "img/bastos_7.jpg"),
            new Carta("6 de Espadas", "Espadas", 3, "img/espadas_6.jpg"),
            new Carta("6 de Bastos", "Bastos", 3, "img/bastos_6.jpg"),
            new Carta("6 de Oros", "Oros", 3, "img/oros_6.jpg"),
            new Carta("6 de Copas", "Copas", 3, "img/copas_6.jpg"),
            new Carta("5 de Espadas", "Espadas", 2, "img/espadas_5.jpg"),
            new Carta("5 de Bastos", "Bastos", 2, "img/bastos_5.jpg"),
            new Carta("5 de Oros", "Oros", 2, "img/oros_5.jpg"),
            new Carta("5 de Copas", "Copas", 2, "img/copas_5.jpg"),
            new Carta("4 de Espadas", "Espadas", 1, "img/espadas_4.jpg"),
            new Carta("4 de Bastos", "Bastos", 1, "img/bastos_4.jpg"),
            new Carta("4 de Oros", "Oros", 1, "img/oros_4.jpg"),
            new Carta("4 de Copas", "Copas", 1, "img/copas_4.jpg"),
        ];
    };

    quitarCartaDelMazo(nombre) {
        this.mazo.map((carta, index) => {
            if(nombre == carta.nombre) {
                this.mazo.slice(index, 1);
            };
        });
    };
};