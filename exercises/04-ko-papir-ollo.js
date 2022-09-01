// Kő - papír - olló játék
// Írj egy programot, amiben meg lehet adni a játékos1 mutatását, és a játékos2 mutatását,
// és a program kiértékeli a menetet, majd kiírja, hogy jatékos1 vagy játékos2 nyert-e.

// Kód vázlat:
/*

let jatekos1 = 'kő';
let jatekos2 = 'papír';

...

... console.log('játékos1 nyert!)

...

*/

// Haladó: véletlenszerű legyen a mutatás

let jatekos1 = process.argv[2];
let jatekos2;

let veletlen = Math.floor(Math.random() * 3);
if (veletlen == 0) {
  jatekos2 = "kő";
} else if (veletlen == 1) {
  jatekos2 = "papír";
} else {
  jatekos2 = "olló";
}

console.log('Te mutatásod: ', jatekos1);
console.log('A Gép mutatása: ', jatekos2);

if (jatekos1 === jatekos2) {
  console.log("Döntetlen!");
} else if (jatekos1 === "kő" && jatekos2 === "olló") {
  console.log("Te győztél!");
} else if (jatekos1 === "papír" && jatekos2 === "kő") {
  console.log("Te győztél!");
} else if (jatekos1 === "olló" && jatekos2 === "papír") {
  console.log("Te győztél!");
} else {
  console.log("A gép győzőtt.");
}
