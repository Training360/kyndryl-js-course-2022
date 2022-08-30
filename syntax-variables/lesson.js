// Egysoros komment.

/*
Neve: Block comment.
Komment első sora.
Komment második sora.
Komment harmadik sora.
*/

/*
- A változókban adatokat tárolunk.
- A változó neve csak betűvel kezdődhet.
- A több szóból álló változókban az új szavakat nagybetűvel kezdjük: 
- camelCase: userName
- A változót a var|const|let kulcsszavakkal jelöljük.
*/
var userName = 'Dr. ' + 'Kiss János'; // inicializálás
userName = 'Nagy Piroska'; // override - változó felülírása vagy felüldefiniálása
console.log(userName); // a változó értékének kiíratása

/*
- Primitív típusok.
- String: szöveges tartalom - karakterek füzére
- Boolean: igaz / hamis értéket tárol: true / false
- Number: számokat tárol
*/

// String létrehozása: '' vagy ""
var carManufacturer = 'VW';
var carModel = "Passat";
var restaurant = "McDonald's";
var message = 'I don\'t know';
var teacherName = 'Cserkó' + ' ' + 'József';
console.log(teacherName);

var firstName = 'John';
var lastName = 'Doe';
var fullName = firstName + ' ' + lastName;
console.log(fullName);
var orderMessage = 'Kedves ' + firstName + '!\n\r' + 'Kérlek erősítsd meg a rendelést.';
console.log(orderMessage);

// tamplateString: `` altgr+7 vagy alt+ctrl+7
var messageFromTemplate = `Szia ${firstName}!
Üdv a csapatban!`;
console.log(messageFromTemplate);

// Number létrehozása: var age = 50;
var age = 50;
var younger = age / 2;
var older = age * 1.2;
var price = 30 + 14;
var bruttoPrice = price * 1.27;
var sale = price - 5;
console.log(age, younger, older, price, bruttoPrice, sale);

// A Math objektum használata.
// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
var roundedBruttoPrice = Math.round( price * 1.27 );
console.log(roundedBruttoPrice);
var powerTest = Math.pow( 2, 8 );
console.log(powerTest);
var randomNumber = Math.random();
console.log(randomNumber);

// Lottószámok sorsolása:
var firstNumber = Math.ceil( Math.random() * 95 );
var secondNumber = Math.ceil( Math.random() * 95 );
var thirdNumber = Math.ceil( Math.random() * 95 );
var fourthNumber = Math.ceil( Math.random() * 95 );
var fifthNumber = Math.ceil( Math.random() * 95 );

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

// Boolean típus: értéke lehet true / false
var igaz = true;
var hamis = false;

// Hozz a boltból tejet és kenyeret.
var milk = true;
var bread = true;
console.log( milk && bread );
milk = false;
console.log( milk && bread );
console.log( milk || bread );
bread = false;
console.log( milk || bread );

var result = 88 * 11 > 1000;
console.log('result: ', result);
console.log( (3 > 2 && 4 < 55) || (6 < 5 && 33 * 2 > 44) );

// Külnbség a var / let / const között.
{
    console.log('result from the block: ', result);
    result = true;

    var question = 'Who are you?';
    question = 'Who am I?';

    let answer = 'Joe';
    const answer2 = 'Jack';
    answer = 'Bill';
}

console.log(question);
console.log(result);
// console.log(answer2);
// console.log(answer);
