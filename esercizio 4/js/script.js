/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */


const numberRequest = [];
let somma = 0;


while(somma < 50){
    const request = parseInt( prompt('dammi un numero?'));
    numberRequest.push(request);
    console.log(numberRequest);
    somma += request;
    console.log(somma);
}