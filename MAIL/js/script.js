//TEST
// alert("ciao!");


// 1. chiediamo all'utente la sua mail 
// 2. controlliamo se la sua mail è presente nella lista di chi puo accedere 
// 3. stampiamo in pagina il risultato del controllo

// Lista delle email autorizzate
const mailAuthorized = ["francesco.totti@gmail.com", "lucatoni@live.it", "edison.cavani@elmatador.com"] ;
console.log(mailAuthorized);

// Chiedi all'utente la sua email
const userMail = prompt("Inserisci la tua email:");
console.log(userMail);

// Flag per tenere traccia dello stato di autorizzazione
let authorized = false;

// Ciclo for per controllare se l'email è autorizzata
for (let i = 0; i < mailAuthorized.length; i++) {
    if (userMail === mailAuthorized[i]) {
        authorized = true;
    }
};

// Stampiamo  messaggio
const reslutElem = document.getElementById("idoneo");

if (authorized) {
    reslutElem.innerHTML = "Sei idoneo allo sconto"
    console.log(reslutElem);
} else {
    reslutElem.innerHTML = "Non sei idoneo allo sconto"
    console.log(reslutElem);
   
};
