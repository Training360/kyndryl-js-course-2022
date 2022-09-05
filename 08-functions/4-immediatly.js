// IIFE (Immediately Invoked Function Expression)
// design pattern - tervezési minta

function run () {
  console.log('lefutott a függvény');
}
run();

(() => {
  console.log('lefutott ez a függvény is!');
  // closure, belső scope
  // nem a global scope-ot szemeteljük
})();
