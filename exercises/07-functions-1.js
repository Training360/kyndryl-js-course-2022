// 1.
// Hozz létre egy függvényt, ami 3 bemeneti paramétert vár, és visszaadja a
// bemeneti paraméterek összegét!
// Hívd is meg a függvényt!
console.log("1. FELADAT ================");
function osszead3(a1, a2, a3) {
  return a1 + a2 + a3;
}
console.log(osszead3(2, 4, 7));


// 2.
// Írj egy függvényt, ami 10-szer kiíratja a bemeneti paraméterként kapott értéket, sorszámmal 
// ellátva! Hívd is meg a függvényt!
console.log("2. FELADAT ================");
function kiirat10szer (p) {
  for (let i = 0; i < 10; i++) {
    console.log(i + 1, p);
  }
}
kiirat10szer('alma');

// 3.
// Írj egy függvényt, ami bemeneti paraméterként 3 értéket vár, és összefűzi ezt a három értéket
// vesszőkkel elválasztva! Hívd is meg!
// Pl.:
// osszefuVesszovel('alma', 'körte', 'narancs')
// Out:
// alma,körte,narancs

// 4.