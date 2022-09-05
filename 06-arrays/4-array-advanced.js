const szamok = [10, 40, 20, 44, 62, 30, 46, 93, 210];

console.log("SORT =================");
// Rakjuk növekvő sorrendbe a számokat!
szamok.sort((a, b) => a - b);
console.log(szamok);

// Rakjuk csökkenő sorrendbe a számokat!
szamok.sort((a, b) => b - a);
console.log(szamok);

console.log("FILTER =================");
let szamokFiltered = szamok.filter((a) => 35 < a && a < 80);
console.log(szamokFiltered);
