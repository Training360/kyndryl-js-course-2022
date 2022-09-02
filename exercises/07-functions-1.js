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
console.log("3. FELADAT ================");
function osszefuzVesszovel(p1, p2, p3) {
  let result = p1 + ',' + p2 + ',' + p3;
  return result;
}
console.log(osszefuzVesszovel('alma', 'körte', 'narancs'));


// 4.
// Írj egy függvényt, ami bemeneti paraméterként egy tömböt vár, és visszaadja a tömb utolsó elemét!
// Hívd is meg!
// Pl.:
// console.log(utolsoElem([1, 2, 3]))
// Out:
// 3
console.log("4. FELADAT ================");

function utolsoElem(t) {
  return t[t.length - 1];
}
console.log(utolsoElem([1, 2, 3]));
console.log(utolsoElem([1, 2, 3, 73]));



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
console.log("5. FELADAT ================");
function tombIndex(tomb, ind) {
  if (tomb.length <= ind) {
    console.log('Hiba!');
    return 0;
  }
  return tomb[ind];
}
console.log(tombIndex([10, 20, 30], 1));
console.log(tombIndex([10, 20, 30], 6));

// 6.
// Írj függvényt, ami bemeneti paraméterként két számot vár, és írja ki, hogy melyik szám a nagyobb.
// Ha a két szám egyenlő, akkor írja, ki azt.
// Pl.:
// kiertekel(4, 6);
// Out:
// A második szám nagyobb.
// Pl.:
// kiertekel(3, 3);
// Out:
// A két szám egyenlő.
console.log("6. FELADAT ================");
function kiertekel(num1, num2) {
  if (num1 > num2) {
    console.log("Az első szám a nagyobb");
  } else if (num2 > num1) {
    console.log("A második szám a nagyobb");
  } else {
    console.log("A két szám egyenlő");
  }
}
kiertekel(4,6);
kiertekel(400,6);
kiertekel(6,6);


// 7. (haladó)
// Írj függvényt, ami bemenetnek egy számot vár, és írasson ki egy fenyőfát * karakterekkel,
// aminek annyi szintje van, amennyi a szám volt. A fenyőfának legyen mindig 1 db * karakter
// talpa is. (A fenyőfa minden szintje páratlan szám, és kettővel hosszabb, mint az előző szint)
// Pl.:
// kirajzolFenyofa(5)
// Out:
//     *
//    ***
//   *****
//  *******
// *********
//     *
console.log("7. FELADAT ================");


function createTree(height) {

  let createLevel = function(starsCount, maxLength) {
    let spaceLength = (maxLength - starsCount) / 2;
    let levelSpace = '';
    let levelStars = '';
    for (let i = 0; i < spaceLength; i++ ) {
      levelSpace += ' ';
    }
    for (let i = 0; i < starsCount; i++ ) {
      levelStars += '*';
    }
    return levelSpace + levelStars + levelSpace;
  }

  for(let i= 0; i < height; i++) {
    console.log(createLevel(1 + i*2, 1 + height*2))
  }
  
  console.log(createLevel(1, 1 + height*2))
}
createTree(5);