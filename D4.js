/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2)
  e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};
const myarea = area;
console.log(myarea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri 
 è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else num1 === num2;
  {
    return result * 3;
  }
  const result = num1 + num2;
};

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra 
 un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre
  qualora il numero fornito sia maggiore di 19.
*/
num3 = 19;
num4 = 4;
const crazyDiff = function (num3, num4) {
  if (num4 > num3) {
    return result2 * 3;
  } else num4 < num3;
  {
    num3 - num4;
  }
  const result2 = num3 + num4;
};

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400;
};

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
};

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (number) {
  return number % 7 || number % 3;
};

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  return str.split("").reverse().join("");
};

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata
  da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola
  contenuta nella stringa.
*/

const upperFirst = function (str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  return str.slice(1, -1);
};

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n
  e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 11);
    randomArray.push(randomNum);
  }
  return randomArray;
};
