let obj = {};
console.log('üres objektum:', obj);

let obj2 = {
  property1: 'valami',
  property2: 24,
  property3: ['alma', 'körte']
}
console.log(obj2);

let user1 = {
  id: 1,
  username: 'asdf',
  age: 40
}
// objektum property-jének olvasása
console.log(user1.username);

// objektum property-jának modosítása
user1.username = 'peter';
console.log(user1.username);
console.log(user1);

// új property hozzáadása obj-hez:
user1.email = 'peter@gmail.com';
console.log(user1);

// property törlése
delete user1.age;
console.log(user1);


// Tömb:
/*

Hasonlat, a tömb OLYAN, MINT egy objektum, aminek a kulcsai számok:
  let tomb = ['alma','körte','banán'];
  let tomb = {}
  {
    0: 'alma',
    1: 'körte',
    2: 'banán'
  }

  tomb[1]

  hibás: tomb.1

  obj.username
*/