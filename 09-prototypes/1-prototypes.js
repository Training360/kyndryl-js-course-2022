// this keyword and object methods
let users = [
  {
    firstname: "Peter",
    lastname: "Black",
    getFullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
];

console.log(users[0].getFullname());

// az objektumhoz tartozó függvények redundanciát okozhatnak!

users = [
  {
    firstname: "Peter",
    lastname: "Black",
    getFullname: function () {
      return this.firstname + " " + this.lastname;  // REDUNDANCIA!!!
    },
  },
  {
    firstname: "John",
    lastname: "White",
    getFullname: function () {
      return this.firstname + " " + this.lastname;  // REDUNDANCIA!!!
    },
  },
  {
    firstname: "Josh",
    lastname: "Yellow",
    getFullname: function () {
      return this.firstname + " " + this.lastname;  // REDUNDANCIA!!!
    },
  },
];


// Két dolgot szeretnénk:
// 1. definiálni a user típust, aminek van firstname és lastname
//    property-je, és van getFullname method-ja
// 2. a getFullname ne legyen redundáns!

// Megoldás: példányosítás(1) és öröklődés(2) - hasonló, mint az OOP más nyelvekben
// Javascripten belül: PROTOTYPE
console.log("PROTOTYPES =================");
function User (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
User.prototype.getFullname = function() {
  return this.firstname + ' ' + this.lastname;
}
let user1 = new User('Peter', 'Black'); // new keyword - példányosítás

console.log(user1);
console.log(user1.getFullname());