/* 1. Crea una arrow function che accetta due numeri come parametri e restituisce la loro sottrazione. 

const sottrazione = (num1, num2) => {
  return num1 - num2;
};

let utente = prompt("Scrivi un numero");
let utente1 = prompt("Scrivi un secondo numero");

let risultato = sottrazione(utente, utente1);
console.log(risultato);*/

/* 2.Crea un oggetto chiamato 'studente'. Dovrebbe avere proprietà per 'nome' e 'età'. Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.

let studente = {
  nome: "Leonardo",
  età: 28,
  stampa: function () {
    let risultato = this.nome + this.età;
    console.log(risultato);
  },
  calcola: function () {
    this.età = 28;
    while (this.età < 29) {
      this.età++;
      console.log(this.nome + this.età);
    }
  },
};
studente.calcola();
studente.stampa();
console.log(studente); */

/* 3: Crea una semplice pagina HTML con un elemento div. Usa JavaScript per cambiare l'innerHTML e l'innerText del div. 
window.addEventListener("load", function () {
  const div = document.getElementById("cambio");
  div.innerText = "Forse ci sono riuscito";
  div.innerHTML += "<p>Ciao</p>";
}); */

/* Esercizio 4: Crea una lista non ordinata con tre elementi di lista. Usa JavaScript per aggiungere un nuovo elemento di lista alla fine della lista usando appendChild. Poi usa insertBefore per aggiungere un elemento di lista all'inizio della lista.

let ul = document.getElementById("lista");
let nuovoLiFine = document.createElement("li");
nuovoLiFine.innerText = "4";
ul.appendChild(nuovoLiFine);
let nuovoLiInizio = document.createElement("li");
nuovoLiInizio.innerText = "0";
ul.insertBefore(nuovoLiInizio, ul.firstElementChild);  */

/* Esercizio 5: Crea un elemento div con class 'blu'. Usa JavaScript per controllare al click se il div ha la classe 'blu' usando classList.includes(). Poi usa classList.add() per aggiungere una classe 'rosso' e classList.remove() per rimuovere la classe 'blu'.

window.addEventListener("click", function () {
  const div = document.querySelector(".blu");
  if (div) {
    console.log(div);
    if (div.classList.contains("blu")) {
      div.classList.add("red");
      div.classList.remove("blu");
    }
  }
}); */

/*Esercizio 6: Crea un pulsante in HTML. Usa JavaScript per impostare un attributo 'disabled' sul pulsante usando setAttribute().*/

const btn = document.querySelector(".btn");
btn.setAttribute("disabled", "true");
