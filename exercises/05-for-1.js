// 1.
// Hozz létre és írass ki egy tömböt, amiben 0-tól 200-ig vannak számok!
// Segítség:
// let tomb = [];
// for (...) {
//    tomb.push(...)
// }

console.log("1. FELADAT===========================");
let tomb = [];
for (let i = 0; i <= 200; i++) {
  tomb.push(i);
}
console.log("Tömb elemei:");
for (let i = 0; i < tomb.length; i++) {
  console.log(tomb[i]);
}

// 2.
// Hozz létre és írass ki egy tömböt, amiben a 0-tól 200-ig található páros számok vannak!
// [0, 2, 4, 6, ....]

// MEGOLDÁS1
console.log("2. FELADAT===========================");
let tomb2 = [];
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    tomb2.push(i);
  }
}
console.log(tomb2);

// MEGOLDÁS2
console.log("2. FELADAT/2.MEGOLDÁS================");
tomb2 = [];
for (let i = 0; i <= 200; i = i + 2) {
  tomb2.push(i);
}
console.log(tomb2);

// 3.
// Hozz létre egy tömböt, amiben angolul vannak a számok 1-10-ig. Majd soronként,
// sorszámmal együtt írasd ki a tömböt!
// Out:
// 1 one
// 2 two
// ...
console.log("3. FELADAT===========================");
let tomb3 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

for (let i = 0; i < tomb3.length; i++) {
  console.log(i + 1, tomb3[i]);
}

// 4.
// Hozz létre és írass ki egy tömböt, amiben 100-tól lefelé vannak a 3-mal osztható 
// természetes számok!
// (Segítség: ha x % 3 === 0, akkor x osztható hárommal.)
console.log("4. FELADAT===========================");

let tomb4 = [];
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    tomb4.push(i);
  }
}
console.log(tomb4);

// 5.
// Hozz létre kézzel egy tömböt, ami nem egész számokat tartalmaz.
// Pl.: let tomb = [1.2, 4.23, 6.25, 2.556, 13.3, ...];
// Ezután for ciklus segítségével hozz létre egy olyan tömböt, ami ezeknek a számoknak a
// lefelé kerekített értékét tartalmazza!
// pl.: [1, 4, 6, 2, 13]
// Segítség: Math.floor()
console.log("5. FELADAT===========================");

let tomb5 = [1.2, 4.23, 6.25, 2.556, 13.3, 74.2, 1.11];
let tomb5floor = [];
for (let i = 0; i < tomb5.length; i++) {
  let lefeleKerekitett = Math.floor(tomb5[i]); 
  tomb5floor.push(lefeleKerekitett);
}
console.log(tomb5floor);


// 6. (Haladó)
// Hozd létre az alábbi tömböt: ['kő', 'papír', 'olló', 'gyík', 'spock']!
// Írasd ki a tömb egyik elemét véletlenszerűen! (Tehát pl. az egyik futtatás után
// az íratódjon ki, hogy 'kő', majd egy következő után pl. az, hogy 'spock'...).

console.log("6. FELADAT===========================");
let options =  ['kő', 'papír', 'olló', 'gyík', 'spock'];
let veletlen0_4 = Math.floor(Math.random() * options.length);
console.log(options[veletlen0_4]);

// 7. (Haladó)
// Hozz létre egy tömböt, ami a fibonacci sorozat számat tartalmazza a 100-dik elemig!
// [0, 1, 1, 2, 3, 5, 8, ...]
// https://hu.wikipedia.org/wiki/Fibonacci-sz%C3%A1mok

// 8. (Haladó)
// Írasd ki az 1000-nél kisebb prím számokat!
