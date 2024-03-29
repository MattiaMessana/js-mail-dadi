//TEST
// alert("ciao!");

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1. Generiamo numero random per utente 
//2. Generiamo numero random per pc 
//3. controlliamo chi ha il numero più alto 
//4. stampiamo output in pagina del vincitore 


//ESECIUZIONE 

//individuiamo il bottone in pagina
const rollDiceButton = document.getElementById('btn');

//lanciamo il programma al clik sul bottone 
rollDiceButton.addEventListener('click', function() {

//generiamo numero random da 1 a 6 per utente
  const userNumber = Math.floor(Math.random() * 6) + 1;
  console.log(userNumber);
//generiamo numero random da 1 a 6 per pc 
  const computerNumber = Math.floor(Math.random() * 6) + 1;
  console.log(computerNumber);

//individuiamo in pagina i dadi ed il container per la stampa dei risultati 
  const userDice = document.getElementById('user-dice');
  const computerDice = document.getElementById('computer-dice');
  const resultDisplay = document.getElementById('result');

//stampiamo in pagina il valore dei dadi 
  userDice.innerHTML = userNumber;
  computerDice.innerHTML = computerNumber;

//stampiamo in pagina il risultato 
  if (userNumber > computerNumber) {
    resultDisplay.innerHTML = "HAI VINTO!";
  } else if (userNumber < computerNumber) {
    resultDisplay.innerHTML = " :( RITENTA SARAI PIU' FORTUNATO";
  } else {
    resultDisplay.innerHTML = "PAREGGIO";
  }
});
