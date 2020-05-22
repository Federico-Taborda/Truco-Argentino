let turno = 0;
let turno_Jugador = false, turno_CPU = false;

const mentir = [Miente = true, Miente = false];
const acepta = [Quiero = true, Quiero = false];

const textos = [
    ["Quiero", "No quiero"],
    ["Envido", "Real Envido", "Falta Envido"],
    ["Truco", "Quiero Retruco", "Quiero vale cuatro"],
    "Me voy al mazo",
];

let carta_Imagen1 = document.getElementById("carta1"),
    carta_Imagen2 = document.getElementById("carta2"),
    carta_Imagen3 = document.getElementById("carta3");

const cartas_En_Mano_Player = [],
      cartas_En_Mano_CPU = [],
      carta_Judagada_Jugador = [],
      carta_Judagada_CPU = [],
      TIPO_PLAYER = [],
      TIPO_CPU = [];

repartir.onclick = Repartir = () => {
    borrarCartasJugadas();
    console.clear();
    turno++;
    
    Jugador.tomarCarta();
    CPU.tomarCarta();
    
    cartas_En_Mano_Player.push(CARTAS[Jugador.carta1], CARTAS[Jugador.carta2], CARTAS[Jugador.carta3]);
    cartas_En_Mano_CPU.push(CARTAS[CPU.carta1], CARTAS[CPU.carta2], CARTAS[CPU.carta3]);
    
    mostrar();
    buscarTipo(cartas_En_Mano_Player, cartas_En_Mano_CPU);
    
    // Si turno es par le toca a Jugador si no a CPU
    if(turno % 2){
        turnoJugador();
    }else{
        turnoCpu();
    }
    
    console.log(`CARTA CPU || ${CARTAS[CPU.carta1].Nombre}`);
    console.log(`CARTA CPU || ${CARTAS[CPU.carta2].Nombre}`);
    console.log(`CARTA CPU || ${CARTAS[CPU.carta3].Nombre}`);
}

const turnoJugador = () => {
    turno_Jugador = true;
    turno_CPU = false;
    console.log("Turno Jugador || " + turno_Jugador);

    if(turno_Jugador == true && cartas_En_Mano_Player.length >= 2){
        // Juega la primer Carta
        carta1.onclick = PrimerCarta = () => {
            borrar_jugador(Jugador.carta1);
            carta_Judagada_Jugador.push(CARTAS[Jugador.carta1]);
            
            carta_Imagen1.src = "img/dorso.jpg";
        }
        
        // Juega la segunda carta
        carta2.onclick = SegundaCarta = () => {
            borrar_jugador(Jugador.carta2);
            carta_Judagada_Jugador.push(CARTAS[Jugador.carta2]);
            
            carta_Imagen2.src = "img/dorso.jpg";
        }
        
        // Juega la tercera Carta
        carta3.onclick = TercerCarta = () => {
            borrar_jugador(Jugador.carta3);
            carta_Judagada_Jugador.push(CARTAS[Jugador.carta3]);
            
            carta_Imagen3.src = "img/dorso.jpg";
        }
    }
}

const turnoCpu = () => {
    turno_CPU = true;
    turno_Jugador = false;

    console.log("Turno CPU || " + turno_CPU);

    if(cartas_En_Mano_CPU.length >= 2){
        // La CPU Juega
        function CPU_CARTA_1(){
            borrarCpu(CPU.carta1);
            carta_Judagada_CPU.push(CPU.carta1);
        }

        function CPU_CARTA_2(){
            borrarCpu(CPU.carta2);
            carta_Judagada_CPU.push(CPU.carta2);
        }

        function CPU_CARTA_3(){
            borrarCpu(CPU.carta3);
            carta_Judagada_CPU.push(CPU.carta3);
        }
    }
}

/* =============================================================================================== */
/* Hacer una prueba de esto aparta para comprobar si funciona */
// Evalua Cartas en Mesa
const evaluar = () => {
    let puntoCpu = 0;
    let puntoJugador = 0;
    
    for(let i = 0; i < 3; i++){
        if(carta_Judagada_Jugador[i] > carta_Judagada_CPU[i]){ 
            puntoJugador++;
        }else if(carta_Judagada_Jugador[i] < carta_Judagada_CPU[i]){
            puntoCpu++
        }else{
            puntoJugador++;
            puntoCpu++;
        }}
    console.log("cpu puntos " + puntoCpu);
    console.log("player puntos " + puntoJugador);
}
/* =============================================================================================== */
    
// Acepta o no 
acepta.onclick = Acepta = () => {
    ACEPTA[0];
    /* console.log("Quiero"); */
};

noAcepta.onclick = NoAcepta = () => { 
    ACEPTA[1]; 
    /* console.log("No Quiero"); */ 
};

// Cartas al mazo
alMazo.onclick = ALMAZO = () => {
    borrar_jugador(Jugador.carta1);
    borrar_jugador(Jugador.carta2);
    borrar_jugador(Jugador.carta3);

    borrarCpu(CPU.carta1);
    borrarCpu(CPU.carta2);
    borrarCpu(CPU.carta3);

    borrarCartasJugadas();
    console.clear();
    Repartir();
};

// Muestra en pantalla elementos
const mostrar = () => {
    carta_Imagen1.style.display = "initial";
    carta_Imagen2.style.display = "initial";
    carta_Imagen3.style.display = "initial";
    
    carta_Imagen1.src = CARTAS[Jugador.carta1].Url;
    carta_Imagen2.src = CARTAS[Jugador.carta2].Url;
    carta_Imagen3.src = CARTAS[Jugador.carta3].Url;
}

// Borra la carta en mano de los jugadores y Jugadas
const borrar_jugador = (indice) => {
    cartas_En_Mano_Player.splice(CARTAS[indice], 1);
    TIPO_PLAYER.splice(CARTAS[indice], 1);
}

const borrarCpu = (indice) => {
    cartas_En_Mano_CPU.splice(CARTAS[indice], 1);
    TIPO_CPU.splice(CARTAS[indice], 1);
}

const borrarCartasJugadas = () =>{
    carta_Judagada_Jugador.length = 0;
    carta_Judagada_CPU.length = 0;
}

// Busca el tipo de carta en mano de los jugadores
const buscarTipo = (ManoPlayer, ManoCPU) => {
    let bastosJ = 0, espadasJ = 0, copasJ = 0, orosJ = 0;
    let bastosC = 0, espadasC = 0, copasC = 0, orosC = 0;

    for(i = 0; i < ManoPlayer.length; i++){
        TIPO_PLAYER.push(ManoPlayer[i].Tipo);
        if(ManoPlayer[i].Tipo == "Bastos"){
            bastosJ++;
        }else if(ManoPlayer[i].Tipo == "Espadas"){
            espadasJ++;
        }else if(ManoPlayer[i].Tipo == "Copas"){
            copasJ++
        }else if(ManoPlayer[i].Tipo == "Oros"){
            orosJ++;
        }
    }
    
    for(j = 0; j < ManoCPU.length; j++){
        TIPO_CPU.push(ManoCPU[j].Tipo);
        if(ManoCPU[j].Tipo == "Bastos"){
            bastosC++;
        }else if(ManoCPU[j].Tipo == "Espadas"){
            espadasC++;
        }else if(ManoCPU[j].Tipo == "Copas"){
            copasC++
        }else if(ManoCPU[j].Tipo == "Oros"){
            orosC++;
        }
    }

    /* console.log("J ESPADAS: " + espadasJ);
    console.log("J BASTOS: " + bastosJ);
    console.log("J COPAS: " + copasJ);
    console.log("J OROS: " + orosJ);
    
    console.log("C ESPADAS: " + espadasC);
    console.log("C BASTOS: " + bastosC);
    console.log("C COPAS: " + copasC);
    console.log("C OROS: " + orosC); */
}





