// Függvény hozzárendelése változóhoz
let osszeadFunction = function (num1, num2) {
  return num1 + num2;
}
console.log(osszeadFunction(3,4));

// Függvény definiálása objektumon belül
let user1 = {
  username: 'peter123',
  firstname: 'John',
  lastname: 'Doe',
  sayHello: function() {
    console.log('Hi! Nice to meet you!');
  }
}
user1.sayHello();



// Függvény átadása paraméterként
function vegrehajt (func, a, b) {
  console.log(func(a, b));
}

function kivonFunction (num1, num2) {
  return num1 - num2;
}

vegrehajt(osszeadFunction, 5, 8);
vegrehajt(kivonFunction, 15, 6);


// A függvények végső soron objektumok, ezért akár property-jeik is lehetnek
osszeadFunction.label = 'Összeadás';
kivonFunction.label = 'Kivonás';

function vegrehajtNevvel (func, a, b) {
  console.log(func.label, func(a, b));
}
vegrehajtNevvel(osszeadFunction, 5, 8);
vegrehajtNevvel(kivonFunction, 15, 6);