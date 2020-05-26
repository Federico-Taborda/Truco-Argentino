let cartas = document.getElementsByClassName("cartasEnMano");

for(let i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener("mouseover", () => {
        cartas[i].style.transform = "translateY(-10px)";
        cartas[i].style.boxShadow = "5px 5px 5px #475577";
    })
    
    cartas[i].addEventListener("mouseout", () => {
        cartas[i].style.transform = "translateY(0px)";
        cartas[i].style.boxShadow = "none";
    })
};