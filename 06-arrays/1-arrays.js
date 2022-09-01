let cars = ["Audi", "Mercedes", "BMW"];

console.log(cars);

// Tömb egyes elemeinek az elérése
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Tömb hossza
console.log(cars.length);

// Index tartományon kívüli elem
console.log(cars[6]); // undefined

// Elem hozzáadása a tömbhöz
cars.push("Nissan");
console.log(cars.length);
console.log(cars);

// Elem kivétele a tömbből
let car = cars.pop();
console.log("cars:", cars);
console.log("car:", car);

// Utolsó elem kiíratása
cars.push("Ferrari");
cars.push("Mazda");
console.log("Utolsó elem:", cars[cars.length - 1]);

// A tömb típus független
let vegyesTomb = ["ez egy szöveg", 2200, { name: "Peter" }, [0, 1, 2]];
console.log('vegyesTomb:');
console.log(vegyesTomb.length);
console.log(vegyesTomb);
console.log('vegyesTomb 3-dik eleme:', vegyesTomb[2]);