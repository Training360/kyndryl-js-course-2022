// class keyword használata a prototype chain előállításához
// megjegyzés: a class szót más pl. Java, C++ ... programozási nyelvekből vette
//             át a Javascript, de nem teljesen ugyanúgy működik!

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return this.firstname + ' ' + this.lastname;
  }
}

let user1 = new User('Peter', 'Black');
console.log(user1);
console.log(user1.getFullname());

// class vizsgálata
User.prototype.hello = function() {
  console.log("hello");
}
user1.hello();
// A class lényegében csak elrejti, hogy a Javascriptben minden csak objektum
// És minden objektum, futás időben módosítható!