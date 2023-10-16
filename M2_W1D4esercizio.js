/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In JavaScript i datatype rappresentano un valore assegnato ad una variabile. Questo valore può essere espresso in diversi modi. Per fare un esempio,
il nome di una persona o la sua età è un datatype. La persona è una variabile, il nome o l'età è un valore assegnato.
I principali datatype sono:
- Stringa (string): è una informazione sottoforma di testo (es.: Francesco) e si racchiude fra le virvolette (es.: "Francesco")
- Numero (number): informazione numerica, intera o decimale (es.: 10). Non ha bisogno delle virgolette.
- Indefinito (undefined): è un valore indefinito, non assegnato. Immagina di ricevere una calza per il giorno dell'epifania,
ti aspetti di trovare tanti dolci ma dentro non ci sono. In JavaScript è un modo per dichiarare un elemento ma senza il suo contenuto. Il risultato sarà "undefined"
- Nulla (null): dichiara esplicitamente l'assenza di un certo valore. Immagina che di ricevere la calza e allo stesso tempo ti dicono che è vuota.
- Booleani (boolean): valore che esprime se è vero o falso (true o false).
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in JavaScript è una raccolta di informazioni che possiamo assegnare ad una variabile. L'assegnazione di diversi datatype ad una variabile crea un oggetto.
I valori espressi nell'oggetto vengono racchiusi dalle parentesi graffe. Es.:
let spartito = {
    titolo: "So What",
    autore: "Miles Davis",
    data: 1959
}; */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero12 = 12;
let numero20 = 20;

console.log(numero12 + numero20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Francesco";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero4 = 4;

console.log(numero4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
