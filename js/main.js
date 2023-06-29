const firstName = prompt ("Inserisci qui il tuo Nome"); 
const lastName = prompt ("Inserisciqui il tuo Cognome");
const colour = prompt ("Inserisci qui il tuo colore preferito");
const age = parseInt (prompt ("Inserisci qui la tua età"));

const number = (21 + age);

// password
const password = (firstName + lastName + colour + number);


// console.log(password);

//benvenuto
document.getElementById("user-name").innerHTML = firstName;

//inner-password
document.getElementById("password-text").innerHTML = password;

//dati inseriti
document.getElementById("name").innerHTML = firstName;
document.getElementById("surname").innerHTML = lastName;
document.getElementById("my-color").innerHTML = colour;
document.getElementById("my-age").innerHTML = age;
