const palos = ["♦", "♥", "♣", "♠"];

const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const palo = palos[Math.floor(Math.random() * palos.length)];

const numero = numeros[Math.floor(Math.random() * numeros.length)];


document.getElementById("paloTop").innerHTML = palo;

document.getElementById("paloBottom").innerHTML = palo;

document.getElementById("numeroCentro").innerHTML = numero;

const card = document.getElementById("card");

card.classList.remove("spade", "club", "heart", "diamond");

if (palo === "♠") card.classList.add("spade");

if (palo === "♣") card.classList.add("club");

if (palo === "♥") card.classList.add("heart");

if (palo === "♦") card.classList.add("diamond");

