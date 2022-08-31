// Feladat:
// - hozz létre 5 db stringet tartalmazó változót
// - mindegyik valamilyen gyümölcsnek a neve legyen
// - az 5-ből kettőt konvertálj csupa nagybetűs szöveggé
// - az egyiknek vágd ki az első felét (tehát csak a második fele maradjon meg)
// - fűzd össze az összeset egy stringbe, szóközökkel elválasztva
// - írasd ki az így kapott stringet

const gyumolcs1 = 'alma';
var gyumolcs2 = 'körte';
let gyumolcs3 = 'ananász';
let gyumolcs4 = 'dinnye';
let gyumolcs5 = 'banán';

gyumolcs2 = gyumolcs2.toUpperCase();
gyumolcs3 = gyumolcs3.toUpperCase();
gyumolcs4 = gyumolcs4.slice(gyumolcs4.length / 2);

const sum = gyumolcs1 + ' ' + gyumolcs2 + ' ' + gyumolcs3 + ' ' + gyumolcs4 + ' ' + gyumolcs5;

console.log(sum);