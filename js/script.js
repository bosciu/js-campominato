/* FUNCTIONS */

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {*} element 
 * @param {array} array 
 */
function isInArray(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
}
/* /FUNCTIONS */
var maxNumber = 100;
var maxAttempts = maxNumber - 16;
var moltiplicatorePunti = 1;
var bombs = [];
var userChoice = [];
var gameOver = false;
var difficulty = parseInt(prompt("Scegli la difficoltà tra: facile (1), medio (2), difficile (3)\nIn base alla difficoltà verrà incrementato il moltiplicatore di 0.5"));


switch (difficulty) {
    case 1:
        maxNumber = 100;
        break;
    case 2:
        maxNumber = 80;
        moltiplicatorePunti = 1.5;
        break;
    case 3:
        maxNumber = 50;
        moltiplicatorePunti = 2;
        break;
    default:
        alert("Errore nella selezione della difficoltà. Verrà impostato facile di default.");
}

/* Generare 16 numeri casuali e verificare non ci siano duplicati */
while (bombs.length < 16) {
    var numeroCasuale = getRandomNumber(1, maxNumber);

    if (!isInArray(numeroCasuale, bombs)) {
        bombs.push(numeroCasuale);
    }
}

/* Chiedi all'utente 100 - 16 volte di inserire un numero, niente doppioni */
while (userChoice.length < maxAttempts && gameOver == false) {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + maxNumber + "!"));

    if (!isInArray(numeroUtente, userChoice) && numeroUtente > 0 && numeroUtente < maxNumber + 1 && !isNaN(numeroUtente)) {

        if (isInArray(numeroUtente, bombs)) {
            gameOver = true;
            alert("GAME OVER\nHai colpito la bomba!\nHai totalizzato: " + (userChoice.length * moltiplicatorePunti) + " punti.");
        } else {
            userChoice.push(numeroUtente);
        }
    }
}
if (!gameOver) {
    alert("Complimenti! Hai vinto!\nHai totalizzato: " + (userChoice.length * moltiplicatorePunti) + " punti.")
}
console.log("BOMBE", bombs, "SCELTA UTENTE", userChoice);
/* DEBUG */