//TEST
// alert("ciao!");

// 1. chiediamo all'utente la sua mail 
// 2. controlliamo se la sua mail è presente nella lista di chi puo accedere 
// 3. stampiamo in pagina il risultato del controllo


// Lista delle email autorizzate
const mailAuthorized = ["francesco.totti@gmail.com", "lucatoni@live.it", "edison.cavani@elmatador.com"];
console.log(mailAuthorized);

//Individuo il bottone che mi servirà per avviare il programma
const btn = document.getElementById("enter");


// Chiedi all'utente la sua email
const userMail = document.getElementById("mail");
console.log(userMail.value);

btn.addEventListener("click", function () {
    // Flag per tenere traccia dello stato di autorizzazione
    let authorized = false;
    // Ciclo for per controllare se l'email è autorizzata
    for (let i = 0; i < mailAuthorized.length; i++) {
        if (userMail.value === mailAuthorized[i]) {
            authorized = true;
        }
    }

    // Stampiamo  messaggio
    const resultElem = document.getElementById("idoneo");

    if (authorized) {
        resultElem.innerHTML = "Sei idoneo";
    } else {
        resultElem.innerHTML = "Non sei idoneo";
    }
});

