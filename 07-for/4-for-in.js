const user = {
  id: 1,
  firstName: 'Otto',
  lastName: 'Werthofen',
  gender: 'male',
  phone: '+36708524587',
  email: 'otto.w@gmail.com',
  salary: 31000,
  active: false,
};

// Végigiterálunk az objektum kulcsain
for (let key in user) {
  console.log(key);
}

// Írjuk ki, az objektum összes kulcsát, és értékét!

// Statikusan:
// console.log('- ' + 'id' + ' : ' + user.id);
// console.log('- ' + 'firstName' + ' : ' + user.firstName);
// console.log('- ' + 'lastName' + ' : ' + user.lastName);
// console.log('- ' + 'gender' + ' : ' + user.gender);
// ...

// Dinamikusan:
console.log('user object tartalma:')
for (let key in user) {
  console.log(`- ${key} : ${user[key]}`);
}



