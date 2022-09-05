let students = [
  { firstname: "Peter", lastname: "White", age: 12 },
  { firstname: "Peter", lastname: "Black", age: 14 },
  { firstname: "Ben", lastname: "Green", age: 8 },
  { firstname: "George", lastname: "Red", age: 10 },
  { firstname: "John", lastname: "Yellow", age: 11 },
];

// FELADAT
// Hozz létre egy tömböt a 10 és 12 év közötti tanulók teljes nevével,
// ABC sorrend szerint növekedve!
// Használd a sort, filter és map függvényeket

let students2 = students
  .filter((s) => 10 <= s.age && s.age <= 12)
  .map((s) => s.firstname + ' ' + s.lastname)
  .sort((name1, name2) => name1 < name2 ? -1 : 1
    // if(name1 < name2) {
    //   return -1;
    // } else {
    //   return 1;
    // }
  );

console.log(students2);
