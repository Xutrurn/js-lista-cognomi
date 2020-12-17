// alert("Hello world");

var cognomeUtente = prompt("inserisci il tuo cognome");
console.log(cognomeUtente);
var cognomeUtenteCap = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
console.log(cognomeUtenteCap);
var elencoCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(elencoCognomi);
elencoCognomi.push(cognomeUtenteCap);
console.log(elencoCognomi);
elencoCognomi.sort();
console.log(elencoCognomi);
var posizione = elencoCognomi.indexOf(cognomeUtenteCap);
console.log(posizione + 1);









// console.log();
