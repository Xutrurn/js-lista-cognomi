// alert("Hello world");

var confirm = document.getElementById("conferma");
confirm.addEventListener("click", function() {

var cognomeUtente = document.getElementById("userLastName").value;
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.substr(1).toLowerCase();
document.getElementById("iLastName").innerHTML = cognomeUtente;


var elencoCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
document.getElementById("oList").innerHTML = elencoCognomi.join(' - ');

elencoCognomi.push(cognomeUtente);
elencoCognomi.sort();
document.getElementById("mList").innerHTML = elencoCognomi.join(' - ');

var posizione = elencoCognomi.indexOf(cognomeUtente);
document.getElementById("pos").innerHTML = (posizione + 1);

});









// console.log();
