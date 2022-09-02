// Már eddig is használtunk függvényeket. Pl:
console.log('ez egy függvényhívás');
// Itt a függvény neve: log
// Ez a függvény a console objektum metódusa
// A log függvény kiíratja a BEMENTI PARAMÉTERKÉNT kapott értékeket

// Másik függvény:
let rand = Math.random();
// Ez a random függvény, ami a Math objektum method-ja
// Ennek VISSZATÉRÉSI ÉRTÉKE egy 0-1 közötti véletleszerű szám

// Nem minden függvény tartozik objektumhoz:
let str = '1223';
console.log('typeof str:', typeof str);
let num = parseInt(str);  // olyan függvény, ami nem tarotzik objektumhoz
console.log('typeof num:', typeof num)

// Függvény létrehozása

// function: függvény létrehozásához szükséges kulcsszó
// osszead: függvény neve
// p1, p2: bemeneti paraméterek
// {...} : függvény törzs
// return: visszatérési érték megadásához használt kulcsszó
function osszead (p1, p2) {
  let osszeg = p1 + p2;
  return osszeg;
}

let a = osszead(2, 3);
console.log('osszead függvény eredménye:', a);

// console.log(osszeg) // ReferenceError: osszeg is not defined

let p1 = 10;
let p2 = 20;
a = osszead(4, 6);
console.log('osszead:', a);


// A function-ön belül elérhetőek a külső változók!
// Ettől függetlenül óvatosan kell bánni a függvényen belül a külső változókkal
let szoveg = 'külső változó';
function kiirat3szor() {
  console.log(szoveg);
  console.log(szoveg);
  console.log(szoveg);
}
kiirat3szor();

// Jobb megoldás, ha a függvény, mindent, amit használnia kell, paraméterként kap meg:
function kiirat4szer(szoveg) {
  console.log(szoveg);
  console.log(szoveg);
  console.log(szoveg);
  console.log(szoveg);
}
kiirat4szer('ezt írd ki!');

// Egy függvénynek nem feltétlen kell visszatérési érték! Lásd: kiirat3szor
// Ha viszont a függvényen belül elérjük a return parancsot, akkor azonnal kilépünk a függvényből!
// És nem feltétlen kell visszatérési értékkel kilépni. Pl:
function idoElottKilep() {
  console.log(1);
  console.log(2);
  console.log(3);
  return
  console.log(4);
}
idoElottKilep();

// Sokszor érdemes lehet kilépni a függvényből, a hibák elkerülése miatt:
function osztas(a, b) {
  if (b === 0) {
    console.log('Hiba! 0-val nem lehet osztani!')
    return
  }
  return a / b;
}

console.log(osztas(12, 4));
console.log(osztas(11, 6));
console.log(osztas(110, 0));
