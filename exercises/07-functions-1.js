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
// vesszőkkel elválasztva, majd ezzel az értékkel tér vissza! Hívd is meg!
// Pl.:
// console.log(osszefuzVesszovel('alma', 'körte', 'narancs'))
// Out:
// alma,körte,narancs

// 4.
// Írj egy függvényt, ami bemeneti paraméterként egy tömböt vár, és visszaadja a tömb utolsó elemét!
// Hívd is meg!
// Pl.:
// console.log(utolsoElem([1, 2, 3]))
// Out:
// 3

// 5.
// Írj függvényt, ami bemeneti paraméterként egy tömböt és egy számot vár, és térjen vissza
// a tömbnek azzal az elemével, aminek indexe megegyezik a bementi paraméterként kapott számmal.
// Ha a bemeneti szám nagyobb, mint amennyi eleme van a tömbnek, akkor írja ki, hogy 'Hiba!' és 0-val
// térjen vissza.
// Pl.:
// console.log(tombIndex([10,20,30], 1));
// Out:
// 20
// Pl .:
// console.log(tombIndex([10,20,30], 6));
// Out:
// Hiba!
// 0

// 6.
// 

