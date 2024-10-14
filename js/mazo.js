class Mazo {
    constructor() {
        this.cartas = [
            new Carta("1 de Espada", "Espadas", 14, 1, 1,"Img/Espadas_1.jpg"),
            new Carta("1 de Basto", "Bastos", 13, 1, 1, "Img/Bastos_1.jpg"),
            new Carta("7 de Espadas", "Espadas", 12, 7, 7, "Img/Espadas_7.jpg"),
            new Carta("7 de Oros", "Oros", 11, 7, 7, "Img/Oros_7.jpg"),
            new Carta("3 de Espadas", "Espadas", 10, 3, 3, "Img/Espadas_3.jpg"),
            new Carta("3 de Bastos", "Bastos", 10, 3, 3, "Img/Bastos_3.jpg"),
            new Carta("3 de Oros", "Oros", 10, 3, 3, "Img/Oros_3.jpg"),
            new Carta("3 de Copas", "Copas", 10, 3, 3, "Img/Copas_3.jpg"),
            new Carta("2 de Espadas", "Espadas", 9, 2, 2, "Img/Espadas_2.jpg"),
            new Carta("2 de Bastos", "Bastos", 9, 2, 2, "Img/Bastos_2.jpg"),
            new Carta("2 de Oros", "Oros", 9, 2, 2, "Img/Oros_2.jpg"),
            new Carta("2 de Copas", "Copas", 9, 2, 2, "Img/Copas_2.jpg"),
            new Carta("1 de Oros", "Oros", 8, 1, 1, "Img/Oros_1.jpg"),
            new Carta("1 de Copas", "Copas", 8, 1, 1, "Img/Copas_1.jpg"),
            new Carta("12 de Espadas", "Espadas", 7, 12, 20, "Img/Espadas_12.jpg"),
            new Carta("12 de Bastos", "Bastos", 7, 12, 20, "Img/Bastos_12.jpg"),
            new Carta("12 de Oros", "Oros", 7, 12, 20, "Img/Oros_12.jpg"),
            new Carta("12 de Copas", "Copas", 7, 12, 20, "Img/Copas_12.jpg"),
            new Carta("11 de Espada", "Espadas", 6, 11, 20, "Img/Espadas_11.jpg"),
            new Carta("11 de Bastos", "Bastos", 6, 11, 20, "Img/Bastos_11.jpg"),
            new Carta("11 de Oros", "Copas", 6, 11, 20, "Img/Oros_11.jpg"),
            new Carta("11 de Copas", "Copas", 6, 11, 20, "Img/copas_11.jpg"),
            new Carta("10 de Espadas", "Espadas", 5, 10, 20, "Img/Espadas_10.jpg"),
            new Carta("10 de Bastos", "Bastos", 5, 10, 20, "Img/Bastos_10.jpg"),
            new Carta("10 de Oros", "Oros", 5, 10, 20, "Img/Oros_10.jpg"),
            new Carta("10 de Copas", "Copas", 5, 10, 20, "Img/Copas_10.jpg"),
            new Carta("7 de Copas", "Copas", 4, 7, 7, "Img/Copas_7.jpg"),
            new Carta("7 de Bastos", "Bastos", 4, 7, 7, "Img/Bastos_7.jpg"),
            new Carta("6 de Espadas", "Espadas", 3, 6, 6, "Img/Espadas_6.jpg"),
            new Carta("6 de Bastos", "Bastos", 3, 6, 6,"Img/Bastos_6.jpg"),
            new Carta("6 de Oros", "Oros", 3, 6, 6, "Img/Oros_6.jpg"),
            new Carta("6 de Copas", "Copas", 3, 6, 6, "Img/Copas_6.jpg"),
            new Carta("5 de Espadas", "Espadas", 2, 5, 5, "Img/Espadas_5.jpg"),
            new Carta("5 de Bastos", "Bastos", 2, 5, 5, "Img/Bastos_5.jpg"),
            new Carta("5 de Oros", "Oros", 2, 5, 5, "Img/Oros_5.jpg"),
            new Carta("5 de Copas", "Copas", 2, 5, 5, "Img/Copas_5.jpg"),
            new Carta("4 de Espadas", "Espadas", 1, 4, 4, "Img/Espadas_4.jpg"),
            new Carta("4 de Bastos", "Bastos", 1, 4, 4, "Img/Bastos_4.jpg"),
            new Carta("4 de Oros", "Oros", 1, 4, 4, "Img/Oros_4.jpg"),
            new Carta("4 de Copas", "Copas", 1, 4, 4, "Img/Copas_4.jpg"),
        ];
    };

    repartirCartas() {
        const conjuntoIndices = new Set();

        while (conjuntoIndices.size < 3) {
            const numeroAleatorio = Math.floor(Math.random() * (this.cartas.length - 1));
            conjuntoIndices.add(numeroAleatorio); 
        };

        const [cartaUno, cartaDos, cartaTres] = Array.from(conjuntoIndices);

        return [this.cartas[cartaUno], this.cartas[cartaDos], this.cartas[cartaTres]]
    };

    accion(funcion) {
        return new Promise((resolve, reject) => {
            resolve(funcion);
        });
    };
};