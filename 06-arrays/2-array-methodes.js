let gyumolcsok = ["alma", "banán", "szőlő", "dinnye"];

// forEach - tömb bejárása függvény segítségével
console.log("forEach ================");

let nagybetusit = (s) => {
  console.log(s.toUpperCase());
};
gyumolcsok.forEach(nagybetusit);

gyumolcsok.forEach((s) => {
  console.log(s.toUpperCase());
});

gyumolcsok.forEach((s, index) => {
  console.log(index, s.toUpperCase());
});

// join - tömb elemek összefűzése
console.log("join ================");
let gyumolcsokOsszefuzve = gyumolcsok.join(',');
console.log(gyumolcsokOsszefuzve);

// concat - tömbök összefűzése (új tömb jön létre)
console.log("concat ================");
let osszefuzottTomb = [10, 8, 6].concat([2, 4, 6]);
console.log(osszefuzottTomb);

// slice - tömb elemek kivágása (új tömb jön létre)
console.log("slice ================");
console.log("gyumolcsok:");
console.log(gyumolcsok);
console.log("gyumolcsok slice 1-3:");
console.log(gyumolcsok.slice(1, 3));
console.log("gyumolcsok slice 2:");
console.log(gyumolcsok.slice(2));

// splice - tömb elemek eltávolítása (helyben)
console.log("splice ================");
let cars = ['Audi', 'BMW', 'Ferrari', 'Mercedes', 'Toyota'];
console.log(cars);
cars.splice(2)
console.log(cars);
cars = ['Audi', 'BMW', 'Ferrari', 'Mercedes', 'Toyota'];
cars.splice(2, 1);
console.log(cars);

// reverse - tömb elemeit fordított sorrenbe rakja
console.log("reverse ================");
console.log(gyumolcsok);
console.log(gyumolcsok.reverse());

