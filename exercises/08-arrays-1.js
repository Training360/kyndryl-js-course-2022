// 1.
// Hozz létre egy 5 hosszúságú tömböt, ami 10-nél kisebb számokat tartalmaz!
// Töröld ki a tömb 3-dik, 4-dik és 5-dik elemét!

console.log("1.FELADAT ============");
let tomb1 = [2, 3, 4, 5, 6];
tomb1.splice(2);
console.log(tomb1);

// 2.
// Hozz létre egy 10 elemű tömböt tetszőleges értékekkel!
// Törölj ki a tömbből minden elemet, ami a második után, és az ötödik elem előtt van, valamint ami a
// hatodik után és a kilencedik előtt van.
console.log("2.FELADAT ============");
let tomb2 = [23, 5, 1, 25, 125, 734, 13, 34, 6, 2];
tomb2.splice(6, 2);
tomb2.splice(2, 2);
console.log(tomb2);

// 3.
// Hozz létre 3 db két elemű tömböt, majd fűzd őket össze 1 db 6 elemű tömbbé!
console.log("3.FELADAT ============");
let t1 = [1, 2, 3];
let t2 = [4, 5, 6];
let t3 = [7, 8, 9];

let result = t1.concat(t2).concat(t3);
// result = result.concat(t3);
console.log(result);

// 4.
// Írj egy függvényt, ami bemeneti paraméterként két tömböt vár.
// Ha a tömbök hossza nem egyenlő, akkor térjen vissza a függvény, és írja ki, hogy:
// 'Hiba, nem egyenlő hosszúságú tömbök'.
// Máskülönben a függvény egy olyan tömbbel térjen vissza, aminek az egyik fele az első paraméterben
// kapott tömbnek az első fele, a második fele pedig a második paraméterként kapott tömbnek a
// második fele.
// Páratlan tömbhossz esetén lefele kerekítünk.
// Pl.:
// console.log(merge(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h']))
// Out:
// ['a', 'b', 'g', 'h']
console.log("4.FELADAT ============");
function merge(t1, t2) {
  if (t1.length !== t2.length) {
    console.log("Hiba, nem egyenlő hosszúságú tömbök!");
    return;
  }

  let cutIndex = Math.floor(t1.length / 2);
  let t1firstHalf = t1.slice(0, cutIndex);
  let t2secondHalf = t2.slice(cutIndex);
  return t1firstHalf.concat(t2secondHalf);
}
console.log(merge(["a", "b", "c", "d"], ["e", "f", "g", "h"]));
console.log(merge(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));

// 5.
// Írj egy függvényt, ami egy tömböt vár bemeneti paraméterként, és egy stringet. A függvény
// soronként írja ki a tömb összes elemét a stringgel összefűzve.
// Pl.:
// mergeAll(['peterw', 'johndoe', 'lukesky'], '@gmail.com');
// Out:
// peterw@gmail.com
// johndoe@gmail.com
// lukesky@gmail.com
console.log("5.FELADAT ============");

function mergeAll(arr, word) {
  arr.forEach((e) => {
    console.log(e + word);
  });
}
mergeAll(["peterw", "johndoe", "lukesky"], "@gmail.com");
