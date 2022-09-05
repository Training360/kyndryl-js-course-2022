let ora = Math.floor(Math.random() * 24);
console.log(ora);

switch (ora) {
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Hajnal van!");
    break;
  case 7:
  case 8:
    console.log("Reggel van!");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Délelőtt van van!");
    break;
  case 12:
    console.log("Dél van!");
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
    console.log("Délután van!");
    break;
  case 19:
  case 20:
  case 21:
  case 22:
    console.log("Este van!");
    break;
  case 23:
  case 0:
  case 1:
  case 2:
    console.log("Éjszaka van!");
    break;
}


