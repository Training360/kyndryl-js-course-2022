// 1.
// Hozz létre egy tetszőleges tömböt, amiben user adatokat tárolunk, objektumokban,
// és minden user-hez tartozzon egy id (szám), egy name (string) és egy email (string)!

// Tömb feltöltése inicializálás során
let users = [
  { id: 0, name: "John Doe", email: "johnd@gmail.com" },
  { id: 1, name: "Peter Parker", email: "spiderman@gmail.com" },
];

// Elem hozzáadása változó segítségével
let user = { id: 2, name: "Luke Skywalker", email: "jedi@gmail.com" };
users.push(user);

// Elem hozzáadása közvetlenül
users.push({
  id: 3,
  name: "Boba Fet",
  email: "boba@gmail.com",
});

// 2.
// Írasd ki az összes user nevét egymás alá!
console.log("2. FELADAT ================")
for (let user of users) {
  console.log(user.name);
}

// 3.
// Írasd ki az összes user id-ját és email címét egy sorba, kettősponttal elválasztva!
// Pl:
// 0 : johnd@gmail.com
console.log("3. FELADAT ================")
for (let user of users) {
  console.log(user.id + ":" + user.email);
}

// 4.
// Írasd ki annak a user-nek az email címét, akinek az id-ja 3!
console.log("4. FELADAT ================")
for (let user of users) {
  if (user.id === 3) {
    console.log(user.email);
  }
}

// 5.
// Minden user id-ához adj hozzá 1000-et! (Nem elég csak kiíratni)
console.log("5. FELADAT ================")
for (let user of users) {
  user.id = user.id + 1000;
}

// 6.
// Minden user-nek adj egy active:true property-t!
console.log("6. FELADAT ================")
for (let user of users) {
  user.active = true;
}
console.log(users);

// 7.
// Hozz létre egy új tömböt, amibe csak olyan user-ek kerüljenek be az eddig használt user tömbből,
// akiknek a neve tartalmaz 'o' betűt!
console.log("7. FELADAT ================")
let users2 = [];
for (let user of users) {
  if (user.name.includes('o')) {
    users2.push(user);
  }
}
console.log(users2);