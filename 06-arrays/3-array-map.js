const szamok = [10, 40, 20, 44, 62, 30, 46, 93, 210];

//  map - tömb módosítása függvény segítségével

// Feladat: hozz létre egy tömböt, ami számokat tartalmaz, majd hozz létre egy olyan tömböt,
// aminek az értékei az előző tömb értékeinek a felével egyenlőek. (Felezd meg az összes elemét
// a tömbnek.)

console.log("map / felezés ========");

// Triviális megoldás:
let szamokFele1 = [];
for (let szam of szamok) {
  szamokFele1.push(szam / 2);
}
console.log(szamokFele1);

// Megoldás map-el:
let szamokFele2 = szamok.map((s) => {
  return s / 2;
});
console.log(szamokFele2);

// Ha ugyanígy használjuk a map-et, de rövidített arrow szintaxissal:
let szamokFele3 = szamok.map((s) => s / 2);
console.log(szamokFele3);

// Még a változó se szükséges...
console.log(szamok.map((s) => s / 2));

console.log("map / módosítás ========");
// Minden user id-ához adj hozzá 1000-et! (Nem elég csak kiíratni)
let users = [
  { id: 0, name: "John Doe", email: "johnd@gmail.com" },
  { id: 1, name: "Peter Parker", email: "spiderman@gmail.com" },
  { id: 12, name: "Gregor", email: "greg@gmail.com" },
  { id: 4, name: "Joseph", email: "jose@gmail.com" },
];
console.log(
  users.map((user) => {
    user.id = user.id + 1000;
    return user;
  })
);
