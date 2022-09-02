let gyumolcsok = ['alma', 'banán', 'szőlő', 'dinnye'];

// forEach - tömb bejárása függvény segítségével
console.log("forEach ================")

let nagybetusit = (s) => {
  console.log(s.toUpperCase());
}
gyumolcsok.forEach(nagybetusit);

gyumolcsok.forEach((s) => {
  console.log(s.toUpperCase());
});