// Feladatok

// 1.
// - hozz létre egy változót, ami kapjon egy véletlenszerű értéket 0 és 1 között!
// - ha a változó értéke kisebb, mint 0.5, akkor írasd ki, hogy 'kisebb, mint 0.5'!
let random = Math.random();
if (random < 0.5) {
  console.log("kisebb, mint 0.5");
}

// 2.
// - hozz létre egy változót, aminek az értéke a saját neved legyen, egybe írva
//   szóközök nélkül!
// - ha az így kapott string hossza kisebb, mint 10, akkor írasd ki, hogy 'kisebb,
//   mint 10'!
let nev = "blaskovicsviktor";
let nevHossz = nev.length;

// 2/b.
// - ha a nevedből képzett változó hossza páros, akor írasd ki, hogy 'páros'!
// - ha a nevedből képzett változó hossza páratlan, akor írasd ki, hogy 'páratlan'!
if (nevHossz % 2 == 0) {
  console.log("páros");
}
if (nevHossz % 2 == 1) {
  console.log("páratlan");
}

// MÁSIK MEGOLDÁS (kevésbé elegáns, de minden részét vettük már):

let nevHosszString = nevHossz + '';
// let nevHosszString = `${nevHossz}`;
let utolsoKarakter = nevHosszString.slice(nevHosszString.length - 1);

if (
  utolsoKarakter == "0" || utolsoKarakter == "2" || utolsoKarakter == "4" || 
  utolsoKarakter == "6" || utolsoKarakter == "8"
) {
  console.log("páros");
}

if (
  utolsoKarakter == "1" || utolsoKarakter == "3" || utolsoKarakter == "5" || 
  utolsoKarakter == "7" || utolsoKarakter == "9"
) {
  console.log("páratlan");
}
