// 1.
// Hozz létre egy 5 hosszúságú tömböt, ami 10-nél kisebb számokat tartalmaz!
// Töröld ki a tömb 3-dik, 4-dik és 5-dik elemét!

console.log("1.FELADAT ============");
let tomb1 = [ 2, 3, 4, 5, 6 ];
tomb1.splice(2);
console.log(tomb1);

// 2.
// Hozz létre egy 10 elemű tömböt tetszőleges értékekkel!
// Törölj ki a tömbből minden elemet, ami a második után, és az ötödik elem előtt van, valamint ami a 
// hatodik után és a kilencedik előtt van.

// 3.
// Hozz létre 3 db két elemű tömböt, majd fűzd őket össze 1 db 6 elemű tömbbé!

// 4.
// Írj egy függvényt, ami bemeneti paraméterként két tömböt vár.
// Ha a tömbök hossza nem egyenlő, akkor térjen vissza a függvény, és írja ki, hogy: 
// 'Hiba, nem egyenlő hosszúságú tömbök'.
// Máskülönben a függvény egy olyan tömbbel térjen vissza, aminek az egyik fele az első paraméterben kapott
// tömbnek az első fele, a második fele pedig a második paraméterként kapott tömbnek a második fele.
// Páratlan tömbhossz esetén lefele kerekítünk.
// Pl.:
// console.log(merge(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h']))
// Out:
// ['a', 'b', 'g', 'h']

// 5.
// Írj egy függvényt, ami egy tömböt vár bemeneti paraméterként, és egy stringet. A függvény 
// soronként írja ki a tömb összes elemét a stringgel összefűzve.
// Pl.:
// mergeAll(['peterw', 'johndoe', 'lukesky'], 'gmail.com');
// Out:
// peterw@gmail.com
// johndoe@gmail.com
// lukesky@gmail.com

