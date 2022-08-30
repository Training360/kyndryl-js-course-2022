/*
- Az objektumokkal a való életből vett dolgokat modellezzük le.
- Az objektum tulajdonságokat tartalmaz, ezek key: value párok.
*/

const base = 440;
const salary = 500000;
const user = {
    id: 1,
    firstName: 'Otto',
    lastName: 'Werthofen',
    gender: 'male',
    phone: '+36708524587',
    email: 'otto.w@gmail.com',
    salary: base * 1000,
    active: false,
};
console.log(user.salary);
user.firstName = 'Arnold';
console.log(user.firstName);

// String tulajdonságok és metódusok.
const productName = 'iron';
console.log(productName.toUpperCase());
console.log(productName.length);

const testName = 'Villain';
console.log(testName.toUpperCase());

// Karakter lekérése.
console.log(testName[0]);

// String vágása.
console.log( 'sliced:', testName.slice(0, 5) );
console.log( testName );

// Capitalize: az első betűt nagybetűvé alakítjuk.
const message = 'this is not an Important message.';
console.log( message[0].toUpperCase() + message.slice(1) );

// Annak vizsgálata, hogy a string tartalmaz egy karaktert vagy szöveg-részletet.
console.log('message includes x:', message.includes('x') );
console.log('message includes not:', message.includes('not') );
console.log('message includes t or e:', /[te]/.test(message) );
console.log(
    'message includes t and i:', 
    message.toLowerCase().includes('t') && message.toLowerCase().includes('i') 
);
console.log( 'with indexOf:', message.toLowerCase().indexOf('t') > -1 );

// Szövegrészlet lecserélése egy string-ben. Új string-et ad vissza.
const feedback = 'It was a brilliant film!';
const badFeedback = feedback.replace('brilliant', 'bad');
console.log( badFeedback );

/*
- Number properties and methods.
*/
console.log(Number.MAX_SAFE_INTEGER);

const age = 44.33299;
console.log( age.toPrecision(5) * 2 );
console.log( age.toFixed(3) );
console.log( parseInt('1222.5-ből 33 kicsi nemes') );
console.log( parseFloat('1222.4-ből 33 kicsi nemes') );

const messyString = '1222.4-ből 33 kicsi nemes';
const onlyNumbers = messyString.replace(/[^0-9\.]/g, '');
console.log( parseFloat(onlyNumbers) );
