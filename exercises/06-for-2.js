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
for (let user of users) {
  console.log(user.name);
}

// 3.
// Írasd ki az összes user id-ját és email címét egy sorba, kettősponttal elválasztva!
// Pl:
// 0 : johnd@gmail.com
// ...

// 4.
// Írasd ki annak a user-nek az email címét, akinek az id-ja 3!

