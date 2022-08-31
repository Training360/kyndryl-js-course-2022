let szoveg1 = 'Ez egy mondat.';
let szam1 = 23000;
let obj1 = {
  name: 'Péter',
  age: 22
}
let igazVagyHamis = true;

console.log('szoveg1:', typeof szoveg1);
console.log('szam1:', typeof szam1);
console.log('obj1:', typeof obj1);
console.log('igazVagyHamis:', typeof igazVagyHamis);

console.log('string-ek összeadása:', szoveg1 + szoveg1);
console.log('számok összeadása:', szam1 + szam1);
console.log('objektumok összeadása:', obj1 + obj1); // nem értelmes, string-é konvertálva összefűz
console.log('boolean változók összeadása:', igazVagyHamis + igazVagyHamis); // nem értelmes, számot kapunk eredményül??

// Az összeadás művelet a sting-ek és a számok esetében volt értelmes

console.log('szám és string összeadása:', 'ez egy string' + 42);  // összefűzés

// Hogy lehetséges ez? 
// Válasz: automatikus típuskonverzió

// Ez hibalehetőséget is rejteget magában!
console.log(12 + '23');

// Egy változó típusát értékadás során állítjuk be:
console.log('szoveg1 típusa:', typeof szoveg1);
// Adjunk szám értéket a szoveg1-nek:
szoveg1 = 24;
console.log('szoveg1 típusa:', typeof szoveg1);
