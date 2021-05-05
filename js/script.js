/* 
(1) Il computer deve generare 16 numeri casuali tra 1 e 100.
(1-B) I numeri non possono essere duplicati.
(2) Chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
(2-B) L'utente non può inserire più volte lo stesso numero.
(3) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
(4) La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
(5)Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
\\----------------------------------//
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
\\----------------------------------//
*/

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
var bombs = [];
var userChoice = [];
var gameOver = false;
var difficulty = parseInt(prompt("Scegli la difficoltà tra: facile (1), medio (2), difficile (3)"));
switch (difficulty) {
    case 1:
        maxNumber = 100;
        break;
    case 2:
        maxNumber = 80;
        break;
    case 3:
        maxNumber = 50;
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
            alert("GAME OVER\nHai colpito la bomba!\nHai totalizzato: " + userChoice.length + " punti.");
        } else {
            userChoice.push(numeroUtente);
        }
    }
}
if (!gameOver) {
    alert("Complimenti! Hai vinto!\nHai totalizzato: " + userChoice.length + " punti.")
}
console.log("BOMBE", bombs, "SCELTA UTENTE", userChoice);
/* DEBUG */