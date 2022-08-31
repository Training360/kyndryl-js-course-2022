let randomSzam = Math.random();

console.log("randomSzam:", randomSzam);

let globalScopeVariable = "global";

if (randomSzam < 0.5) {
  console.log("===========================");
  console.log("randomSzam kisebb, mint 0.5");
  console.log("===========================");
  console.log(globalScopeVariable);

  let randomSzam2 = Math.random(); // local scope variable
  console.log("randomSzam2:", randomSzam2);
} else {
  console.log("===========================");
  console.log("randomSzam nem kisebb, mint 0.5");
  console.log("===========================");
  console.log(globalScopeVariable);
}

// console.log(randomSzam2); // HIBA! randomSzam2 is not defined

// Az if vezérlési szerkezet lokális scope-ot hoz létre!
// A lokális scope-on belül definiált változó, a scope-on kívül nem elérhető!

// Feladat
// - Hozz létre egy változót, valamilyen gyümölccsel
// - ha 4 hosszúságú, akkor íras ki, hogy 4 hosszú
// - és ha ezen felül a karakterrel kezdődik, akkor azt is írass ki
// ...

let szoveg1 = "alma";
if (szoveg1.length === 4) {
  console.log('szoveg1 hossza 4');

  if (szoveg1.charAt(0) === 'a') {
    console.log("szoveg1 'a' karakterrel kezdődik!");
  } else {
    console.log("szoveg1 nem 'a' karakterrel kezdődik!");
  }

} else {
  console.log('szoveg1 hossza nem 4');
}

// Feladat
// - hozz létre egy változót, és adj neki egy számot értékül
// - ha a szám kisebb, mint 10, akkor írasd ki, hogy kisebb, ha nagyobb, mint 10, 
//   íras ki, hogy nagyobb, egyébként pedig írasd ki, hogy egyenlő!

let szam1 = 13;
if ( szam1 < 10 ) {
  console.log('szam1 kisebb, mint 10');
} else if ( szam1 > 10 ) {
  console.log('szam1 nagyobb, mint 10');
} else {
  console.log('szam1 10');
}

