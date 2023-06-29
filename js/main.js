const firstName = prompt ("Inserisci qui il tuo Nome"); 
const lastName = prompt ("Inserisciqui il tuo Cognome");
const colour = prompt ("Inserisci qui il tuo colore preferito");
const number = '21'

const password = (firstName + lastName + colour + number);

console.log(password);

document.getElementById("password-text").innerHTML = password

