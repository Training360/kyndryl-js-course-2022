/*
- A dátumok kezelésére szolgáló objektum.
*/

const thisTime = new Date();
const lastYear = new Date(2021, 0, 30, 8, 44, 22, 111);
console.log(thisTime);
console.log(lastYear);

// Dátum részeinek lekérése.
const year = thisTime.getFullYear();
const month = thisTime.getMonth() + 1;
const monthDate = thisTime.getDate();
const weekDay = thisTime.getDay();
const timeStamp = thisTime.getTime();
const offset = thisTime.getTimezoneOffset() * 60 * 1000;
console.log(`${year}-${month}-${monthDate}`, timeStamp, offset);

const precizeTime = new Date( timeStamp + (offset * -1) );
console.log(precizeTime);
