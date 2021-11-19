/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */


// creo un array di numeri interi
const interNubers = [5, 6, 8, 9, 10, 20, 30];
let somma = 0;

for(let i = 0; i < interNubers.length; i++){

    let totalNumber = interNubers[i];

    if( i % 2 !== 0 ){
        console.log(totalNumber, i);
        somma += totalNumber;
        
    }
    
}
