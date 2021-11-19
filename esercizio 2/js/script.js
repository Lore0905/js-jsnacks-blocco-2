/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names = ['Alberto', 'Lucia', 'Francesco'];
const surname = ['Bordignon', 'Gasparotto', 'Mattioli'];
const newNamesArrey = []


for ( i = 0; i < names.length; i++){
    
    const falseName = names[Math.floor(Math.random() * (names.length - 1 + 1)) + 0];
    const falseSurname = surname[Math.floor(Math.random() * (names.length - 1 + 1)) + 0];
     
    const newName = falseName + ' ' + falseSurname;

    newNamesArrey.push(newName);

}

console.log(newNamesArrey);

