// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let numberRequest = parseInt( prompt('dimmi un numero'));


if( numberRequest % 2 === 0 ){
    alert(numberRequest)
}
else{
    alert(numberRequest+1)
}