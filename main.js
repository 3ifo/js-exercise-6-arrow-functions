/* Crea una arrow function che accetta due numeri come parametri e restituisce la loro sottrazione. 

const sottrazione = (num1, num2) => {
  return num1 - num2;
};

let utente = prompt("Scrivi un numero");
let utente1 = prompt("Scrivi un secondo numero");

let risultato = sottrazione(utente, utente1);
console.log(risultato);*/

/* Esercizio 2: Crea un oggetto chiamato 'studente'. Dovrebbe avere proprietà per 'nome' e 'età'. Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.*/

let studente = {
  nome: "Leonardo",
  età: 28,
  stampa: function () {
    let risultato = this.nome + this.età;
    console.log(risultato);
  },
  calcola: function () {
    this.età = 28;
    while (this.età < 33) {
      this.età++;
      console.log(this.nome + this.età);
    }
  },
};
studente.calcola();
studente.stampa();
console.log(studente);
