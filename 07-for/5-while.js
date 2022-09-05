// Írassunk ki számokat 0-9-ig
console.log("1. FELADAT ================")
let i = 0;
while (i < 10) {
  console.log(i);
  i += 1; // i = i + 1
}


// Generáljunk egy olyan véletlenszerű számot, ami 10-nél kisebb, és 
// osztahtó 3-mal!

console.log("2. FELADAT ================")
let rand = Math.floor(Math.random() * 10);
console.log('első generálás:', rand);
while(rand % 3 !== 0) {
  rand = Math.floor(Math.random() * 10);
  console.log('további generálás:', rand);
}
console.log('végeredmény:', rand);

