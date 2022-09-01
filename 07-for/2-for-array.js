let gyumolcsok = ['alma', 'körte', 'szilva', 'banán'];

// Tömb bejárása -> működik, de nem ajánlott megoldás
for (let i = 0; i < 4; i++) {
  console.log(i, gyumolcsok[i]);
}

// Módosítjuk a tömböt:
gyumolcsok.push('szőlő');
gyumolcsok.push('dinnye');
gyumolcsok.push('avokádó');
gyumolcsok.push('narancs');
gyumolcsok.push('citrom');

// Tömb bejárása, ajánlott megoldás #1
for (let i = 0; i < gyumolcsok.length; i++) {
  console.log(i, gyumolcsok[i]);
}

